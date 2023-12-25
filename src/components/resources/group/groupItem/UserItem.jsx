import { useState } from 'react';
import { Flex, Image, Box, Button } from '@chakra-ui/react';

import { $api } from '@/utils/axios';

export default function UserItem({ chatImage, username, userId }) {
	const [isSend, setIsSend] = useState(false);

	const sendInviteToRoom = async () => {
		try {
			const { data } = await $api.post('/users/create_invite_to_personal_room', { userId: userId });
			if (data.success) {
				setIsSend(true);
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
			</Box>
			<Button
				colorScheme='purple'
				ml='auto'
				my='auto'
				onClick={sendInviteToRoom}
				isDisabled={isSend ? true : false}>
				{isSend ? 'Отправлено' : 'Отправить'}
			</Button>
		</Flex>
	);
}
