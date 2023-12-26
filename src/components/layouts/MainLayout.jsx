'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Skeleton } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import Aside from '@/components/resources/aside/Aside';
import Forms from '@/components/resources/forms/Forms';

import styles from '@/components/layouts/MainLayout.module.scss';
import { $api } from '@/utils/axios';
import { logout, setAuth } from '@/store/slice/auth.slice';

export default function MainLayout({ children }) {
	const { isAuth } = useSelector((state) => state.auth);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const router = useRouter();
	const checkAuth = async () => {
		try {
			setLoading(true);
			const { data } = await $api.get('/auth/is_auth');
			dispatch(setAuth(data.success));
			setLoading(false);
		} catch (error) {
			setLoading(false);
			dispatch(logout());
			router.push('/');
		}
	};
	useEffect(() => {
		checkAuth();
	}, []);

	if (loading && !isAuth) {
		return (
			<div className={styles.container}>
				<Skeleton
					startColor='#6e00ff'
					endColor='rgba(97, 45, 209, 0.9)'
					borderRadius='25px'>
					<Aside />
				</Skeleton>
				<Skeleton
					startColor='#6e00ff'
					endColor='rgba(97, 45, 209, 0.9)'
					borderRadius='25px'>
					{children}
				</Skeleton>
			</div>
		);
	}

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
