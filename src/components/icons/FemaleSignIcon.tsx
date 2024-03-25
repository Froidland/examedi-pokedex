import type { SVGProps } from "react";

export function FemaleSignIcon(props: SVGProps<SVGSVGElement>) {
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
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M12 15a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 0v6m-2-2h4"
			></path>
		</svg>
	);
}
