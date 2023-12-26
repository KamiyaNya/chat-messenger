import dynamic from 'next/dynamic';
import { Grid, Skeleton } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import MainLayout from '@/components/layouts/MainLayout';
import Search from '@/components/resources/search/Search';
import Users from '@/components/resources/group/Users';
import Group from '@/components/resources/group/Group';
import Friends from '@/components/resources/group/Friends';

const MessengerWidget = dynamic(() => import('@/components/widgets/MessengerWidget'), {
	loading: () => (
		<Skeleton
			width='100%'
			height='100%'></Skeleton>
	),
});

export default function ChatPage() {
	const searchParams = useSearchParams();
	const search = searchParams.get('room');
	const { users } = useSelector((state) => state.users);

	return (
		<MainLayout>
			<Grid
				gridTemplateColumns={{ x1170: '5fr 8fr' }}
				gap='36px' position='relative'>
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
