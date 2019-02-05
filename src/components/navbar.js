import React from 'react';
import MobileNav from './mobile-nav';
import logo from '../images/logo.png';

const Navbar = props => (
	<nav className="navbar">
		<div className="navbar__logo">
			<img src={logo} alt="WISHALL" />
		</div>
		<div className="navbar__nav">
			<ul className="navbar__items">
				<li className="navbar__item">
					<a href="#intro" className="navbar__link">
						About
					</a>
				</li>
				<li className="navbar__item">
					<a href="#projects" className="navbar__link">
						What We Do
					</a>
				</li>
				<li className="navbar__item">
					<a href="#where" className="navbar__link">
						Where We Work
					</a>
				</li>
				<li className="navbar__item">
					<a href="#impact" className="navbar__link">
						Our Impact
					</a>
				</li>
			</ul>
			<ul className="navbar__cta">
				<li className="navbar__cta__item">
					<a
						href="#get-involved"
						className="navbar__cta__link navbar__cta__main">
						Get Involved
					</a>
				</li>
				<li className="navbar__cta__item">
					<button
						onClick={props.onContact}
						className="navbar__cta__link navbar__cta__secondary">
						Contact Us
					</button>
				</li>
			</ul>
		</div>
		<MobileNav onContact={props.onContact} />
	</nav>
);

export default Navbar;
