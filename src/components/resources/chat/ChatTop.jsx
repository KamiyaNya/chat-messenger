import { Grid, GridItem, Image, Box, Divider } from '@chakra-ui/react';
import { Phone, Video, MoreVertical } from 'lucide-react';

export default function ChatTop() {
	return (<Box>
		<Grid
			gridTemplateColumns='75px 1fr 40px 40px 40px'
			gap='30px'
			alignItems='center'>
			<GridItem
				width='75px'
				height='75px'
				borderRadius='50%'
				overflow='hidden'>
				<Image
					src='/profileImage.jpg'
					width='100%'
					objectFit='cover'
					height='inherit'
				/>
			</GridItem>
			<GridItem>
				<Box color='#303030' fontSize={32} letterSpacing='1.6px' fontWeight={600}>Даня</Box>
				<Box fontSize={20} color='#303030' letterSpacing={1} fontWeight={300}>Online - Last seen, 2.02pm</Box>
			</GridItem>
			<GridItem
				cursor='pointer'
				className='messengerIcon'
				color='#9747FF'
				_hover={{ color: 'rgb(94, 45, 200)' }} transitionDuration='.2s'>
				<Phone size='42px' />
			</GridItem>
			<GridItem
				cursor='pointer'
				color='#9747FF'
				_hover={{ color: 'rgb(94, 45, 200)' }} transitionDuration='.2s'>
				<Video size='42px' />
			</GridItem>
			<GridItem
				cursor='pointer'
				color='#9747FF'
				_hover={{ color: 'rgb(94, 45, 200)' }} transitionDuration='.2s'>
				<MoreVertical
					size='42px'
				/>
			</GridItem>
		</Grid>
		<Divider mt='20px'/>
		</Box>
	);
}
