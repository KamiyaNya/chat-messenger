import { Roboto } from 'next/font/google';
const font = Roboto({ subsets: ['cyrillic'], weight: ['300', '400', '500', '700', '900'] });
import { Providers } from './provider';

import './globals.scss';

export const metadata = {
	title: 'Main Page',
	description: 'welcome to main page',
};

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={font.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
