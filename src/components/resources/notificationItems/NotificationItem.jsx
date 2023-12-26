'use client';
import { Flex, Image, Box, Button } from '@chakra-ui/react';
import { $api } from '@/utils/axios';

export default function NotificationItem({ user, notification }) {
	const confirmInvite = async () => {
		try {
			const { data } = await $api.post('/users/confirm_invite');
			if (data.success) {
			}
		} catch (error) {
			console.log(error);
		}
	};
	const rejectInvite = async () => {
		try {
			const { data } = await $api.post('/users/reject_invite');
			if (data.success) {
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Flex
			cursor='pointer'
			_hover={{ bgColor: '#f9f9f9' }}
			transitionProperty='background-color'
			transitionDuration='.3s'
			borderRadius='25px 5px 5px 25px'
			pr='10px'>
			{user.chatImage ? (
				<Image
					src={user.chatImage}
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
					{user.username.split('')[0].toUpperCase()}
				</Flex>
			)}
			<Box mx='30px'>
				<Box
					fontSize='20px'
					fontWeight={500}
					color='#303030'>
					{user.username}
				</Box>
			</Box>
			<Button
				colorScheme='green'
				ml='auto'
				my='auto'
				onClick={confirmInvite}>
				Принять
			</Button>
			<Button
				colorScheme='red'
				ml='auto'
				my='auto'
				onClick={rejectInvite}>
				Отказать
			</Button>
		</Flex>
	);
}
