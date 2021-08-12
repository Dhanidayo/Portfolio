//import svg  icons
import twitter from '../Resources/SocialMediaIcons/twitter.svg';
import linkedin from '../Resources/SocialMediaIcons/linkedin.svg';
import github from '../Resources/SocialMediaIcons/github.svg';
import instagram from '../Resources/SocialMediaIcons/instagram.svg';
import mail from '../Resources/SocialMediaIcons/envelope-fill.svg';

import '../components/Navbar/Navbar.css';

function SocialMediaIcons() {
	return (
		<div className="socials">
			<a href="https://twitter.com/dhanip_sarah" target="_blank" rel="noreferrer">
				<img src={twitter} alt="twitter" className="sm-links" />
			</a>
			<a href="https://www.linkedin.com/in/sarah-adebesin" target="_blank" rel="noreferrer">
				<img src={linkedin} alt="linkedin" className="sm-links" />
			</a>
			<a href="https://github.com/dhanidayo" target="_blank" rel="noreferrer">
				<img src={github} alt="github" className="sm-links" />
			</a>
			<a href="https://www.instagram.com/dhanidayo8" target="_blank" rel="noreferrer">
				<img src={instagram} alt="instagram" className="sm-links" />
			</a>
			<a href="mailto:sarahjoseph@ymail.com" target="_blank" rel="noreferrer">
				<img src={mail} alt="mail" className="sm-links" />
			</a>
		</div>
	);
}

export default SocialMediaIcons;