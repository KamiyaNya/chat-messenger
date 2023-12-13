'use client';
import { usePathname, useRouter } from 'next/navigation';
import { Flex, Grid, Image, Box } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { $api } from '@/utils/axios';
import { useDispatch } from 'react-redux';
import { setCurrentFriend } from '@/store/slice/users.slice';
export default function GroupItem({ chatImage, username, message, date, messageCount, roomId, userId, userOnline, userLastOnline }) {
	const dispatch = useDispatch();

	const pathname = usePathname();
	const router = useRouter();
	const joinRoom = async () => {
		if (!roomId) {
			const newRoomId = uuidv4();
			router.push(`${pathname}?room=${newRoomId}`);

			await $api.post('/chat/create_room', {
				roomId: newRoomId,
				userId: userId,
			});
		} else {
			router.push(`${pathname}?room=${roomId}`);
		}
		dispatch(setCurrentFriend({ friendName: username, friendOnline: userOnline, friendLastOnline: userLastOnline, friendImage: chatImage }));
	};

	const cutMessage = message ? message.slice(0, 22) : '';
	return (
		<Flex
			cursor='pointer'
			_hover={{ bgColor: '#f9f9f9' }}
			transitionProperty='background-color'
			transitionDuration='.3s'
			borderRadius='25px 5px 5px 25px'
			pr='10px'
			onClick={joinRoom}>
			{chatImage ? (
				<Image
					src={chatImage}
					boxSize='60px'
					borderRadius='50%'
					overflow='hidden'
					minWidth='60px'
					objectFit='cover'
				/>
			) : (
				<Flex
					width='60px'
					height='60px'
					minWidth='60px'
					borderRadius='50%'
					justifyContent='center'
					alignItems='center'
					bgColor='#6e00ff'
					fontSize='24px'
					color='#fff'
					fontWeight='bold'>
					{username.split('')[0].toUpperCase()}
				</Flex>
			)}

			<Box mx='30px'>
				<Box
					fontSize='20px'
					fontWeight={500}
					color='#303030'>
					{username}
				</Box>
				<Box
					letterSpacing='0.8'
					color='#303030'>
					{cutMessage.length ? cutMessage + '...' : ''}
				</Box>
			</Box>
			<Grid ml='auto'>
				<Box
					fontWeight={300}
					letterSpacing='0.16px'
					color='#7C7C7C'>
					{date}
				</Box>
				{messageCount ? (
					<Flex
						textAlign='right'
						borderRadius='50%'
						bgColor='#F24E1E'
						color='#fff'
						width='max-content'
						height='max-content'
						p='4px'
						lineHeight={1}
						fontSize='13px'
						ml='auto'
						mt='2px'
						fontWeight={500}
						minWidth='22px'
						minHeight='22px'
						justifyContent='center'>
						{messageCount}
					</Flex>
				) : (
					''
				)}
			</Grid>
		</Flex>
	);
}
