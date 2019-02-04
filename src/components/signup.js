import React, {Fragment, Component} from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Spinner from './spinner';

class SignUp extends Component {
	state = {
		name: '',
		organization: '',
		email: '',
		loading: false,
		message: ''
	};

	onNameChange(e) {
		this.setState({name: e.target.value});
	}

	onEmailChange(e) {
		this.setState({email: e.target.value});
	}

	onOrganizationChange(e) {
		this.setState({organization: e.target.value});
	}

	async onSubmit(e) {
		e.preventDefault();
		this.setState({loading: true});
		try {
			const result = await addToMailchimp(this.state.email, {
				FNAME: this.state.name,
				ORG: this.state.organization || '',
				SUB: this.props.formType
			});
			this.setState({loading: false, message: result.msg});
		} catch (err) {
			console.log(err);
		}
	}

	renderForm() {
		return (
			<form className="form" onSubmit={this.onSubmit.bind(this)}>
				<div className="form-field">
					<label htmlFor="signup_name" className="form-label">
						Name* (required)
					</label>
					<input
						type="text"
						className="form-input"
						id="signup_name"
						value={this.state.name}
						onChange={this.onNameChange.bind(this)}
						placeholder="Enter your name"
						required
					/>
				</div>
				<div className="form-field">
					<label htmlFor="signup_organization" className="form-label">
						Organization/Church
					</label>
					<input
						type="text"
						className="form-input"
						id="signup_organization"
						value={this.state.organization}
						onChange={this.onOrganizationChange.bind(this)}
						placeholder="Enter your organization"
					/>
				</div>
				<div className="form-field">
					<label htmlFor="signup_email" className="form-label">
						Email* (required)
					</label>
					<input
						type="email"
						className="form-input"
						id="signup_email"
						value={this.state.email}
						onChange={this.onEmailChange.bind(this)}
						placeholder="Enter your email"
						required
					/>
				</div>
				<div className="right-text">
					<button
						type="button"
						className="btn btn-secondary"
						onClick={this.props.onCancel}>
						Cancel
					</button>
					<button type="submit" className="btn btn-primary">
						Sign up
					</button>
				</div>
			</form>
		);
	}

	render() {
		let content = <Spinner />;
		if (this.state.loading) {
			content = <Spinner />;
		} else if (this.state.message !== '') {
			content = (
				<div className="center-text">
					<h2 style={{marginBottom: '1rem'}}>{this.state.message}</h2>
					<button onClick={this.props.onCancel} className="btn btn-secondary">
						Close
					</button>
				</div>
			);
		} else {
			content = this.renderForm();
		}
		return (
			<Fragment>
				<h2 className="form-title">{this.props.formTitle}</h2>
				{content}
			</Fragment>
		);
	}
}

export default SignUp;
