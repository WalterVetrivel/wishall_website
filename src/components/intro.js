import React from 'react';
import Value from './value';

const Intro = props => (
	<section id="intro">
		<div className="intro__desc">
			<h2 className="vision">
				<i className="fas fa-quote-left" />
				{props.vision}
				<i className="fas fa-quote-right" />
			</h2>
			<p className="description">{props.mission}</p>
		</div>
		<div className="intro__values">
			<h2 className="secondary-heading">We value</h2>
			<div className="values">
				{props.values.map(value => (
					<Value key={value.value} icon={value.icon} value={value.value} />
				))}
			</div>
		</div>
	</section>
);

export default Intro;
