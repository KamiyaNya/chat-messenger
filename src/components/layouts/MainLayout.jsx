'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@chakra-ui/react';
import Aside from '@/components/resources/aside/Aside';
import styles from '@/components/layouts/MainLayout.module.scss';
import Forms from '@/components/resources/forms/Forms';
import { $api } from '@/utils/axios';
import { setAuth } from '@/store/slice/auth.slice';

export default function MainLayout({ children }) {
	const { isAuth } = useSelector((state) => state.auth);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const router = useRouter();
	const checkAuth = async () => {
		try {
			setLoading(true);
			const { data } = await $api.get('/is_auth');
			dispatch(setAuth(data.payload.success));
			setLoading(false);
		} catch (error) {
			setLoading(false);
			// router.push('/');
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
