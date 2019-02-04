import React, {Fragment, Component} from 'react';
import Spinner from './spinner';
import axios from 'axios';

function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
}

class Contact extends Component {
	state = {
		name: '',
		organization: '',
		email: '',
		phone: '',
		message: '',
		loading: false,
		responseMessage: ''
	};

	onChangeName(e) {
		this.setState({name: e.target.value});
	}

	onChangeOrganization(e) {
		this.setState({organization: e.target.value});
	}

	onChangeEmail(e) {
		this.setState({email: e.target.value});
	}

	onChangePhone(e) {
		this.setState({phone: e.target.value});
	}

	onChangeMessage(e) {
		this.setState({message: e.target.value});
	}

	async onSubmit(e) {
		e.preventDefault();
		this.setState({loading: true});
		const formData = {
			name: this.state.name,
			email: this.state.email,
			organization: this.state.organization,
			phone: this.state.phone,
			message: this.state.message,
			'form-name': 'contact'
		};
		try {
			/* const result = await axios.post('/', formData);
			if (result.status === 200) {
				this.setState({
					loading: false,
					responseMessage: 'Your message has been sent.'
				});
			} else {
				this.setState({
					loading: false,
					responseMessage: 'Something went wrong. Please try later.'
				});
			} */
			const result = await fetch('/', {
				method: 'POST',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				body: encode(formData)
			});
			console.log(result);
		} catch (err) {
			this.setState({
				loading: false,
				responseMessage: 'Something went wrong. Please try later.'
			});
		}
	}

	renderForm() {
		return (
			<form
				className="form"
				onSubmit={this.onSubmit.bind(this)}
				method="POST"
				data-netlify="true">
				<div className="form-field">
					<label htmlFor="name" className="form-label">
						Name* (required)
					</label>
					<input
						type="text"
						className="form-input"
						name="name"
						id="name"
						value={this.state.name}
						onChange={this.onChangeName.bind(this)}
						placeholder="Enter your name"
						required
					/>
				</div>
				<div className="form-field">
					<label htmlFor="organization" className="form-label">
						Organization/Church
					</label>
					<input
						type="text"
						className="form-input"
						id="organization"
						name="organization"
						value={this.state.organization}
						onChange={this.onChangeOrganization.bind(this)}
						placeholder="Enter your organization"
					/>
				</div>
				<div className="form-field">
					<label htmlFor="phone" className="form-label">
						Phone
					</label>
					<input
						type="text"
						className="form-input"
						id="phone"
						name="phone"
						value={this.state.phone}
						onChange={this.onChangePhone.bind(this)}
						placeholder="Enter your phone number"
					/>
				</div>
				<div className="form-field">
					<label htmlFor="email" className="form-label">
						Email* (required)
					</label>
					<input
						type="email"
						className="form-input"
						id="email"
						name="email"
						value={this.state.email}
						onChange={this.onChangeEmail.bind(this)}
						placeholder="Enter your email"
						required
					/>
				</div>
				<div className="form-field">
					<label htmlFor="message" className="form-label">
						Message* (required)
					</label>
					<textarea
						className="form-input"
						id="message"
						name="message"
						value={this.state.message}
						onChange={this.onChangeMessage.bind(this)}
						placeholder="Enter your message"
						rows="5"
						required
					/>
				</div>
				<input type="hidden" name="form-name" value="contact" />
				<div className="right-text">
					<button
						type="button"
						className="btn btn-secondary"
						onClick={this.props.onCancel}>
						Cancel
					</button>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
		);
	}

	render() {
		let content = <Spinner />;
		if (this.state.loading) {
			content = <Spinner />;
		} else if (this.state.responseMessage !== '') {
			content = (
				<div className="center-text">
					<h2 style={{marginBottom: '1rem'}}>{this.state.responseMessage}</h2>
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

export default Contact;
