import React, {Fragment} from 'react';

const MobileNav = props => (
	<Fragment>
		<button className="navbar__toggle" onClick={props.onClick}>
			<div />
			<div />
			<div />
		</button>
		<div className="mobile__nav">
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
	</Fragment>
);

export default MobileNav;
