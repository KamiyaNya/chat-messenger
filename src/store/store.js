import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/auth.slice';
import groupsSlice from './slice/groups.slice';
import usersSlice from './slice/users.slice';
import messagesSlice from './slice/messages.slice';
import roomSlice from './slice/room.slice';

export const store = configureStore({
	reducer: {
		auth: authSlice,
		groups: groupsSlice,
		users: usersSlice,
		message: messagesSlice,
		room: roomSlice,
	},
});
