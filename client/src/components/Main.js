import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Register from './Register';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import './Main.scss';
// import Dashboard from './Dashboard';
import Header from './Header';
import NoMatch from './NoMatch';
import Message from './Message';
import Home from './Home';
import Footer from './Footer';
import Logout from './Logout';

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App-wrapper">
				<BrowserRouter>
					<Fragment>
						<Header isAuth={Boolean(this.props.isAuth)} />
						<Message msg={this.props.message} />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/login" component={Login} />
								<Route path="/register" component={Register} />
								<Route path="/logout" component={Logout} />
								{/* figureOut the requirement of AdminPannel First */}
								{/* <PrivateRoute path="/admin" auth={this.props.user.isAdmin} component={Admin} /> */}
								{/* <PrivateRoute path="/home" auth={this.props.isAuth} component={Dashboard} /> */}
								<Route component={NoMatch} />
							</Switch>
						</div>
					</Fragment>
				</BrowserRouter>
				<div className="shadow-footer" />
				<Footer />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.currentUser || {},
		isAuth: state.isAuth,
		message: state.message
	};
}

export default connect(mapStateToProps)(Main);

// import { getLoggedinUserData } from './actions';

// class App extends Component {
// 	componentWillMount = () => {
// 		this.setState({ isCheckingUser: true });
// 		fetch('http://localhost:8000/api/isLoggedin').then((res) => res.json()).then((data) => {
// 			if (data.user) {
// 				this.props.dispatch({ type: 'LOGIN_SUCCESS', data: data.user });
// 			}
// 			this.props.getData(data);
// 			this.setState({ isCheckingUser: false });
// 		});
// 	};

// if current user availble then redirect to '/dashboard'
// checkLogin() {
// 	if (this.props.currentUser) {
// 		return <Redirect to="/" />;
// 	} else {
// 		return <Login />;
// 	}
// }

// Protected route, if loggedin then render or redirect to '/'
// checkAuth(renderComponent) {
// 	if (this.props.currentUser) {
// 		return renderComponent;
// 	} else {
// 		if (!this.state.isCheckingUser) {
// 			return <Redirect to="/login" />;
// 		} else {
// 			return null;
// 		}
// 	}
// }

// 	render() {
// 		return (
// 			<div className="">
// 				<BrowserRouter>
// 					<div className="">
// 						<Switch>
// 							<Route path="/" render={() => this.checkAuth(<Dashboard />)} exact />
// 							<Route path="/login" render={() => this.checkLogin()} />
// 							<Route path="/signup" component={Signup} />
// 							<Route path="/create" component={CreateChannel} />
// 						</Switch>
// 					</div>
// 				</BrowserRouter>
// 			</div>
// 		);
// 	}
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//     getData : (data) => dispatch(getLoggedinUserData(data))
//   }
// }

// function mapStateToProps(state) {
//   return {
//     currentUser: state ? state.currentUser : state
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
