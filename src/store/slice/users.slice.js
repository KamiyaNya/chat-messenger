import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	users: [],
	friends: [],
	currentFriend: {},
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, { payload }) => {
			state.users = payload;
		},
		setFriends: (state, { payload }) => {
			state.friends = payload;
		},
		setCurrentFriend(state, { payload }) {
			state.currentFriend = payload;
		},
	},
});

export const { setUsers, setFriends, setCurrentFriend } = usersSlice.actions;

export default usersSlice.reducer;
