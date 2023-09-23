/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cf.shopee.vn',
				port: '',
				pathname: '/file/**'
			},
			{
				protocol: 'https',
				hostname: 'down-vn.img.susercontent.com',
				port: '',
				pathname: '/file/**'
			}
		]
	}
}

module.exports = nextConfig
