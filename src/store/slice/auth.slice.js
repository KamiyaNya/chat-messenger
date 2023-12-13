import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	accessToken: null,
	currentUser: null,
};

const authSlise = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.isAuth = true;
			state.accessToken = payload.accessToken;
			state.currentUser = payload.id;
		},
		setAuth: (state, { payload }) => {
			state.isAuth = payload;
		},
		logout: (state) => {
			state.isAuth = false;
			state.accessToken = null;
			state.currentUser = null;
		},
	},
});

export const { setUser, logout, setAuth } = authSlise.actions;

export default authSlise.reducer;
