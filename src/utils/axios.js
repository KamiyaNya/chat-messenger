import axios from 'axios';
import { store } from './../store/store';
import { setToken } from '@/store/slice/auth.slice';

export const $api = axios.create({
	baseURL: 'http://localhost:8080/api',
	withCredentials: true,
});

$api.interceptors.request.use(
	(req) => {
		const accessToken = store.getState().auth.accessToken;
		if (accessToken) {
			req.headers['Authorization'] = `Bearer ${accessToken}`;
		}
		return req;
	},
	(error) => {
		return Promise.reject(error);
	}
);

$api.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const config = error.config;
		try {
			if (error.response) {
				if (error.response.status === 401) {
					const { data } = await $api.get('/auth/refresh');
					store.dispatch(setToken(data.payload));
					config.headers.Authorization = `Bearer ${data.payload.accessToken}`;
					return $api(config);
				}
			}
		} catch (error) {}
	}
);
