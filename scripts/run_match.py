#!/usr/bin/env python3

"""
Run quati play-match-using-agent with arguments from a JSON configuration file.
"""

import argparse
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


def build_command(config: dict) -> list[str]:
    """Build the quati command from configuration."""
    cmd = ["quati", "play-match-using-agent"]

    # Add directory
    cmd.append("--")
    if "directory" in config:
        directory = Path(config["directory"]).expanduser()
        cmd.extend(["--directory", str(directory)])
    
    # Add boolean flags
    if config.get("export", False):
        cmd.append("--export")
    if config.get("overwrite", False):
        cmd.append("--overwrite")
    
    # Add mode
    if "mode" in config:
        cmd.extend(["--mode", config["mode"]])
    
    # Add softening
    if "softening" in config:
        cmd.extend(["--softening", str(config["softening"])])
    
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
    
    # Add seed
    if "seed" in config:
        cmd.extend(["--seed", str(config["seed"])])
    
    return cmd


def main():
    parser = argparse.ArgumentParser(
        description="Run quati play-match-using-agent with arguments from JSON config"
    )
    parser.add_argument(
        "config",
        help="Path to JSON configuration file"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print the command without executing it"
    )
    
    args = parser.parse_args()
    
    # Load configuration
    config_file = Path(args.config)
    if not config_file.exists():
        print(f"Error: Config file not found: {config_file}", file=sys.stderr)
        sys.exit(1)
    
    config = load_config(config_file)
    
    # Build command
    cmd = build_command(config)
    
    # Print command
    print("Command:", " ".join(cmd))
    print()
    
    if args.dry_run:
        print("Dry run - command not executed")
        return
    
    # Execute command
    try:
        result = subprocess.run(cmd, check=False)
        sys.exit(result.returncode)
    except FileNotFoundError:
        print("Error: 'quati' command not found", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Error executing command: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
