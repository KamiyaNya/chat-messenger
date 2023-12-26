import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	groups: [],
};

const groupsSlice = createSlice({
	name: 'groups',
	initialState,
	reducers: {
		setGroups: (state, { payload }) => {
			state.groups = [...state.groups, payload.groups];
		},
	},
});

export const { setGroups } = groupsSlice.actions;

export default groupsSlice.reducer;
