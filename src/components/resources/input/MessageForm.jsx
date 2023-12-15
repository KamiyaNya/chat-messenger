import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Box, Button, Textarea } from '@chakra-ui/react';
import { Camera, Laugh, Paperclip, SendHorizontal } from 'lucide-react';
import { socket } from '@/utils/socket';
import { setMessage } from '@/store/slice/messages.slice';

export default function MessageForm() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.auth);
	const searchParams = useSearchParams();
	const room = searchParams.get('room');

	const sendMessage = () => {
		const messageData = { message: text, room: room, userId: currentUser, createdAt: dayjs().format() };
		socket.socket.emit('chat-message', messageData);
		dispatch(setMessage(messageData));
		setText('');
	};

	return (
		<Flex
			alignItems='center'
			width='100%'
			borderRadius='25px'
			bgColor='rgba(239, 246, 252, 0.87)'
			px='24px'>
			<Box cursor='pointer'>
				<Paperclip
					size='38px'
					strokeWidth='1.5px'
				/>
			</Box>
			<Textarea
				fontSize='24px'
				placeholder='Ваше сообщение'
				boxShadow='none'
				border='0'
				outline='none'
				mx='20px'
				px='0'
				resize='none'
				_focusVisible={{ boxShadow: 'none' }}
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
			<Box cursor='pointer'>
				<Laugh
					size='38px'
					strokeWidth='1.5px'
				/>
			</Box>
			<Box
				cursor='pointer'
				ml='20px'>
				<Camera
					size='38px'
					strokeWidth='1.5px'
				/>
			</Box>
			<Button
				cursor='pointer'
				ml='20px'
				color='#FFF'
				bgColor='#6e00ff'
				_hover={{ bgColor: 'rgba(97, 45, 209, 0.9)' }}
				onClick={sendMessage}>
				<SendHorizontal
					size='38px'
					strokeWidth='1.5px'
				/>
			</Button>
		</Flex>
	);
}
