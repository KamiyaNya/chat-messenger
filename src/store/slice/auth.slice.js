import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	accessToken: null,
};

const authSlise = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.isAuth = true;
			state.accessToken = payload.accessToken;
		},
		logout: (state) => {
			state.isAuth = false;
			state.accessToken = null;
		},
	},
});

export const { setUser, logout } = authSlise.actions;

export default authSlise.reducer;
