'use client';
import { Grid } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import MainLayout from '@/components/layouts/MainLayout';
import Search from '@/components/resources/search/Search';
import Users from '@/components/resources/group/Users';
import Group from '@/components/resources/group/Group';
import Friends from '@/components/resources/group/Friends';
import MessengerWidget from '@/components/widgets/MessengerWidget';
export default function ChatPage() {
	const searchParams = useSearchParams();
	const search = searchParams.get('room');
	const { users } = useSelector((state) => state.users);

	return (
		<MainLayout>
			<Grid
				gridTemplateColumns='5fr 8fr'
				gap='36px'>
				<Grid
					gap='36px'
					alignContent='baseline'>
					<Search />
					{users.length ? (
						<Users users={users} />
					) : (
						<>
							<Group />
							<Friends />
						</>
					)}
				</Grid>

				{search ? <MessengerWidget /> : ''}
			</Grid>
		</MainLayout>
	);
}
