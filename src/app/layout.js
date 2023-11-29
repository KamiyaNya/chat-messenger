import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { Providers } from './provider';

import './globals.scss';

export const metadata = {
	title: 'Main Page',
	description: 'welcome to main page',
};



export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
