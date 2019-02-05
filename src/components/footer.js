import React from 'react';

const Footer = props => (
	<footer className="footer">
		<p className="footer__copyright">
			Copyright &copy; WISHALL
			<script>document.write(new Date().getFullYear());</script>. All rights
			reserved.
		</p>
		<div className="footer__nav">
			<h3>Links</h3>
			<ul className="footer__links">
				<li>
					<a href="#intro" className="footer__link">
						About
					</a>
				</li>
				<li>
					<a href="#projects" className="footer__link">
						Our Projects
					</a>
				</li>
				<li>
					<a href="#where" className="footer__link">
						Where We Work
					</a>
				</li>
				<li>
					<a href="#get-involved" className="footer__link">
						Get Involved
					</a>
				</li>
			</ul>
		</div>
		<div className="footer__contact">
			<h3>Contact Us</h3>
			<p>
				<i className="fas fa-map-marker-alt" />
				{props.address}
			</p>
			<p>
				<i className="far fa-envelope" />
				{props.email}
			</p>
			<p>
				<i className="fas fa-phone" />
				{props.phone}
			</p>
			<button onClick={props.onContact} className="btn btn-big btn-secondary">
				Contact us
			</button>
		</div>
	</footer>
);

export default Footer;
