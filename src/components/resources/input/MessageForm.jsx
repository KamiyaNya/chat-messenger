import { Flex, Box, Input, Textarea } from '@chakra-ui/react';
import { Camera, Laugh, Paperclip } from 'lucide-react';

export default function MessageForm() {
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
		</Flex>
	);
}
