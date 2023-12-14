import Head from 'next/head'
import ChatPage from '@/components/screens/Chat/Chat.page';
export default function Chat() {
	return (
		<>
		<Head>
		<title>Страница чата</title>
		</Head>
			<ChatPage />
		</>
	);
}
