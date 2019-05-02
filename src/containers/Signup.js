import React, { Component } from "react";
import SignupForm from "../component/SignupForm";
import validator from '../validations/signup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import actions from "../actions"
import { connect } from "react-redux"

toast.configure()

class Signup extends Component {
	state = {
		user: {
			email: '',
			password: '',
			confirmPassword: '',
			firstName: '',
			lastName: '',
			phone: ''
		},
		address: {
			address: '',
			city: '',
			state: '',
			zipCode: '',
			country: ''
		},
		errors: {},
		isValidated: false
	};

	onChange = (key) => ({ target: { value, name } }) => {
		let data = { ...this.state[key] };
		data[name] = value;
		this.setState({ [key]: data })
	}

	onCancel = () => {
		this.props.history.push("/")
	}

	isValid = (user) => {
		const { errors = {}, isValid = false } = validator(user);
		this.setState({ errors });
		return isValid
	}

	notify = () => toast("Account created redirecting to login page in 5 Seconds");

	redirectToLogin = () => {
		setTimeout(() => {
			this.props.history.push("/")
		}, 5000)
	}

	onSubmit = (e) => {
		e.preventDefault();
		const { user } = this.state;

		if (this.isValid(user)) {
			actions
				.onSignupPress(user)
				.then(res => {

					this.notify();
					this.redirectToLogin()
				})
				.catch(error => {

				})

		} else {
			this.setState({ isValidated: true })
		}
	}

	goto = (path) => {
		this.props.history.push(path);
	}

	render() {
		const { user, isValidated, errors, address } = this.state;
		return (
			<div>

				<SignupForm
					user={user}
					address={address}
					errors={errors}
					isValidated={isValidated}
					onSubmit={this.onSubmit}
					onChange={this.onChange}
					onCancel={this.onCancel}
					goto={this.goto}
				/>
			</div>
		)
	}
}

export default connect(state => state)(Signup);
