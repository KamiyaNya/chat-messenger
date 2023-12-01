'use client';
import { Heading, Box, Divider } from '@chakra-ui/react';
import GroupItem from './groupItem/GroupItem';

export default function Group({ heading, items }) {
	return (
		<Box
			pl='18px'
			pr='25px'
			pt='20px'
			pb='26px'
			bgColor='#fff'
			boxShadow='0 4px 5px 2px rgba(121, 197, 239, 0.38)'
			borderRadius='25px'>
			<Heading
				as='h2'
				fontSize='30px'
				color='#303030'
				letterSpacing='1.5px'>
				{heading}
			</Heading>
			<Box mt='18px'>
				{items.map((data, index) => (
					<>
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
							key={data.date}
							chatImage={data.chatImage}
							username={data.username}
							message={data.message}
							date={data.date}
							messageCount={data.count}
						/>
					</>
				))}
			</Box>
		</Box>
	);
}
