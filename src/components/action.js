import React from 'react';

const Action = props => (
	<div className="action">
		<i className={props.icon} />
		<h3>{props.title}</h3>
		<p>{props.description}</p>
		<button className="btn btn-primary" onClick={props.onClick}>
			{props.buttonLabel}
		</button>
	</div>
);

export default Action;
