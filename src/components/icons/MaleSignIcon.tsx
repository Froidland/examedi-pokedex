import type { SVGProps } from "react";

export function MaleSignIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="2em"
			height="2em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="none"
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M14.232 9.747a6 6 0 1 0-8.465 8.506a6 6 0 0 0 8.465-8.506m0 0L20 4m0 0h-4m4 0v4"
			></path>
		</svg>
	);
}
