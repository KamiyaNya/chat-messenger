'use client';
import { extendTheme } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export function Providers({ children }) {
	const theme = extendTheme({
		styles: {
			global: {
				body: {
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
					background: '#eff6fc',
				},
			},
		},
	});

	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
