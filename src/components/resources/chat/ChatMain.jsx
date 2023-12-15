import dayjs from 'dayjs';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Box } from '@chakra-ui/react';
import 'dayjs/locale/ru';

import { socket } from '@/utils/socket';
import { addToRoom } from '@/store/slice/room.slice';
import style from '@/components/resources/chat/Chat.module.scss';
import ChatMessage from '@/components/resources/chat/ChatMessage';
import { fetchRoomMessages, setMessage } from '@/store/slice/messages.slice';

export default function ChatMain() {
	const ref = useRef();
	const { messages } = useSelector((state) => state.message);
	const { rooms } = useSelector((state) => state.room);
	const searchParams = useSearchParams();
	const dispatch = useDispatch();
	const room = searchParams.get('room');
	const isExist = rooms.some((roomId) => roomId === room);
	if (!isExist) {
		socket.socket.emit('join-room', { room: room });
		dispatch(addToRoom(room));
	}
	useEffect(() => {
		socket.socket.on('send-message-to-client', (body) => {
			dispatch(setMessage(body));
		});
	}, []);

	useEffect(() => {
		dispatch(fetchRoomMessages(room));
	}, [room]);

	useEffect(() => {
		const y = Array.from(ref.current.children).reduce((accum, prev) => {
			return (accum += prev.clientHeight);
		}, 0);
		ref.current.scrollTo(0, y);
	}, [messages]);

	return (
		<Flex
			flexDirection='column'
			overflow='auto'
			pr='12px'
			className={style.messages}
			ref={ref}>
			{messages
				? messages.map((message, index) => (
						<Flex
							key={message.createdAt}
							flexDirection='column'>
							{messages[index - 1] && Number(dayjs(message.createdAt).format('DD')) > Number(dayjs(messages[index - 1].createdAt).format('DD')) ? (
								<Box
									mx='auto'
									borderRadius='20px'
									color='#fff'
									bgColor='#6e00ff'
									py='4px'
									px='12px'>
									{dayjs(message.createdAt).locale('ru').format('DD MMMM')}
								</Box>
							) : (
								''
							)}
							<ChatMessage
								userType={message.userId}
								userMessage={message.message}
								userMessageDate={message.createdAt}
							/>
						</Flex>
				  ))
				: 'LOADING>>>'}
		</Flex>
	);
}
