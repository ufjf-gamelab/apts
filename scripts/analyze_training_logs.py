#!/usr/bin/env python3

"""
Recursively scan the model tree for logs.json files, extract epoch 15 metrics,
and create ranked lists by policy and value head accuracy.
"""

import argparse
import csv
import json
import sys
from pathlib import Path
from typing import Dict, List, Tuple


def find_all_logs(root_dir: Path) -> List[Path]:
    """Recursively find all logs.json files in the directory tree."""
    return list(root_dir.rglob("logs.json"))


def calculate_depth(path: Path) -> int:
    """Calculate the depth of a model in the training tree.
    
    Depth is determined by counting 'trained' folders in the path.
    """
    return str(path).count('/trained/')


def extract_epoch_15_metrics(log_file: Path) -> Tuple[float, float, int] | None:
    """Extract policyHead_acc, valueHead_acc from epoch 15, and calculate depth."""
    try:
        with open(log_file, 'r') as f:
            data = json.load(f)
        
        epoch_15 = data.get("15")
        if epoch_15 is None:
            print(f"Warning: No epoch 15 found in {log_file}", file=sys.stderr)
            return None
        
        policy_acc = epoch_15.get("policyHead_acc")
        value_acc = epoch_15.get("valueHead_acc")
        
        if policy_acc is None or value_acc is None:
            print(f"Warning: Missing metrics in {log_file}", file=sys.stderr)
            return None
        
        depth = calculate_depth(log_file.parent)
        
        return (float(policy_acc), float(value_acc), depth)
    
    except json.JSONDecodeError as e:
        print(f"Error parsing {log_file}: {e}", file=sys.stderr)
        return None
    except Exception as e:
        print(f"Error reading {log_file}: {e}", file=sys.stderr)
        return None


def analyze_logs(root_dir: Path) -> Dict[str, Tuple[float, float, int]]:
    """Scan all logs and extract metrics indexed by folder path."""
    results = {}
    
    log_files = find_all_logs(root_dir)
    print(f"Found {len(log_files)} logs.json files")
    
    for log_file in log_files:
        # Use the parent directory as the key
        folder_path = str(log_file.parent.relative_to(root_dir))
        metrics = extract_epoch_15_metrics(log_file)
        
        if metrics is not None:
            results[folder_path] = metrics
    
    print(f"Successfully extracted metrics from {len(results)} log files")
    return results


def write_ranked_list(output_file: Path, ranked_paths: List[Tuple[str, float, float, int]], metric_name: str):
    """Write ranked list to CSV file."""
    with open(output_file, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['rank', 'folder_path', 'policy_acc', 'value_acc', 'depth'])
        
        for rank, (path, policy_acc, value_acc, depth) in enumerate(ranked_paths, 1):
            writer.writerow([rank, path, f"{policy_acc:.6f}", f"{value_acc:.6f}", depth])


def main():
    parser = argparse.ArgumentParser(
        description="Analyze training logs and rank models by performance metrics"
    )
    parser.add_argument(
        "directory",
        nargs="?",
        default=".",
        help="Root directory to scan for logs.json files (default: current directory)"
    )
    parser.add_argument(
        "--output",
        "-o",
        help="Directory where output files will be created (default: same as input directory)"
    )
    
    args = parser.parse_args()
    
    root_dir = Path(args.directory)
    if not root_dir.exists():
        print(f"Error: Directory {root_dir} does not exist", file=sys.stderr)
        sys.exit(1)
    
    # Determine output directory
    if args.output:
        output_dir = Path(args.output)
        output_dir.mkdir(parents=True, exist_ok=True)
    else:
        output_dir = root_dir
    
    print(f"Scanning directory: {root_dir}")
    
    # Collect all metrics
    results = analyze_logs(root_dir)
    
    if not results:
        print("No valid logs found", file=sys.stderr)
        sys.exit(1)
    
    # Sort by policy accuracy (descending), then by value accuracy (descending) as tiebreaker
    sorted_by_policy = sorted(
        [(path, policy, value, depth) for path, (policy, value, depth) in results.items()],
        key=lambda x: (-x[1], -x[2], x[3], x[0]),
    )
    
    # Sort by value accuracy (descending), then by policy accuracy (descending) as tiebreaker
    sorted_by_value = sorted(
        [(path, policy, value, depth) for path, (policy, value, depth) in results.items()],
        key=lambda x: (-x[2], -x[1], x[3], x[0]),
    )
    
    # Write output files
    best_policies_file = output_dir / "best_policies.csv"
    best_values_file = output_dir / "best_values.csv"
    
    write_ranked_list(best_policies_file, sorted_by_policy, "policyHead_acc")
    write_ranked_list(best_values_file, sorted_by_value, "valueHead_acc")
    
    print(f"\nResults written to:")
    print(f"  {best_policies_file}")
    print(f"  {best_values_file}")
    
    # Print top 5 for each metric
    print(f"\nTop 5 by policy accuracy:")
    for i, (path, policy, value, depth) in enumerate(sorted_by_policy[:5], 1):
        print(f"  {i}. {policy:.6f} (depth {depth}) - {path}")
    
    print(f"\nTop 5 by value accuracy:")
    for i, (path, policy, value, depth) in enumerate(sorted_by_value[:5], 1):
        print(f"  {i}. {value:.6f} (depth {depth}) - {path}")


if __name__ == "__main__":
    main()
