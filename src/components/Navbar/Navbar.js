import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import Reorder from '@material-ui/icons/Reorder';

const Navbar = () => {
	const [expandNavbar, setExpandNavbar] = useState(false);
	return (
		<>
			<div className="navbar" id={expandNavbar ? 'open' : 'close'}>
				<div className="toggleButton">
					<button
						onClick={() => {
							setExpandNavbar((prev) => !prev);
						}}
					>
						<Reorder />
					</button>
				</div>
				<div className="links">
					<Link to="/">Home</Link>
					<Link to="/projects">Projects </Link>
					<Link to="/experiences">Experiences</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
