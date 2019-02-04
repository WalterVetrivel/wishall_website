import React, {Component} from 'react';
import Action from './action';

class Actions extends Component {
	render() {
		return (
			<section id="get-involved">
				<h2 className="secondary-heading">Join our cause today</h2>
				<p className="tagline">
					Here are some wonderful opportunities for you to actively engage in
					transforming communities with WISHALL.
				</p>
				<div className="get-involved-actions">
					<Action
						icon="far fa-newspaper fa-5x"
						title="Connect with WISHALL"
						description="Stay up-to-date with what’s happening at WISHALL, read inspiring
							stories, and learn how you can get involved."
						buttonLabel="I want to receive updates"
						onClick={this.props.onClickNewsletter}
					/>
					<Action
						icon="fas fa-praying-hands fa-5x"
						title="Pray for WISHALL"
						description="Sign up and receive monthly prayer updates."
						buttonLabel="I want to pray for WISHALL"
						onClick={this.props.onClickPrayer}
					/>
					<Action
						icon="fas fa-church fa-5x"
						title="Engage your faith organization"
						description="Organise training/exposure events for your church/mission on
							community transformation."
						buttonLabel="Write to us"
						onClick={this.props.onClickEngage}
					/>
					<Action
						icon="far fa-handshake fa-5x"
						title="Join WISHALL Team"
						description="Use your God Given talents and skill to be part of this
							transformation effort. Explore intern, volunteer and career
							opportunities."
						buttonLabel="I want to join the team"
						onClick={this.props.onClickJoin}
					/>
				</div>
			</section>
		);
	}
}

export default Actions;
