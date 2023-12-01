import dayjs from 'dayjs';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import Search from './../../resources/search/Search';
import Group from './../../resources/group/Group';

export default function ChatPage() {
	const simpleData = [
		{
			chatImage: '/profileImage.jpg',
			username: 'Kris',
			message: 'Я тут',
			date: dayjs().format('HH:mm DD/MM'),
		},
		{
			chatImage: '/profileImage.jpg',
			username: 'Даня',
			message: 'Интересно',
			date: dayjs().format('HH:mm DD/MM'),
			count: 3,
		},
		{
			chatImage: '/profileImage.jpg',
			username: 'Миха',
			message: 'Интересно будет посмотреть, на твои действия',
			date: dayjs().format('HH:mm DD/MM'),
			count: 5,
		},
	];

	const simpleData2 = [
		{
			chatImage: '/profileImage.jpg',
			username: 'Kris',
			message: 'Я тут',
			date: dayjs().format('HH:mm DD/MM'),
		},
		{
			chatImage: '/profileImage.jpg',
			username: 'Даня',
			message: 'Интересно',
			date: dayjs().format('HH:mm DD/MM'),
			count: 3,
		},
		{
			chatImage: '/profileImage.jpg',
			username: 'Миха',
			message: 'Интересно будет посмотреть, на твои действия',
			date: dayjs().format('HH:mm DD/MM'),
			count: 5,
		},
		{
			chatImage: '/profileImage.jpg',
			username: 'Миха',
			message: 'Интересно будет посмотреть, на твои действия',
			date: dayjs().format('HH:mm DD/MM'),
			count: 5,
		},
		{
			chatImage: '/profileImage.jpg',
			username: 'Миха',
			message: 'Интересно будет посмотреть, на твои действия',
			date: dayjs().format('HH:mm DD/MM'),
			count: 5,
		},
		{
			chatImage: '/profileImage.jpg',
			username: 'Миха',
			message: 'Интересно будет посмотреть, на твои действия',
			date: dayjs().format('HH:mm DD/MM'),
			count: 5,
		},
	];

	return (
		<MainLayout>
			<Grid gridTemplateColumns='5fr 8fr'>
				<Grid gap='36px'>
					<Box>
						<Search />
					</Box>
					<Box>
						<Group
							heading='Группы'
							items={simpleData}
						/>
					</Box>
					<Box>
						<Group
							heading='Друзья'
							items={simpleData2}
						/>
					</Box>
				</Grid>
			</Grid>
		</MainLayout>
	);
}
