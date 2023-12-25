'use client';
import { useState } from 'react';
import { Flex, Image, Box, Button } from '@chakra-ui/react';
import { $api } from '@/utils/axios';

export default function NotificationInviteToRoomItem({ user, notification }) {
	const [accept, setAccept] = useState(notification.accept);

	const confirmInvite = async () => {
		try {
			const { data } = await $api.post('/notifications/confirm_invite', {
				notificationInviteRoomId: notification.id,
			});
			if (data.success) {
				setAccept(1);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const rejectInvite = async () => {
		try {
			const { data } = await $api.post('/notifications/reject_invite', {
				notificationInviteRoomId: notification.id,
			});
			if (data.success) {
				setAccept(2);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Flex
			bgColor='#f9f9f9'
			transitionProperty='background-color'
			transitionDuration='.3s'
			borderRadius='25px'
			py='8px'
			px='12px'
			pr='10px'
			flexDirection='column'>
			<Box
				mb='12px'
				fontSize='22px'>
				Приглашение в друзья
			</Box>
			<Flex>
				{user.userImage ? (
					<Image
						src={user.userImage}
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
						{user.userName.split('')[0].toUpperCase()}
					</Flex>
				)}
				<Box mx='30px'>
					<Box
						fontSize='20px'
						fontWeight={500}
						color='#303030'>
						{user.userName}
					</Box>
				</Box>

				{!accept ? (
					<Flex ml='auto'>
						<Button
							colorScheme='green'
							ml='auto'
							my='auto'
							onClick={confirmInvite}>
							Принять
						</Button>
						<Button
							colorScheme='red'
							ml='12px'
							my='auto'
							onClick={rejectInvite}>
							Отказать
						</Button>
					</Flex>
				) : accept === 1 ? (
					<Flex ml='auto'
						bgColor='green'
						py='8px'
						px='18px'
						borderRadius='20px'
						color='#fff' alignItems='center'>
						Принято
					</Flex>
				) : accept === 2 ? (
					<Flex ml='auto'
						bgColor='red'
						py='8px'
						px='18px'
						borderRadius='20px'
						color='#fff' alignItems='center'>
						Отказано
					</Flex>
				) : (
					''
				)}
			</Flex>
		</Flex>
	);
}
