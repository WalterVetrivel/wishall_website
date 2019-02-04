import React from 'react';

const Donation = props => (
	<section id="donate">
		<div className="donate__images">
			<div className="donate__image">
				<img src={props.image1Url} alt="Donate 1" />
			</div>
			<div className="donate__image">
				<img src={props.image2Url} alt="Donate 2" />
			</div>
			<div className="donate__image">
				<img src={props.image3Url} alt="Donate 3" />
			</div>
		</div>
		<div className="donate__message">
			<h2>{props.message}</h2>
			<button onClick={props.onClick} className="btn btn-primary btn-big">
				<i className="fas fa-donate" />I want to give
			</button>
		</div>
	</section>
);

export default Donation;
