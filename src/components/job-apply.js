import React, {Component} from 'react';
import axios from 'axios';
import Spinner from './spinner';

class JobApply extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		dateOfBirth: '',
		experience: 0,
		education: '',
		message: '',
		loading: false,
		responseMessage: ''
	};

	onChangeName(e) {
		this.setState({name: e.target.value});
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

	onChangeEducation(e) {
		this.setState({education: e.target.value});
	}

	onChangeExperience(e) {
		this.setState({experience: e.target.value});
	}

	onChangeDateOfBirth(e) {
		this.setState({dateOfBirth: e.target.value});
	}

	async onSubmit(e) {
		e.preventDefault();
		this.setState({loading: true});
		const formData = new FormData();
		formData.append('name', this.state.name);
		formData.append('email', this.state.email);
		formData.append('dateOfBirth', this.state.dateOfBirth);
		formData.append('phone', this.state.phone);
		formData.append('workExperience', this.state.experience);
		formData.append('education', this.state.education);
		formData.append('message', this.state.message);
		const endpoint =
			'https://getform.io/f/9cc051c4-96c9-45f6-acb2-23d52c39c866';
		try {
			const result = await axios.post(endpoint, formData);
			if (result.status === 200) {
				this.setState({
					loading: false,
					responseMessage: 'Your application has been submitted.'
				});
			} else {
				this.setState({
					loading: false,
					responseMessage: 'Something went wrong. Please try later.'
				});
			}
		} catch (err) {
			this.setState({
				loading: false,
				responseMessage: 'Something went wrong. Please try later.'
			});
		}
	}

	renderForm() {
		return (
			<form className="form" onSubmit={this.onSubmit.bind(this)}>
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
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-input"
						id="email"
						name="email"
						value={this.state.email}
						onChange={this.onChangeEmail.bind(this)}
						placeholder="Enter your email"
					/>
				</div>
				<div className="form-field">
					<label htmlFor="phone" className="form-label">
						Phone* (required)
					</label>
					<input
						type="text"
						className="form-input"
						id="phone"
						name="phone"
						value={this.state.phone}
						onChange={this.onChangePhone.bind(this)}
						placeholder="Enter your phone number"
						required
					/>
				</div>
				<div className="form-field">
					<label htmlFor="education" className="form-label">
						Education* (required)
					</label>
					<input
						type="text"
						className="form-input"
						id="education"
						name="education"
						value={this.state.education}
						onChange={this.onChangeEducation.bind(this)}
						placeholder="Enter your highest educational qualification"
						required
					/>
				</div>
				<div className="form-field">
					<label htmlFor="experience" className="form-label">
						Work Experience (in years)
					</label>
					<input
						type="number"
						className="form-input"
						id="experience"
						name="experience"
						value={this.state.experience}
						onChange={this.onChangeExperience.bind(this)}
						placeholder="Number of years of work experience"
						required
					/>
				</div>
				<div className="form-field">
					<label htmlFor="dob" className="form-label">
						Date of Birth
					</label>
					<input
						type="date"
						className="form-input"
						id="dob"
						name="date-of-birth"
						value={this.state.dateOfBirth}
						onChange={this.onChangeDateOfBirth.bind(this)}
					/>
				</div>
				<div className="form-field">
					<label htmlFor="message" className="form-label">
						Explain why you want to join WISHALL and what role you'd like to
						play* (required)
					</label>
					<textarea
						className="form-input"
						id="message"
						name="message"
						placeholder="Enter your message"
						value={this.state.message}
						onChange={this.onChangeMessage.bind(this)}
						rows="5"
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
			<div className="job-form">
				<h2 className="form-title">Apply to join the WISHALL team</h2>
				{content}
			</div>
		);
	}
}

export default JobApply;
