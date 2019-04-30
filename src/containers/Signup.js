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

	notify = () => toast("Account has been created");

	onSubmit = (e) => {
		e.preventDefault();
		const { user } = this.state;

		if (this.isValid(user)) {
			actions
				.onSignupPress(user)
				.then(res => {
					console.log(res, 'res');
					this.notify();
				})
				.catch(error => {
					console.log(error, "the signup error response")
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
		console.log(this.props, 'the props');

		console.log(user, address, errors, 'user');
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
