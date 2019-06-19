import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { verifyTokenAction } from './store/actions'; //figure out verify
// import Main from './components/Main';

class App extends Component {
	// componentDidMount = () => {
	// 	this.runVerify();
	// };

	// componentDidUpdate = () => {
	// 	this.runVerify();
	// };

	// //if Refresh is hit then it will verify the token
	// runVerify = () => {
	// 	const { token, isAuth } = this.props;
	// 	if (!isAuth && token) {
	// 		this.props.dispatch(verifyTokenAction(token));
	// 	}
	// };

	render() {
		return <div className="App">chatApp</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.currentToken,
		isAuth: state.isAuth
	};
};

export default connect(mapStateToProps)(App);
