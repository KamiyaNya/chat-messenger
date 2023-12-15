import Head from 'next/head';
import ChatPage from '@/components/screens/Chat/Chat.page';
import { socket } from '@/utils/socket';
import { useEffect } from 'react';

export default function Chat() {
	useEffect(() => {
		socket.socketConnect();
	}, []);

	return (
		<>
			<Head>
				<title>Страница чата</title>
			</Head>
			<ChatPage />
		</>
	);
}
