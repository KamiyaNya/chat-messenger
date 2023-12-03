'use client';
import { extendTheme } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export function ChakraProviders({ children }) {
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
		components: {
			Input: {
				baseStyle: {
					_focusVisible: {
						outline: 'none',
						boxShadow: 'none',
						border: '0',
					},
				},
			},
		},
	});

	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
