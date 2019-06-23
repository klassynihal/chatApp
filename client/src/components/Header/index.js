import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUserAction } from '../../store/actions';

const NavCustomBtn = (props) => (
	<div>
		<Link
			className="inline-block text-sm px-4 py-2 leading-none border rounded text-white primary-btn hover:border-transparent mt-4 md:mt-0"
			to={props.to}
		>
			{props.title}
		</Link>
	</div>
);

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { showMenu: false };
	}

	toggleMenu = () => {
		this.setState({ showMenu: !this.state.showMenu });
	};

	render() {
		return (
			<header className="header base2-color">
				<nav className="flex items-center justify-between flex-wrap p-6">
					<Link to="/" className="logo wrapper">
						<div className="flex items-center flex-shrink-0 text-white mr-6">
							<svg
								className="fill-current h-8 w-8 mr-2"
								width="54"
								height="54"
								viewBox="0 0 54 54"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
							</svg>
							<span className="font-semibold text-xl tracking-tight">KlassyChat</span>
						</div>
					</Link>
					<div className="block md:hidden">
						<button
							onClick={this.toggleMenu}
							className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
						>
							<svg
								className="fill-current h-3 w-3"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							</svg>
						</button>
					</div>
					<div
						className={`${this.state.showMenu
							? ''
							: 'hide '} w-full block flex-grow md:flex md:items-center md:w-auto`}
					>
						<div className="text-sm md:flex-grow">
							{/* <a
								href="#responsive-header"
								className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
							>
								About
							</a> */}
							{/* <a
								href="#responsive-header"
								className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
							>
								Examples
							</a> */}
							{/* <a
								href="#responsive-header"
								className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white"
							>
								Blog
							</a> */}
						</div>
						{this.props.isAuth ? (
							<NavCustomBtn title="LogOut" to="/logout" />
						) : (
							<Fragment>
								<NavCustomBtn title="LogIn" to="/login" />
								<NavCustomBtn title="SignUp" to="/register" />
							</Fragment>
						)}
					</div>
				</nav>
			</header>
		);
	}
}

export default connect()(withRouter(Header));
