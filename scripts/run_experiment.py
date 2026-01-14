#!/usr/bin/env python3

"""
Run an experiment by executing quati play-match-using-agent repeatedly with seeds 1-100.
"""

import argparse
import hashlib
import json
import subprocess
import sys
from pathlib import Path


def load_config(config_file: Path) -> dict:
    """Load configuration from JSON file."""
    try:
        with open(config_file, 'r') as f:
            return json.load(f)
    except json.JSONDecodeError as e:
        print(f"Error parsing config file: {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Error reading config file: {e}", file=sys.stderr)
        sys.exit(1)


def hash_path(path: str) -> str:
    """Generate a short hash from a path string."""
    return str(int(hashlib.md5(path.encode()).hexdigest()[:8], 16))


def build_experiment_name(config: dict) -> str:
    """Build experiment folder name from configuration parameters."""
    parts = []
    
    # Add state
    if "state" in config:
        parts.append(f"state[{config['state']}]")
    
    # Add mode
    if "mode" in config:
        parts.append(f"mode[{config['mode']}]")
    
    # Add first model hash
    if "first_model" in config:
        hash_val = hash_path(config["first_model"])
        parts.append(f"firstModel[{hash_val}]")
    
    # Add second model hash
    if "second_model" in config:
        hash_val = hash_path(config["second_model"])
        parts.append(f"secondModel[{hash_val}]")
    
    # Add softening
    if "softening" in config:
        parts.append(f"softening[{config['softening']}]")
    
    return "_".join(parts)


def build_command(config: dict, experiment_dir: Path, seed: int) -> list[str]:
    """Build the quati command from configuration."""
    cmd = ["quati", "play-match-using-agent"]
    
    # Add boolean flags
    if config.get("export", False):
        cmd.append("--export")
    if config.get("overwrite", False):
        cmd.append("--overwrite")
    
    # Add no-display flag
    cmd.append("--no-display")
    
    # Add mode
    if "mode" in config:
        cmd.extend(["--mode", config["mode"]])
    
    # Add softening
    if "softening" in config:
        cmd.extend(["--softening", str(config["softening"])])
    
    # Add separator for additional arguments
    cmd.append("--")
    
    # Add experiment directory (overrides config directory)
    cmd.extend(["--directory", str(experiment_dir)])
    
    # Add state
    if "state" in config:
        cmd.extend(["--state", config["state"]])
    
    # Add first model
    if "first_model" in config:
        first_model = Path(config["first_model"]).expanduser()
        cmd.extend(["--first-model", str(first_model)])
    
    # Add second model
    if "second_model" in config:
        second_model = Path(config["second_model"]).expanduser()
        cmd.extend(["--second-model", str(second_model)])
    
    # Add seed (from iteration)
    cmd.extend(["--seed", str(seed)])
    
    return cmd


def main():
    parser = argparse.ArgumentParser(
        description="Run experiment with seeds 1-100 using quati play-match-using-agent"
    )
    parser.add_argument(
        "config",
        help="Path to JSON configuration file"
    )
    parser.add_argument(
        "--start-seed",
        type=int,
        default=1,
        help="Starting seed number (default: 1)"
    )
    parser.add_argument(
        "--end-seed",
        type=int,
        default=100,
        help="Ending seed number (default: 100)"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print commands without executing them"
    )
    
    args = parser.parse_args()
    
    # Load configuration
    config_file = Path(args.config)
    if not config_file.exists():
        print(f"Error: Config file not found: {config_file}", file=sys.stderr)
        sys.exit(1)
    
    config = load_config(config_file)
    
    # Validate directory is in config
    if "directory" not in config:
        print("Error: 'directory' must be specified in config file", file=sys.stderr)
        sys.exit(1)
    
    # Create named experiment directory
    base_dir = Path(config["directory"]).expanduser()
    experiment_name = build_experiment_name(config)
    experiment_dir = base_dir / experiment_name
    
    if not args.dry_run:
        experiment_dir.mkdir(parents=True, exist_ok=True)
        print(f"Created experiment directory: {experiment_dir}")
    else:
        print(f"Would create experiment directory: {experiment_dir}")
    
    print(f"Running seeds {args.start_seed} to {args.end_seed}")
    print()
    
    # Run experiment for each seed
    failed_seeds = []
    
    for seed in range(args.start_seed, args.end_seed + 1):
        cmd = build_command(config, experiment_dir, seed)
        
        print(f"[Seed {seed}/{args.end_seed}] Running...")
        
        if args.dry_run:
            continue
        
        try:
            result = subprocess.run(cmd, check=False)
            if result.returncode != 0:
                print(f"Warning: Seed {seed} failed with exit code {result.returncode}", file=sys.stderr)
                failed_seeds.append(seed)
        
        except FileNotFoundError:
            print("Error: 'quati' command not found", file=sys.stderr)
            sys.exit(1)
        except Exception as e:
            print(f"Error executing seed {seed}: {e}", file=sys.stderr)
            failed_seeds.append(seed)
        
        print()
    
    # Summary
    if args.dry_run:
        print(f"Dry run complete - {args.end_seed - args.start_seed + 1} commands would be executed")
    else:
        total = args.end_seed - args.start_seed + 1
        successful = total - len(failed_seeds)
        print(f"Experiment complete: {successful}/{total} successful")
        
        if failed_seeds:
            print(f"Failed seeds: {failed_seeds}")
            sys.exit(1)


if __name__ == "__main__":
    main()
