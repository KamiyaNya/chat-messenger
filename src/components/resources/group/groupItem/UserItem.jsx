'use client';
import { useState } from 'react';
import { Flex, Grid, Image, Box, Button } from '@chakra-ui/react';
import { $api } from '@/utils/axios';
export default function UserItem({ chatImage, username, userId }) {
	const [isFriend, setToFriend] = useState(false);

	const addToFriend = async () => {
		try {
			const { data } = await $api.post('/chat/add_to_friend', { friendId: userId });
			if (data.data.success) {
				setToFriend(true);
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
				onClick={addToFriend}
				isDisabled={isFriend ? true : false}>
				{isFriend ? 'Добавлен' : 'Добавить'}
			</Button>
		</Flex>
	);
}
