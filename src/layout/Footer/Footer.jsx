import FooterTop from './FooterTop'
import FooterDirectory from './FooterDirectory'
import HelpCenter from './HelpCenter'
import Address from './Address'

const Footer = () => {
	return (
		<div className='bg-white lg:border-t-4 lg:border-[#ee4d2d]'>
			<FooterTop />
            <FooterDirectory />
			<HelpCenter />
			<Address />
		</div>
	)
}

export default Footer
