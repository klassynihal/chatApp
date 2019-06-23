import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { util } from '../../util';
import { loginUserAction } from '../../store/actions';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: ''
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const { dispatch } = this.props;
		let { email, password } = this.state;
		email = email.trim();
		if (!util.ValidateEmail(email)) {
			this.setState({ error: 'Invalid Email Format' });
			return;
		}
		const data = {
			email,
			password
		};
		console.log(data, 'inLogin');
		dispatch(
			loginUserAction(data, (isLoggedIn) => {
				if (isLoggedIn) {
					this.props.history.push('/');
				} else {
					this.setState({ error: 'Please entre correct email password combination.', password: '' });
				}
			})
		);
	};

	render() {
		return (
			<Fragment>
				<div className="w-full max-w-xs login-form">
					<form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlhtmlFor="username">
								Email
							</label>
							<input
								onChange={this.handleChange}
								type="text"
								placeholder="Enter Email"
								id="login-email"
								name="email"
								value={this.state.email}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							/>
						</div>
						<div className="mb-6">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlhtmlFor="password">
								Password
							</label>
							<input
								onChange={this.handleChange}
								type="password"
								placeholder="Enter Password"
								id="login-password"
								name="password"
								value={this.state.password}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							/>
							<p className="text-red-500 text-xs italic">{this.state.error}</p>
						</div>
						<div className="flex items-center justify-between">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Sign In
							</button>
							<a
								className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
								href="#"
							>
								Forgot Password?
							</a>
						</div>
					</form>
					<p className="text-center text-gray-500 text-xs">&copy;2019 Acme Corp. All rights reserved.</p>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		error: state.error,
		message: state.message
	};
};

export default connect(mapStateToProps)(Login);
