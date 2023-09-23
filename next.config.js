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
			},
			{
				protocol: 'https',
				hostname: 'deo.shopeemobile.com',
				port: '',
				pathname: '/shopee/shopee-mobilemall-live-sg/flashsale/**'
			}
		]
	}
}

module.exports = nextConfig
