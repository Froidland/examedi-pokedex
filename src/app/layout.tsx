import bg from "@/assets/bg.png";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}