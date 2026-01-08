#!/usr/bin/env fish

# Recursively build training memory -> train -> reuse newest trained model.

set current_model (pwd)

argparse 'iterations=' 'seed=' -- $argv
or exit 1

set iterations 512
if set -q _flag_iterations
	set iterations $_flag_iterations
end

set seed 1
if set -q _flag_seed
	set seed $_flag_seed
end

function newest_subdir --description "Return newest immediate subdirectory of provided root"
	set root $argv[1]
	test -n "$root"; or return 1
	test -d "$root"; or return 1

	set entries (
		find "$root" -maxdepth 1 -mindepth 1 -type d -printf '%T@ %p\n' |
		sort -n |
		awk '{print $2}'
	)

	test -n "$entries"; or return 1
	set newest $entries[-1]
	echo (string trim -r -c '/' "$newest")
end

while true
	cd "$current_model"; or exit 1
	echo "[build] using model in: $current_model"
	quati build-training-memory --overwrite --announce-progress 1 --game connectFour --expansions 512 --exploration 1.4 --iterations $iterations --softening 1 --seed $seed; or exit $status

	set memory_root "$current_model/memories"
	cd "$memory_root"; or exit 1
	set memory_dir (newest_subdir "$memory_root"); or begin
		echo "[error] could not find built memory folder under $memory_root" >&2
		exit 1
	end

	cd "$memory_dir"; or exit 1
	echo "[train] starting training"
	quati train --overwrite --game connectFour --batch 128 --epochs 16 --infinity 2e+12; or exit $status

	set next_model (newest_subdir "$memory_dir/trained"); or begin
		echo "[error] could not resolve latest trained model" >&2
		exit 1
	end

	set current_model $next_model
	echo "[next] will use model: $current_model"
end
