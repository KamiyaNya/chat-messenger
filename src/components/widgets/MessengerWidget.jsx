import { Grid } from '@chakra-ui/react';
import ChatMain from '../resources/chat/ChatMain';
import ChatTop from '../resources/chat/ChatTop';
import ChatBottom from './../resources/chat/ChatBottom';
export default function MessengerWidget() {
	return (
		<Grid
			gridTemplateRows='100px 1fr 76px'
			gap='40px'
			bgColor='#fff'
			boxShadow='0 4px 5px 2px rgba(121, 197, 239, 0.38)'
			borderRadius='25px'
			p='26px 40px'
			height='calc(100vh - 32px)'>
			<ChatTop />
			<ChatMain />
			<ChatBottom />
		</Grid>
	);
}
