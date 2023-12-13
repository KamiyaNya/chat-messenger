import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Flex, Box, Button, Textarea } from '@chakra-ui/react';
import { Camera, Laugh, Paperclip, SendHorizontal } from 'lucide-react';
import {useSelector} from 'react-redux'
import { socket } from '@/utils/socket';

export default function MessageForm() {
	const [text, setText] = useState('');
	const searchParams = useSearchParams();
	const room = searchParams.get('room');
const {currentUser} = useSelector(state=>state.auth)

	const sendMessage = () => {
		socket.emit('chat-message', { message: text, room: room, userId: currentUser });
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
				_hover={{ bgColor: 'rgba(97, 45, 209, 0.9)' }} onClick={sendMessage}>
				<SendHorizontal
					size='38px'
					strokeWidth='1.5px'
				/>
			</Button>
		</Flex>
	);
}
