import React, {Component} from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import Landing from '../components/landing';
import Intro from '../components/intro';
import Journey from '../components/journey';
import Projects from '../components/projects';
import Area from '../components/area';
import Impact from '../components/impact';
import Actions from '../components/actions';
import Donation from '../components/donation';
import Modal from '../components/modal';
import SignUp from '../components/signup';
import Footer from '../components/footer';
import Contact from '../components/contact';
import JobApply from '../components/job-apply';

class IndexPage extends Component {
	state = {
		navIsShown: false,
		modalShown: false,
		formType: '',
		formTitle: ''
	};

	componentDidMount() {
		window.addEventListener('scroll', this.toggleStickyNav);
		let navbarToggle = document.querySelector('.navbar__toggle');
		navbarToggle.addEventListener('click', this.toggleNav.bind(this));
	}

	componentWillUnmount() {
		let navbarToggle = document.querySelector('.navbar__toggle');
		navbarToggle.removeEventListener('click', this.toggleNav.bind(this));
		window.removeEventListener('scroll', this.toggleStickyNav);
	}

	toggleStickyNav() {
		let scrollPos = window.pageYOffset;
		let navbar = document.querySelector('.navbar');
		if (scrollPos > 100) {
			navbar.classList.add('navbar-sticky');
		}
		if (scrollPos > 100) {
			navbar.classList.add('navbar-sticky');
		} else {
			navbar.classList.remove('navbar-sticky');
		}
	}

	toggleNav() {
		let mobileNav = document.querySelector('.mobile__nav');
		this.setState(prevState => {
			if (!this.state.navIsShown) {
				mobileNav.classList.add('mobile__nav-display');
			} else {
				mobileNav.classList.remove('mobile__nav-display');
			}
			return {
				navIsShown: !prevState.navIsShown
			};
		});
	}

	renderForm() {
		if (
			this.state.formType === 'newsletter' ||
			this.state.formType === 'prayer'
		) {
			return (
				<SignUp
					formTitle={this.state.formTitle}
					formType={this.state.formType}
					onCancel={this.closeModal.bind(this)}
				/>
			);
		}
		if (
			this.state.formType === 'engage' ||
			this.state.formType === 'contact' ||
			this.state.formType === 'donate'
		) {
			return (
				<Contact
					formTitle={this.state.formTitle}
					onCancel={this.closeModal.bind(this)}
				/>
			);
		}
		if (this.state.formType === 'job') {
			return <JobApply onCancel={this.closeModal.bind(this)} />;
		}
	}

	onClickNewsletter() {
		this.setState({
			modalShown: true,
			formType: 'newsletter',
			formTitle: 'Sign up for our newsletter'
		});
	}

	onClickPrayer() {
		this.setState({
			modalShown: true,
			formType: 'prayer',
			formTitle: 'Sign up to get prayer updates'
		});
	}

	onClickEngage() {
		this.setState({
			modalShown: true,
			formType: 'engage',
			formTitle:
				"Please provide information about yourself and what you need and we'll get in touch"
		});
	}

	onContact() {
		this.setState({
			modalShown: true,
			formType: 'contact',
			formTitle: 'Contact us'
		});
	}

	onClickDonation() {
		this.setState({
			modalShown: true,
			formType: 'donate',
			formTitle:
				'Please fill in your contact details and we will get in touch with you'
		});
	}

	onClickJoin() {
		this.setState({modalShown: true, formType: 'job'});
	}

	closeModal() {
		this.setState({
			modalShown: false,
			formType: ''
		});
	}

	render() {
		const details = this.props.data.allDetail.edges[0].node;
		const values = this.props.data.allValue.edges.map(({node}) => node);
		const milestones = this.props.data.allMilestone.edges.map(({node}) => node);
		const projects = this.props.data.allProject.edges.map(({node}) => node);
		const areas = this.props.data.allArea.edges.map(({node}) => node);
		const mapUrl = this.props.data.allMap.edges[0].node.mapImage.url;
		const impacts = this.props.data.allImpact.edges.map(
			({node}) => node.impact
		);
		const donation = this.props.data.allDonation.edges[0].node;
		const contact = this.props.data.allContact.edges[0].node;

		return (
			<Layout>
				{this.state.modalShown ? (
					<Modal onClose={this.closeModal.bind(this)}>
						{this.renderForm()}
					</Modal>
				) : null}
				<Landing
					headline={details.headline}
					bannerImage={details.bannerImage.url}
					onContact={this.onContact.bind(this)}
				/>
				<main>
					<Intro
						vision={details.vision}
						mission={details.mission}
						values={values}
					/>
					<Journey milestones={milestones} />
					<Projects projects={projects} />
					<Area areas={areas} mapUrl={mapUrl} />
					<Impact impacts={impacts} />
					<Actions
						onClickNewsletter={this.onClickNewsletter.bind(this)}
						onClickPrayer={this.onClickPrayer.bind(this)}
						onClickEngage={this.onClickEngage.bind(this)}
						onClickJoin={this.onClickJoin.bind(this)}
					/>
					<Donation
						message={donation.message}
						image1Url={donation.image1.url}
						image2Url={donation.image2.url}
						image3Url={donation.image3.url}
						onClick={this.onClickDonation.bind(this)}
					/>
				</main>
				<Footer
					address={contact.address}
					email={contact.email}
					phone={contact.phone}
					onContact={this.onContact.bind(this)}
				/>
			</Layout>
		);
	}
}

export default IndexPage;

export const query = graphql`
	query {
		allDetail {
			edges {
				node {
					headline
					mission
					vision
					bannerImage {
						url
					}
				}
			}
		}
		allValue {
			edges {
				node {
					value
					icon
				}
			}
		}
		allMilestone {
			edges {
				node {
					description
					year
				}
			}
		}
		allProject {
			edges {
				node {
					title
					description
					image {
						url
					}
				}
			}
		}
		allArea {
			edges {
				node {
					state
					cities
				}
			}
		}
		allMap {
			edges {
				node {
					mapImage {
						url
					}
				}
			}
		}
		allImpact {
			edges {
				node {
					impact
				}
			}
		}
		allDonation {
			edges {
				node {
					message
					image1 {
						url
					}
					image2 {
						url
					}
					image3 {
						url
					}
				}
			}
		}
		allContact {
			edges {
				node {
					address
					phone
					email
				}
			}
		}
	}
`;
