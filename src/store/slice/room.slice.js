import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	rooms: [],
};

const roomSlice = createSlice({
	name: 'room',
	initialState,
	reducers: {
		addToRoom: (state, { payload }) => {
			const isExist = state.rooms.some((room) => room === payload);
			if (!isExist) {
				state.rooms.push(payload);
			}
		},
	},
});

export const { addToRoom } = roomSlice.actions;

export default roomSlice.reducer;
