import { Button } from '@chakra-ui/react';
import { Mic } from 'lucide-react';

export default function VoiceButton() {
	return (
		<Button
			width='76px'
			height='76px'
			minWidth='76px'
			bgColor='#6E00FF'
			display='flex'
			justifyContent='center'
			alignItems='center'
			borderRadius='20px'
			_hover={{bgColor: 'rgba(97, 45, 209, 0.9)'}}>
			<Mic size='38px' color='#fff' />
		</Button>
	);
}
