'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Aside from '@/components/resources/aside/Aside';
import styles from '@/components/layouts/MainLayout.module.scss';
import Forms from '@/components/resources/forms/Forms';
import { $api } from '@/utils/axios';

export default function MainLayout({ children }) {
	const { isAuth } = useSelector((state) => state.auth);
	const router = useRouter();
	const checkRoute = async () => {
		try {
			const { data, status } = await $api.get('/chat');
		} catch (error) {
		
		
				if (error?.response.status === 403) router.push('/');

		}
	};
	useEffect(() => {
		checkRoute();
	}, []);
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
