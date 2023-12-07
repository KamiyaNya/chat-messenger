'use client';

import { useSession } from 'next-auth/react';
import Aside from '@/components/resources/aside/Aside';
import styles from './MainLayout.module.scss';
import { useSelector } from 'react-redux';
import Forms from '../resources/forms/Forms';

export default function MainLayout({ children }) {
	const { isAuth } = useSelector((state) => state.auth);

	if (!isAuth) {
		return <Forms />;
	}

	return (
		<div className={styles.container}>
			<Aside />
			{children}
		</div>
	);
}
