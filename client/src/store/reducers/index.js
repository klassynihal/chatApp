const INIT_STATE = {
	currentUser: null,
	currentToken: localStorage.getItem('chatAppJWT') || null,
	isAuth: false,
	message: ''
};

export default function User(state = INIT_STATE, action) {
	switch (action.type) {
		// case value:
		case 'LOGIN_USER':
			return {
				...state,
				currentUser: action.user,
				currentToken: action.token,
				message: action.message,
				isAuth: true
			};
		case 'LOGIN_FAILED': {
			return {
				...state,
				message: action.data
			};
		}
		case 'LOGOUT_USER':
			return {
				...state,
				currentUser: null,
				currentToken: null,
				isAuth: false
			};

		case 'VERIFY_USER': {
			return {
				...state,
				currentUser: action.user,
				isAuth: true
			};
		}
		// break;
		default:
			return state;
	}
}
