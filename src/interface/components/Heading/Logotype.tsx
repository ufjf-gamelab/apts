import { cx } from "class-variance-authority";
import { Link } from "react-router-dom";

export default function Logotype() {
	const transition = cx("transition duration-300");
	const firstColor = cx(
		transition,
		"fill-accent-common group-hover:fill-accent-dark",
	);
	const secondColor = cx(
		transition,
		"fill-accent-dark group-hover:fill-accent-common",
	);

	return (
		<Link to={"/"} aria-label="APTS logotype" className="size-full">
			<svg
				width="96"
				height="96"
				viewBox="0 0 135.46666 135.46666"
				version="1.1"
				id="apts-logotype"
				inkscape:export-filename="logotype.svg"
				inkscape:export-xdpi="96"
				inkscape:export-ydpi="96"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				xmlns="http://www.w3.org/2000/svg"
				className={"group aspect-square h-full w-auto"}
			>
				<g id="square-a">
					<rect
						id="rect-nw"
						width="67.73333"
						height="67.73333"
						x="3.5527137e-15"
						y="7.6293945e-06"
						className={secondColor}
					/>
					<path
						d="M 4.7695763,53.763332 28.589113,13.97003 H 39.031328 L 62.963753,53.763332 H 50.828207 l -4.854218,-8.46666 H 20.85623 l -4.854218,8.46666 z M 23.960673,38.410455 h 18.852429 l -9.36977,-16.42532 z"
						id="letter-a"
						aria-label="A"
						className={firstColor}
					/>
				</g>
				<g id="square-p">
					<rect
						id="rect-ne"
						width="67.73333"
						height="67.73333"
						x="67.73333"
						y="7.6293945e-06"
						className={firstColor}
					/>
					<path
						d="M 75.099351,53.904446 V 14.393365 q 6.773328,-0.225778 11.627546,-0.338666 4.854219,-0.112889 8.07155,-0.169334 3.217331,-0.05644 4.967107,-0.05644 8.692436,0 14.223986,0.790222 5.53155,0.733777 8.57955,2.370665 3.10444,1.636887 4.28978,4.402663 1.24177,2.709331 1.24177,6.660439 0,4.063997 -1.29822,6.886217 -1.24177,2.765776 -4.12044,4.515552 -2.82222,1.693332 -7.61999,2.427109 -4.79778,0.733777 -11.85333,0.733777 -2.54,0 -4.233328,0 -1.693332,0 -2.991553,0 -1.298221,0 -2.709331,0 -1.354666,-0.05644 -3.160886,-0.112888 -1.806221,-0.05644 -4.571997,-0.112889 V 53.904446 Z M 85.541565,21.053804 v 14.280434 q 2.257776,0.05644 3.951108,0.112889 1.749777,0.05644 3.160887,0.112888 1.467554,0.05644 2.935108,0.112889 1.467555,0 3.217331,0 5.983111,0 9.651991,-0.395111 3.66889,-0.451555 5.588,-1.354665 1.97555,-0.903111 2.65288,-2.370665 0.73378,-1.467554 0.73378,-3.499553 0,-1.91911 -0.73378,-3.273775 -0.73377,-1.41111 -2.59644,-2.314221 -1.86266,-0.90311 -5.13644,-1.298221 -3.27377,-0.451555 -8.35377,-0.451555 -1.523999,0 -2.878664,0 -1.298222,0 -2.878665,0.05644 -1.580443,0.05645 -3.838219,0.112889 -2.201332,0.05645 -5.475107,0.169333 z"
						id="letter-p"
						aria-label="P"
						className={secondColor}
					/>
				</g>
				<g id="square-t">
					<rect
						id="rect-sw"
						width="67.73333"
						height="67.73333"
						x="3.9968029e-15"
						y="67.73333"
						className={firstColor}
					/>
					<path
						d="M 60.011709,89.916017 H 39.070836 V 121.46844 H 28.628622 V 89.916017 H 7.6313049 v -7.95866 H 60.011709 Z"
						id="letter-t"
						aria-label="T"
						className={secondColor}
					/>
				</g>
				<g id="square-s">
					<rect
						id="rect-se"
						width="67.73333"
						height="67.73333"
						x="67.73333"
						y="67.733337"
						className={secondColor}
					/>
					<path
						d="m 124.57286,83.763582 -1.74977,7.05555 q -1.016,-0.282222 -3.16089,-0.733777 -2.14489,-0.451556 -5.02355,-0.903111 -2.87867,-0.451555 -6.15244,-0.733777 -3.21733,-0.338666 -6.49111,-0.338666 -6.999103,0 -10.5551,1.128888 -3.499553,1.128888 -3.499553,3.443108 0,1.523999 1.298221,2.427109 1.298222,0.846666 3.725331,1.354666 2.483554,0.451555 6.039551,0.790222 3.556,0.282222 8.12799,0.677332 4.74133,0.451556 8.57955,1.185333 3.89467,0.733777 6.66044,2.032001 2.82222,1.29822 4.28978,3.33022 1.52399,1.97555 1.52399,5.02355 0,4.57199 -3.16088,7.28133 -3.16089,2.70933 -9.20044,3.9511 -6.03955,1.18534 -14.67554,1.18534 -3.668889,0 -7.450664,-0.33867 -3.72533,-0.33867 -7.224883,-0.84667 -3.499553,-0.508 -6.491106,-1.12888 -2.935109,-0.62089 -4.967108,-1.18534 l 1.806221,-7.33777 q 2.144888,0.67733 5.079996,1.35467 2.991554,0.67733 6.491106,1.29822 3.499553,0.56444 7.111995,0.90311 3.668886,0.33867 7.111993,0.33867 5.02355,0 8.24088,-0.39512 3.21733,-0.45155 4.79778,-1.41111 1.58044,-1.01599 1.58044,-2.65288 0,-1.524 -1.58044,-2.37067 -1.58045,-0.84666 -4.45911,-1.35466 -2.87866,-0.508 -6.88622,-0.84667 -4.00755,-0.33867 -8.918212,-0.84666 -4.007552,-0.39512 -7.394216,-1.12889 -3.33022,-0.79022 -5.757329,-2.08845 -2.427109,-1.29822 -3.838219,-3.330215 -1.354666,-2.031999 -1.354666,-4.967108 0,-3.386664 1.580443,-5.700884 1.636888,-2.370665 4.797774,-3.781775 3.217331,-1.467554 8.071549,-2.144887 4.854219,-0.677333 11.345326,-0.677333 5.02355,0 9.31333,0.508 4.28977,0.451555 7.5071,1.072443 3.21733,0.564444 4.91066,0.903111 z"
						id="letter-s"
						aria-label="S"
						className={firstColor}
					/>
				</g>
			</svg>
		</Link>
	);
}
