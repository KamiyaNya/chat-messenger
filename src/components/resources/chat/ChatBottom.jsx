import { Flex } from '@chakra-ui/react';
import MessageForm from './../input/MessageForm';
import VoiceButton from './../button/VoiceButton';

export default function ChatBottom() {
	return (
		<Flex alignItems='center' gap='20px'>
			<MessageForm />
			<VoiceButton />
		</Flex>
	);
}
