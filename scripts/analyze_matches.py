#!/usr/bin/env python3

"""
Analyze match results by finding memoryOfMatch.json files and generating metrics.json.
"""

import argparse
import json
import sys
from pathlib import Path


def analyze_match(match_dir: Path) -> dict | None:
    """Analyze a match result from memoryOfMatch.json and save metrics."""
    memory_file = match_dir / "memoryOfMatch.json"
    
    if not memory_file.exists():
        return None
    
    try:
        with open(memory_file, 'r') as f:
            data = json.load(f)
        
        # Get final points
        final_points = data.get("finalPointsOfEachPlayer", {})
        player_0_points = final_points.get("0", 0)
        player_1_points = final_points.get("1", 0)
        
        # Determine winner (-1 for draw, 0 or 1 for player)
        if player_0_points > player_1_points:
            winner = 0
        elif player_1_points > player_0_points:
            winner = 1
        else:
            winner = -1  # Draw
        
        # Count turns and analyze move patterns
        memory_of_turns = data.get("memoryOfTurns", [])
        turn_count = len(memory_of_turns)
        
        # Track move counts for each player (initialize all positions 0-6)
        player_0_moves = {str(i): 0 for i in range(7)}
        player_1_moves = {str(i): 0 for i in range(7)}
        
        for turn in memory_of_turns:
            player_who_played = turn.get("indexOfPlayerWhoPlayedMove")
            picked_move = turn.get("indexOfPickedMove")
            
            if player_who_played is not None and picked_move is not None:
                if player_who_played == 0:
                    player_0_moves[str(picked_move)] = player_0_moves.get(str(picked_move), 0) + 1
                elif player_who_played == 1:
                    player_1_moves[str(picked_move)] = player_1_moves.get(str(picked_move), 0) + 1
        
        metrics = {
            "winner": winner,
            "turn_count": turn_count,
            "player_0_moves": player_0_moves,
            "player_1_moves": player_1_moves
        }
        
        # Write metrics to file in match directory
        metrics_file = match_dir / "metrics.json"
        with open(metrics_file, 'w') as f:
            json.dump(metrics, f, indent=2)
        
        return metrics
    
    except Exception as e:
        print(f"Warning: Failed to analyze {memory_file}: {e}", file=sys.stderr)
        return None


def find_memory_files(root_dir: Path) -> list[Path]:
    """Recursively find all memoryOfMatch.json files."""
    return list(root_dir.rglob("memoryOfMatch.json"))


def calculate_aggregate_statistics(all_metrics: list[dict]) -> dict:
    """Calculate aggregate statistics from all match metrics."""
    total_matches = len(all_metrics)
    
    if total_matches == 0:
        return {}
    
    # Win statistics
    player_0_wins = sum(1 for m in all_metrics if m.get("winner") == 0)
    player_1_wins = sum(1 for m in all_metrics if m.get("winner") == 1)
    draws = sum(1 for m in all_metrics if m.get("winner") == -1)
    
    # Game length statistics
    turn_counts = [m.get("turn_count", 0) for m in all_metrics]
    avg_turns = sum(turn_counts) / len(turn_counts) if turn_counts else 0
    min_turns = min(turn_counts) if turn_counts else 0
    max_turns = max(turn_counts) if turn_counts else 0
    
    # Calculate median
    sorted_turns = sorted(turn_counts)
    mid = len(sorted_turns) // 2
    if len(sorted_turns) % 2 == 0:
        median_turns = (sorted_turns[mid - 1] + sorted_turns[mid]) / 2
    else:
        median_turns = sorted_turns[mid]
    
    # Calculate standard deviation
    if len(turn_counts) > 1:
        variance = sum((x - avg_turns) ** 2 for x in turn_counts) / (len(turn_counts) - 1)
        std_dev_turns = variance ** 0.5
    else:
        std_dev_turns = 0
    
    # Aggregate move distributions
    player_0_total_moves = {str(i): 0 for i in range(7)}
    player_1_total_moves = {str(i): 0 for i in range(7)}
    
    for m in all_metrics:
        p0_moves = m.get("player_0_moves", {})
        p1_moves = m.get("player_1_moves", {})
        
        for move_idx in range(7):
            move_str = str(move_idx)
            player_0_total_moves[move_str] += p0_moves.get(move_str, 0)
            player_1_total_moves[move_str] += p1_moves.get(move_str, 0)
    
    # Win rate by game length buckets
    length_buckets = {
        "very_short": {"range": "<= 20 turns", "player_0": 0, "player_1": 0, "draws": 0, "count": 0},
        "short": {"range": "21-30 turns", "player_0": 0, "player_1": 0, "draws": 0, "count": 0},
        "medium": {"range": "31-40 turns", "player_0": 0, "player_1": 0, "draws": 0, "count": 0},
        "long": {"range": "> 40 turns", "player_0": 0, "player_1": 0, "draws": 0, "count": 0}
    }
    
    for m in all_metrics:
        turns = m.get("turn_count", 0)
        winner = m.get("winner")
        
        if turns <= 20:
            bucket = "very_short"
        elif turns <= 30:
            bucket = "short"
        elif turns <= 40:
            bucket = "medium"
        else:
            bucket = "long"
        
        length_buckets[bucket]["count"] += 1
        if winner == 0:
            length_buckets[bucket]["player_0"] += 1
        elif winner == 1:
            length_buckets[bucket]["player_1"] += 1
        else:
            length_buckets[bucket]["draws"] += 1
    
    # Calculate win rates for each bucket
    for bucket in length_buckets.values():
        if bucket["count"] > 0:
            bucket["player_0_rate"] = bucket["player_0"] / bucket["count"]
            bucket["player_1_rate"] = bucket["player_1"] / bucket["count"]
            bucket["draw_rate"] = bucket["draws"] / bucket["count"]
    
    return {
        "total_matches": total_matches,
        "win_statistics": {
            "player_0_wins": player_0_wins,
            "player_1_wins": player_1_wins,
            "draws": draws,
            "player_0_win_rate": player_0_wins / total_matches if total_matches > 0 else 0,
            "player_1_win_rate": player_1_wins / total_matches if total_matches > 0 else 0,
            "draw_rate": draws / total_matches if total_matches > 0 else 0
        },
        "game_length_statistics": {
            "average": round(avg_turns, 2),
            "median": median_turns,
            "min": min_turns,
            "max": max_turns,
            "std_dev": round(std_dev_turns, 2)
        },
        "aggregate_move_distribution": {
            "player_0": player_0_total_moves,
            "player_1": player_1_total_moves
        },
        "win_rate_by_game_length": length_buckets
    }


def print_statistics_summary(stats: dict):
    """Print a formatted summary of statistics."""
    print("\n" + "="*60)
    print("EXPERIMENT SUMMARY")
    print("="*60)
    print(f"Total matches: {stats['total_matches']}")
    print()
    print("Win Statistics:")
    ws = stats['win_statistics']
    print(f"  Player 0:\t{ws['player_0_wins']} wins\t({ws['player_0_win_rate']:.1%})")
    print(f"  Player 1:\t{ws['player_1_wins']} wins\t({ws['player_1_win_rate']:.1%})")
    print(f"  Draws:\t{ws['draws']}\t({ws['draw_rate']:.1%})")
    print()
    print("Game Length:")
    gl = stats['game_length_statistics']
    print(f"  Average: {gl['average']} turns")
    print(f"  Median:  {gl['median']} turns")
    print(f"  Range:   {gl['min']}-{gl['max']} turns")
    print(f"  Std Dev: {gl['std_dev']}")
    print()
    print("Move Distribution:")
    p0_moves = stats['aggregate_move_distribution']['player_0']
    p1_moves = stats['aggregate_move_distribution']['player_1']
    total_p0 = sum(p0_moves.values())
    total_p1 = sum(p1_moves.values())
    print("  Column  P0 Moves  P0 %    P1 Moves  P1 %")
    for i in range(7):
        p0_count = p0_moves[str(i)]
        p1_count = p1_moves[str(i)]
        p0_pct = (p0_count / total_p0 * 100) if total_p0 > 0 else 0
        p1_pct = (p1_count / total_p1 * 100) if total_p1 > 0 else 0
        print(f"    {i}     {p0_count:6d}   {p0_pct:5.1f}%   {p1_count:6d}   {p1_pct:5.1f}%")
    print("="*60)


def main():
    parser = argparse.ArgumentParser(
        description="Analyze match results and generate metrics.json files"
    )
    parser.add_argument(
        "directory",
        nargs="?",
        default=".",
        help="Root directory to scan for memoryOfMatch.json files (default: current directory)"
    )
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="Overwrite existing metrics.json files"
    )
    parser.add_argument(
        "--stats",
        action="store_true",
        default=True,
        help="Generate aggregate experiment statistics (default: True)"
    )
    parser.add_argument(
        "--no-stats",
        dest="stats",
        action="store_false",
        help="Skip generating aggregate statistics"
    )
    parser.add_argument(
        "--stats-output",
        help="Output file for statistics (default: statistics.json in root directory)"
    )
    
    args = parser.parse_args()
    
    root_dir = Path(args.directory)
    if not root_dir.exists():
        print(f"Error: Directory {root_dir} does not exist", file=sys.stderr)
        sys.exit(1)
    
    print(f"Scanning directory: {root_dir}")
    
    # Find all memory files
    memory_files = find_memory_files(root_dir)
    print(f"Found {len(memory_files)} memoryOfMatch.json files")
    
    if not memory_files:
        print("No match results found")
        return
    
    # Process each match
    analyzed = 0
    skipped = 0
    failed = 0
    all_metrics = []
    
    for memory_file in memory_files:
        match_dir = memory_file.parent
        metrics_file = match_dir / "metrics.json"
        
        # Skip if metrics already exists and not overwriting
        if metrics_file.exists() and not args.overwrite:
            skipped += 1
            # Still load for stats if needed
            if args.stats:
                try:
                    with open(metrics_file, 'r') as f:
                        all_metrics.append(json.load(f))
                except:
                    pass
            continue
        
        # Analyze the match
        metrics = analyze_match(match_dir)
        if metrics:
            analyzed += 1
            all_metrics.append(metrics)
            print(f"✓ {match_dir.relative_to(root_dir)}")
        else:
            failed += 1
            print(f"✗ {match_dir.relative_to(root_dir)}", file=sys.stderr)

    # Summary
    print(f"\nAnalysis complete:")
    print(f"  Analyzed: {analyzed}")
    print(f"  Skipped:  {skipped}")
    print(f"  Failed:   {failed}")
    
    # Generate aggregate statistics if requested
    if args.stats and all_metrics:
        print(f"\nGenerating aggregate statistics from {len(all_metrics)} matches...")
        stats = calculate_aggregate_statistics(all_metrics)
        
        # Determine output file
        if args.stats_output:
            stats_file = Path(args.stats_output)
        else:
            stats_file = root_dir / "statistics.json"
        
        # Write statistics
        with open(stats_file, 'w') as f:
            json.dump(stats, f, indent=2)
        
        print(f"Statistics saved to: {stats_file}")
        print_statistics_summary(stats)
    
    if failed > 0:
        sys.exit(1)


if __name__ == "__main__":
    main()
