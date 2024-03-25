"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageWithFallback({
	fallback,
	alt,
	src,
	className,
	width,
	height,
}: {
	fallback: string;
	alt: string;
	src: string;
	className: string;
	width: number;
	height: number;
}) {
	const [error, setError] = useState<boolean>(false);

	function setErrorTrue() {
		setError(true);
	}

	useEffect(() => {
		setError(false);
	}, [src]);

	return (
		<Image
			alt={alt}
			onError={setErrorTrue}
			src={error ? fallback : src}
			className={className}
			width={width}
			height={height}
		/>
	);
}
