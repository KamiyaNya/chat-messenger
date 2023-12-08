import { Flex } from '@chakra-ui/react';
import dayjs from 'dayjs';
import ChatMessage from './ChatMessage';

export default function ChatMain() {
	return (
		<Flex flexDirection='column'>
			<ChatMessage
				userType={0}
				userMessage='Привет'
			/>
			<ChatMessage
				userType={0}
				userMessage='Как Дела?'
				userMessageDate={dayjs().format('HH:mm')}
			/><ChatMessage
				userType={1}
				userMessage='Привет'
			/>
			<ChatMessage
				userType={1}
				userMessage='Нормально'
				userMessageDate={dayjs().format('HH:mm')}
			/>
		</Flex>
	);
}
