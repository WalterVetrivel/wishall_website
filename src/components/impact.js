import React from 'react';

const Impact = props => (
	<section id="impact">
		<h2 className="secondary-heading">Our impact can be felt across India</h2>
		<div className="impact-points">
			<ul>
				{props.impacts.map((impact, index) => (
					<li key={index}>
						<i className="far fa-check-circle" />
						{impact}
					</li>
				))}
			</ul>
		</div>
	</section>
);

export default Impact;
