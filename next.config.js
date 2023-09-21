/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cf.shopee.vn',
				port: '',
				pathname: '/file/**'
			}
		]
	}
}

module.exports = nextConfig
