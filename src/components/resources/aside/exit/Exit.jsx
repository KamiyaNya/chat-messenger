import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { Flex } from '@chakra-ui/react';
import { LogOut } from 'lucide-react';

import { $api } from '@/utils/axios';
import { logout } from '@/store/slice/auth.slice';
import { socket } from '@/utils/socket';

export default function Exit() {
	const dispatch = useDispatch();
	const router = useRouter();
	const logoutButton = async () => {
		try {
			await $api.get('/auth/logout');
			socket.socketDisconnect();
			dispatch(logout());
			router.push('/');
		} catch (error) {
			socket.socketDisconnect();
		}
	};

	return (
		<Flex
			mt='auto'
			width='100%'
			justifyContent='center'
			py='25px'
			_hover={{ bgColor: '#5322bc' }}
			cursor='pointer'
			onClick={logoutButton}>
			<LogOut
				size={38}
				color='#fff'
			/>
		</Flex>
	);
}
