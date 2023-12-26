import Head from 'next/head';
import ChatPage from '@/components/screens/сhat/Chat.page';
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
