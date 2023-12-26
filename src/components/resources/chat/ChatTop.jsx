import { useSelector } from 'react-redux';
import dayjs from 'dayjs'
import { Flex, Grid, GridItem, Image, Box, Divider,Skeleton } from '@chakra-ui/react';
import { Phone, Video, MoreVertical } from 'lucide-react';
import 'dayjs/locale/ru';

export default function ChatTop() {
	const { currentFriend } = useSelector((state) => state.users);

	return (
		<Box>
			<Grid
				gridTemplateColumns='75px 1fr 40px 40px 40px'
				gap='30px'
				alignItems='center'>
				<GridItem
					width='75px'
					height='75px'
					borderRadius='50%'
					overflow='hidden'>
					{currentFriend.friendImage? <Image
						src={currentFriend.friendImage}
						width='100%'
						objectFit='cover'
						height='inherit'
					/>: <Flex
					width='100%'
					height='100%'
					borderRadius='50%'
					justifyContent='center'
					alignItems='center'
					bgColor='#6e00ff'
					fontSize='24px'
					color='#fff'
					fontWeight='bold'>
					{currentFriend.friendName ? currentFriend.friendName.split('')[0].toUpperCase() : <Skeleton width='100%' height='100%'/>}
				</Flex>}
					
				</GridItem>
				<GridItem>
					<Box
						color='#303030'
						fontSize={32}
						letterSpacing='1.6px'
						fontWeight={600}>
						{currentFriend.friendName}
					</Box>
					<Box
						fontSize={20}
						color='#303030'
						letterSpacing={1}
						fontWeight={300}>
						Онлайн - {dayjs(currentFriend.friendLastOnline).locale('ru').format('DD MMM HH:mm')}
					</Box>
				</GridItem>
				<GridItem
					cursor='pointer'
					className='messengerIcon'
					color='#9747FF'
					_hover={{ color: 'rgb(94, 45, 200)' }}
					transitionDuration='.2s'>
					<Phone size='42px' />
				</GridItem>
				<GridItem
					cursor='pointer'
					color='#9747FF'
					_hover={{ color: 'rgb(94, 45, 200)' }}
					transitionDuration='.2s'>
					<Video size='42px' />
				</GridItem>
				<GridItem
					cursor='pointer'
					color='#9747FF'
					_hover={{ color: 'rgb(94, 45, 200)' }}
					transitionDuration='.2s'>
					<MoreVertical size='42px' />
				</GridItem>
			</Grid>
			<Divider mt='20px' />
		</Box>
	);
}
