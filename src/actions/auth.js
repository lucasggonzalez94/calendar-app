import { fetchNoToken } from '../helpers/fetch';
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
		}
	};
};

const login = user => ({
	type: types.authLogin,
	payload: user
});