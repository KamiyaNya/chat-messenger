import Head from 'next/head';
import { useEffect } from 'react';

import ChatPage from '@/components/screens/chat/Chat.page';
import { socket } from '@/utils/socket';

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
