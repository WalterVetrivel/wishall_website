import React from 'react';

const Project = props => (
	<div className="project fade">
		<h3 className="project__title">{props.title}</h3>
		<div className="project__details">
			<div className="project__img">
				<img src={props.imageUrl} alt={props.title} />
			</div>
			<div className="project__description">
				<p>{props.description}</p>
			</div>
		</div>
	</div>
);

export default Project;
