import React from 'react';
import Milestone from './milestone';

const Journey = props => (
	<section id="journey">
		<h2 className="secondary-heading">Our Journey</h2>
		<div className="timeline">
			<div className="line" />
			{props.milestones.map((milestone, index) => (
				<Milestone
					key={index}
					description={milestone.description}
					year={milestone.year}
				/>
			))}
		</div>
	</section>
);

export default Journey;
