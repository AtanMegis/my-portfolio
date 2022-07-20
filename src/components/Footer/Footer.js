import React from 'react';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="social-media">
					<a
						href="https://www.linkedin.com/in/christian-megis-85a166235/"
						alt=""
						target="_blank"
						rel="noreferrer"
					>
						<LinkedIn />
					</a>
					<a
						href="https://github.com/AtanMegis"
						alt=""
						target="_blank"
						rel="noreferrer"
					>
						<GitHub />
					</a>
					<a href="mailto:atanmegis.cn@gmail.com">
						<Email />
					</a>
				</div>
				<p> &copy; 2022 Christian Natalino Megis</p>
			</div>
		</>
	);
};

export default Footer;
