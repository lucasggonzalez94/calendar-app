import Swal from 'sweetalert2';
import { fetchNoToken, fetchToken } from '../helpers/fetch';
import { types } from '../types/types';

export const startLogin = (email, password) => {
  return async (dispatch) => {
		const res = await fetchNoToken('auth', { email, password }, 'POST');
		const response = await res.json();

		if (response.ok) {
			localStorage.setItem('token', response.token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(login({
				uid: response.uid,
				name: response.name
			}));
		} else {
			Swal.fire('Error', response.msg, 'error');
		}
	};
};

export const startRegister = (email, password, name) => {
	return async (dispatch) => {
		const res = await fetchNoToken('auth/register', { email, password, name }, 'POST');
		const response = await res.json();

		if (response.ok) {
			localStorage.setItem('token', response.token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(login({
				uid: response.uid,
				name: response.name
			}));
		} else {
			Swal.fire('Error', response.msg, 'error');
		}
	};
};

export const startChecking = () => {
	return async (dispatch) => {
		const res = await fetchToken('auth/refresh');
		const response = await res.json();

		if (response.ok) {
			localStorage.setItem('token', response.token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(login({
				uid: response.uid,
				name: response.name
			}));
		} else {
			dispatch(checkingFinish());
		}
	};
};

const checkingFinish = () => ({
	type: types.authCheckingFinish
});

const login = user => ({
	type: types.authLogin,
	payload: user
});