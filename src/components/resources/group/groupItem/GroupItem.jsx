import { Flex, Grid, Image, Box } from '@chakra-ui/react';

export default function GroupItem({ chatImage, username, message, date, messageCount }) {
	const cutMessage = message.slice(0, 60);
	return (
		<Flex
			cursor='pointer'
			_hover={{ bgColor: '#f9f9f9' }}
			transitionProperty='background-color'
			transitionDuration='.3s'
			borderRadius='25px 5px 5px 25px'
			pr='10px'>
			<Image
				src={chatImage}
				boxSize='60px'
				borderRadius='50%'
				overflow='hidden'
				minWidth='60px'
				objectFit='cover'
			/>
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
					{message.length > 22 ? message.slice(0, 22) + '...' : message}
				</Box>
			</Box>
			<Grid ml='auto'>
				<Box
					fontWight={300}
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
