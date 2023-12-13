'use client';
import { Heading, Box, Divider } from '@chakra-ui/react';
import UserItem from './groupItem/UserItem';

export default function Users({ users }) {
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
					Найденные пользователи
				</Heading>
				<Box
					mt='18px'
					maxHeight='29.5vh'
					height='100%'
					overflow='auto'
					pr='10px'>
					{users.map((user, index) => (
						<Box key={user.id}>
							{index !== 0 ? (
								<Divider
									my='15px'
									opacity='1'
									bgColor='rgba(180, 171, 171, 0.66)'
								/>
							) : (
								''
							)}
							<UserItem
								chatImage={user.userImage}
								username={user.userName}
								userId={user.id}
							/>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
}
