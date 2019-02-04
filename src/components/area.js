import React, {Fragment} from 'react';

const Area = props => (
	<section id="where">
		<h2 className="secondary-heading">Where we work</h2>
		<div className="where-container">
			<div className="where__map">
				<img src={props.mapUrl} />
			</div>
			<div className="where__text">
				<p>
					We carry out our mission to spark personal, family and community
					transformation in these areas across India
				</p>
				<dl>
					{props.areas.map((area, index) => (
						<Fragment key={index}>
							<dt>{area.state}</dt>
							<dd>{area.cities}</dd>
						</Fragment>
					))}
				</dl>
			</div>
		</div>
	</section>
);

export default Area;
