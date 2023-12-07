'use client';
const { Provider } = require('react-redux');
import { store } from './../store/store';

export default function ReduxProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
