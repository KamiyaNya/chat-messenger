import { useSelector } from 'react-redux';
import { Flex, Box } from '@chakra-ui/react';
import style from './Chat.module.scss';

export default function ChatMessage({ userType, userMessage, userMessageDate }) {
	const { currentUser } = useSelector((state) => state.auth);

	return (
		<Flex mt='30px'>
			{userType !== currentUser ? (
				<Box ml='auto'>
					<Flex alignItems='flex-end'>
						<Box
							bgColor='#6E00FF'
							color='#fff'
							className={style.chat_message}>
							{userMessage}
						</Box>
						<Box
							className={style.chat_message_point}
							bgColor='#6E00FF'
							ml='10px'></Box>
					</Flex>
					{userMessageDate ? (
						<Box
							className={style.chat_message_date}
							textAlign='right'
							mr='40px'>
							{userMessageDate}
						</Box>
					) : (
						''
					)}
				</Box>
			) : (
				<Box>
					<Flex>
						<Box
							className={style.chat_message_point}
							bgColor='#E7E7E7'
							mr='10px'></Box>
						<Box
							className={style.chat_message}
							bgColor='#E7E7E7'
							color='#303030'>
							{userMessage}
						</Box>
					</Flex>
					{userMessageDate ? (
						<Box
							ml='40px'
							className={style.chat_message_date}>
							{userMessageDate}
						</Box>
					) : (
						''
					)}
				</Box>
			)}
		</Flex>
	);
}
