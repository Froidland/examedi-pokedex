/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.pokemon.com",
			},
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
			},
			{
				protocol: "https",
				hostname: "via.placeholder.com",
			},
		],
	},
	experimental: {
		missingSuspenseWithCSRBailout: false,
	},
};

export default nextConfig;
