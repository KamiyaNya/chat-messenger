import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { $api } from '@/utils/axios';

const initialState = {
	messages: [],
	loading: false,
};

export const fetchRoomMessages = createAsyncThunk('messages/getRoomMessages', async (room) => {
	const { data } = await $api.get('/chat/room_messages', {
		params: {
			roomId: room,
		},
	});

	return data.data;
});

const messagesSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {
		setMessage: (state, { payload }) => {
			state.messages.push(payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchRoomMessages.pending, (state, { payload }) => {
			state.loading = true;
		});
		builder.addCase(fetchRoomMessages.fulfilled, (state, { payload }) => {
			state.messages = payload.messages;
			state.loading = false;
		});
		builder.addCase(fetchRoomMessages.rejected, (state, { payload }) => {
			state.loading = false;
		});
	},
});

export const { setMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
