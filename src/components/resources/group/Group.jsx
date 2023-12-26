'use client';
import { Heading, Box, Divider,Button } from '@chakra-ui/react';
import GroupItem from './groupItem/GroupItem';

export default function Group({ items = [] }) {
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
					Группы
				</Heading>
				<Button variant='outline' mt='12px'  colorScheme='purple'>Создать группу</Button>
				<Box
					mt='18px'
					maxHeight='29.5vh'
					height='100%'
					overflow='auto'
					pr='10px'>
				
					{items.map((data, index) => (
						<Box key={data.username}>
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
								chatImage={data.chatImage}
								username={data.username}
								message={data.message}
								date={data.date}
								messageCount={data.count}
							/>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
}
