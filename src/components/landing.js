import React from 'react';
import Navbar from './navbar';

const Landing = props => (
	<header
		id="landing"
		style={{
			background: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
				props.bannerImage
			})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundAttachment: 'fixed'
		}}>
		<Navbar onContact={props.onContact} />
		<div className="main-header">
			<h1 className="main-heading">
				{props.headline.split(' ').map((word, index) => {
					if (word.toUpperCase() === 'WISHALL') {
						return (
							<span
								key={index}
								style={{
									color: '#325d79',
									textShadow:
										'-1px -1px 0 #efeeee, 1px -1px 0 #efeeee, -1px 1px 0 #efeeee, 1px 1px 0 #efeeee'
								}}>
								{word.toUpperCase() + ' '}
							</span>
						);
					}
					return word + ' ';
				})}
			</h1>
			<div className="main__cta">
				<a href="#get-involved" className="btn btn-primary btn-big">
					How do I get involved?
				</a>
				<a href="#intro" className="btn btn-secondary btn-big">
					Learn more
				</a>
			</div>
		</div>
	</header>
);

export default Landing;
