import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Main Page',
	description: 'welcome to main page',
};

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
