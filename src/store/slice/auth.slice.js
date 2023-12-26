import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	accessToken: null,
	currentUser: null,
	user: null,
};

const authSlise = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.isAuth = true;
			state.accessToken = payload.accessToken;
			state.currentUser = payload.user.id;
			state.user = payload.user;
		},
		setAuth: (state, { payload }) => {
			state.isAuth = payload;
		},
		logout: (state) => {
			state.isAuth = false;
			state.accessToken = null;
			state.currentUser = null;
			state.user = null;
		},
		setToken: (state, { payload }) => {
			state.isAuth = true;
			state.accessToken = payload.accessToken;
		},
	},
});

export const { setUser, logout, setAuth,setToken } = authSlise.actions;

export default authSlise.reducer;
