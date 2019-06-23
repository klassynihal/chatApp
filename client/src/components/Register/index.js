import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUserAction } from '../../store/actions';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			username: '',
			password: '',
			confPassword: '',
			error: ''
		};
	}

	componentDidMount = () => {};

	handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, password, confPassword, username } = this.state;
		if (password !== confPassword) {
			this.setState({ error: 'both password & confirm Password should be same' });
			return;
		}
		const data = { email, password, name, username };
		this.props.dispatch(
			registerUserAction(data, (isRegistered) => {
				if (isRegistered) this.props.history.push('/login');
			})
		);
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<section className="w-full max-w-lg register-form">
				<form onSubmit={this.handleSubmit} className="w-full max-w-lg">
					<p className="text-red-500 text-xs italic">{this.state.error}</p>
					<div className="md:flex md:items-center mb-6">
						<div className="md:w-1/3">
							<label
								className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
								htmlFor="register-name"
							>
								Full Name
							</label>
						</div>
						<div className="md:w-2/3">
							<input
								onChange={this.handleChange}
								type="text"
								placeholder="Enter Your Name"
								id="register-name"
								name="name"
								value={this.state.name}
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							/>
						</div>
					</div>
					<div className="md:flex md:items-center mb-6">
						<div className="md:w-1/3">
							<label
								className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
								htmlFor="register-username"
							>
								Username
							</label>
						</div>
						<div className="md:w-2/3">
							<input
								onChange={this.handleChange}
								id="register-username"
								type="text"
								placeholder="Enter Username"
								name="username"
								value={this.state.username}
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							/>
						</div>
					</div>
					<div className="md:flex md:items-center mb-6">
						<div className="md:w-1/3">
							<label
								className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
								htmlFor="register-email"
							>
								Email
							</label>
						</div>
						<div className="md:w-2/3">
							<input
								onChange={this.handleChange}
								type="text"
								placeholder="Enter Email"
								name="email"
								value={this.state.email}
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
								id="register-email"
							/>
						</div>
					</div>
					<div className="md:flex md:items-center mb-6">
						<div className="md:w-1/3">
							<label
								className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
								htmlFor="register-password"
							>
								Password
							</label>
						</div>
						<div className="md:w-2/3">
							<input
								onChange={this.handleChange}
								type="password"
								placeholder="Enter Password"
								id="register-password"
								name="password"
								value={this.state.password}
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							/>
						</div>
					</div>
					<div className="md:flex md:items-center mb-6">
						<div className="md:w-1/3">
							<label
								className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
								htmlFor="register-confPassword"
							>
								Password
							</label>
						</div>
						<div className="md:w-2/3">
							<input
								onChange={this.handleChange}
								type="password"
								placeholder="Re-Enter Password"
								id="register-confPassword"
								name="confPassword"
								value={this.state.confPassword}
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
								type="password"
							/>
						</div>
					</div>
					<div className="md:flex md:items-center">
						<div className="md:w-1/3" />
						<div className="md:w-2/3">
							<button
								className="shadow secondary-btn focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
								type="submit"
							>
								Sign Up
							</button>
						</div>
					</div>
				</form>
			</section>
		);
	}
}

export default connect()(Register);
