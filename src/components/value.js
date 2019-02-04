import React from 'react';

const Value = props => (
	<div className="value">
		<i className={props.icon} />
		<p>{props.value}</p>
	</div>
);

export default Value;