'use client';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Heading, Box, Divider } from '@chakra-ui/react';
import GroupItem from './groupItem/GroupItem';
import { $api } from '@/utils/axios';
import { setFriends } from '@/store/slice/users.slice';
export default function Friends() {
	const { friends } = useSelector((state) => state.users);
	const dispatch = useDispatch();

	const getFriends = async () => {
		try {
			const { data } = await $api.get('/users/friends');
			dispatch(setFriends(data.data.friends));
		} catch (err) {}
	};

	useEffect(() => {
		getFriends();
	}, []);

	return (
		<Box
			pl='18px'
			pr='15px'
			pt='20px'
			pb='26px'
			bgColor='#fff'
			boxShadow='0 4px 5px 2px rgba(121, 197, 239, 0.38)'
			borderRadius='25px'>
			<Box>
				<Heading
					as='h2'
					fontSize='30px'
					color='#303030'
					letterSpacing='1.5px'>
					Друзья
				</Heading>
				<Box
					mt='18px'
					maxHeight='29.5vh'
					height='100%'
					overflow='auto'
					pr='10px'>
					{friends.map((friend, index) => (
						<Box key={friend.id}>
							{index !== 0 ? (
								<Divider
									my='15px'
									opacity='1'
									bgColor='rgba(180, 171, 171, 0.66)'
								/>
							) : (
								''
							)}
							<GroupItem
								chatImage={friend.userImage}
								username={friend.userName}
								message={friend.message}
								date={friend.date}
								messageCount={friend.count}
								roomId={friend.roomUUId}
								userId={friend.id}
								userOnline={friend.userOnline}
								userLastOnline={friend.userLastOnline}
							/>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
}
