import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUserAction } from '../../store/actions';

class Logout extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(
			logoutUserAction((loggedOut) => {
				this.props.history.push('/');
			})
		);
	}

	render() {
		return <div />;
	}
}

export default connect()(Logout);
