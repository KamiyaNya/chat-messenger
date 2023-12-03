'use client'

import { useSession } from 'next-auth/react';
import Aside from '@/components/resources/aside/Aside';
import styles from './MainLayout.module.scss';


export default function MainLayout({ children }) {
	const session = useSession();
	console.log(session);
	return (
		<div className={styles.container}>
			<Aside />
			{children}
		</div>
	);
}
