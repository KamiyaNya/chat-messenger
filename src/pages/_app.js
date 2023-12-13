import { Provider } from 'react-redux';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { store } from '@/store/store';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
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

	return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	);
}
