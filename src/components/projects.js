import React, {Component} from 'react';
import Project from './project';

class Projects extends Component {
	state = {
		currentSlide: 0
	};

	componentDidMount() {
		setInterval(this.nextSlide.bind(this), 5000);
	}

	nextSlide() {
		this.setState(prevState => {
			const currentSlide = prevState.currentSlide;
			if (currentSlide + 1 === this.props.projects.length)
				return {currentSlide: 0};
			return {currentSlide: currentSlide + 1};
		});
	}

	prevSlide() {
		this.setState(prevState => {
			const currentSlide = prevState.currentSlide;
			if (currentSlide - 1 < 0)
				return {currentSlide: this.props.projects.length - 1};
			return {currentSlide: currentSlide - 1};
		});
	}

	setSlide(index) {
		this.setState({currentSlide: index});
	}

	render() {
		const displayedProject = this.props.projects[this.state.currentSlide];
		return (
			<section id="projects">
				<div className="projects-slide">
					<h2 className="secondary-heading">What we do</h2>
					<Project
						title={displayedProject.title}
						description={displayedProject.description}
						imageUrl={displayedProject.image.url}
					/>
					<a className="prev" onClick={this.prevSlide.bind(this)}>
						<i className="fas fa-arrow-circle-left fa-2x" />
					</a>
					<a className="next" onClick={this.nextSlide.bind(this)}>
						<i className="fas fa-arrow-circle-right fa-2x" />
					</a>
					<div style={{textAlign: 'center'}}>
						{this.props.projects.map((project, index) => (
							<span
								key={index}
								className={`dot ${
									index === this.state.currentSlide ? 'active' : null
								}`}
								onClick={this.setSlide.bind(this, index)}
							/>
						))}
					</div>
				</div>
			</section>
		);
	}
}

export default Projects;
