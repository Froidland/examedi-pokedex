import bg from "@/assets/bg.png";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const flexoMediumFont = localFont({ src: "../assets/fonts/Flexo-Medium.ttf" });

export const metadata: Metadata = {
	title: "Pokedex",
	description: "Pokedex replica made for the Examedi at home interview.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			style={{
				backgroundImage: `url(${bg.src})`,
			}}
		>
			<body className={`${flexoMediumFont.className}`}>{children}</body>
		</html>
	);
}
