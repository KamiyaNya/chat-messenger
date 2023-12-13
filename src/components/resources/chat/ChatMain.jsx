import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Flex } from '@chakra-ui/react';

import ChatMessage from './ChatMessage';
import { socket } from '@/utils/socket';
import { $api } from '@/utils/axios';

export default function ChatMain() {
	// const [messages, setMessages] = useState([]);
	// const searchParams = useSearchParams();
	// const room = searchParams.get('room');
	// socket.on('send-message-to-client', (body) => {
	// 	setMessages([...messages, body]);
	// });

	// const getLast10Messages = async () => {
	// 	const { data } = $api.get('/chat/messages', {
	// 		params: {
	// 			roomId: room,
	// 		},
	// 	});
	// 	console.log(data)
	// 	if(data){
	// 	setMessages(data.messages);
	// 	}
	// };

	// useEffect(() => {
	// 	getLast10Messages();
	// }, []);

	return (
		<Flex flexDirection='column'>
			{messages? messages.map((message) => (
				<ChatMessage
					key={message.message}
					userType={message.userId}
					userMessage={message.message}
				/>
			)): 'LOADING>>>'}
		</Flex>
	);
}
