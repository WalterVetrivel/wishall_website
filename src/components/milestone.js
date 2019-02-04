import React from 'react';

const Milestone = props => (
	<div className="marker">
		<p className="desc">
			{props.description}
		</p>
		<i className="fas fa-circle" />
		<p className="year">{props.year}</p>
	</div>
);

export default Milestone;