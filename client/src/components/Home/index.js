import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './home.scss';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { user, isAuth } = this.props;

		if (isAuth && !user.isAdmin) {
			this.props.history.push('/dashboard');
		}
	}

	render() {
		return (
			<Fragment>
				<Link className="" to="/register">
					<div className="ui huge primary button">
						Register<i className="right arrow icon" />
					</div>
				</Link>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		isAuth: state.isAuth
	};
};

export default connect(mapStateToProps)(Home);
