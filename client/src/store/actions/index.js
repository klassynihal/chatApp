import { util } from '../../util';

export function registerUserAction(data, cb) {
	return (dispatch) => {
		console.log(data, 'reg Action');
		fetch(`${util.baseURL}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status) {
					cb(true);
				} else cb(false);
			});
	};
}

export function loginUserAction(data, cb) {
	return (dispatch, getState) => {
		fetch(`${util.baseURL}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('data', data);
				if (data.status) {
					let token = `klassy ${data.token}`;
					localStorage.setItem('chatAppJWT', token); //will modify acc to server
					dispatch({
						type: 'LOGIN_USER',
						user: data.user,
						token: token,
						message: data.message
					});
					cb(true);
				} else {
					dispatch({
						type: 'LOGIN_FAILED',
						data: data.message
					});
					cb(false);
				}
			});
	};
}

export function logoutUserAction(cb) {
	return (dispatch) => {
		localStorage.removeItem('chatAppJWT');
		dispatch({
			type: 'LOGOUT_USER'
		});
		cb(true);
	};
}

export function verifyTokenAction(token) {
	return async (dispatch) => {
		fetch(`${util.baseURL}/verify`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: token
			}
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status) {
					dispatch({
						type: 'VERIFY_USER',
						user: data.user
					});
				} else {
					dispatch({
						type: 'LOGOUT_USER'
					});
				}
			});
	};
}
