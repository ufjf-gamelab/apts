#!/usr/bin/env fish

# Recursively build training memory -> train -> reuse newest trained model.

set current_model (pwd)

argparse 'start=' 'iterations=' 'seed=' 'infinity=' -- $argv
or exit 1

set start_folder "model"
if set -q _flag_start
	set start_folder $_flag_start
end

set iterations 512
if set -q _flag_iterations
	set iterations $_flag_iterations
end

set seed 1
if set -q _flag_seed
	set seed $_flag_seed
end

set infinity 2e+12
if set -q _flag_infinity
	set infinity $_flag_infinity
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

function train_model --description "Train a model in the current directory"
	echo "[train] starting training"
	quati train --overwrite --game connectFour --batch 128 --epochs 16 --infinity $infinity
end

function find_next_model --description "Find the newest trained model from the given directory"
	set base_dir $argv[1]
	set next_model (newest_subdir "$base_dir/trained"); or begin
		echo "[error] could not resolve latest trained model" >&2
		return 1
	end
	echo $next_model
end

while true
	cd "$current_model"; or exit 1
	
	if test "$start_folder" = "memory"
		# Starting from memory folder - skip to training
		echo "[train] starting from memory folder: $current_model"
		train_model; or exit $status

		set current_model (find_next_model "$current_model"); or exit 1
		set start_folder "model"
		echo "[next] will use model: $current_model"
		continue
	end

	# Starting from model folder - build memory first
	echo "[build] using model in: $current_model"
	quati build-training-memory --overwrite --announce-progress 1 --game connectFour --expansions 512 --exploration 1.4 --iterations $iterations --softening 1 --seed $seed; or exit $status

	set memory_root "$current_model/memories"
	cd "$memory_root"; or exit 1
	set memory_dir (newest_subdir "$memory_root"); or begin
		echo "[error] could not find built memory folder under $memory_root" >&2
		exit 1
	end

	cd "$memory_dir"; or exit 1
	train_model; or exit $status

	set current_model (find_next_model "$memory_dir"); or exit 1
	echo "[next] will use model: $current_model"
end
