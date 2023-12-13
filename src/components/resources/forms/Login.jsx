'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Spinner } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/slice/auth.slice';
import { $api } from '@/utils/axios';

export default function Login({ setForm }) {
	const [login, setLogin] = useState({ email: '', password: '' });
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const router = useRouter();
	const pathname = usePathname();
	const navigateLink = pathname !== '/' ? pathname : '/home';
	const loginHandler = async () => {
		try {
			setLoading(true);
			const { data, status } = await $api.post(`/login`, {
				userEmail: login.email,
				userPassword: login.password,
			});
			if (data.success) {
				dispatch(setUser(data.payload));
				setLoading(false);
				router.push(navigateLink);
			}
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};

	return (
		<Flex
			maxWidth='400px'
			margin='auto'
			height='100%'
			width='100%'
			bg='#fff'
			padding='30px'
			borderRadius='25px'
			boxShadow='0px 4px 5px 2px rgba(121, 197, 239, 0.38)'>
			<Box width='100%'>
				<Heading
					as='h2'
					textAlign='center'>
					Войти
				</Heading>
				<Box mt='24px'>
					<FormControl>
						<FormLabel>E-mail</FormLabel>
						<Input
							value={login.email}
							onChange={(event) => setLogin({ ...login, email: event.target.value })}
							type='email'
							outline='none'
						/>
					</FormControl>
					<FormControl mt='10px'>
						<FormLabel>Пароль</FormLabel>
						<Input
							value={login.password}
							onChange={(event) => setLogin({ ...login, password: event.target.value })}
							type='password'
							outline='none'
						/>
					</FormControl>

					<Button
						colorScheme='teal'
						variant='solid'
						mt='16px'
						width='100%'
						size='lg'
						bg='#6E00FF'
						_hover={{ bg: '#5A02CF' }}
						isDisabled={loading ? true : false}
						onClick={loginHandler}>
						{loading ? <Spinner /> : 'Войти'}
					</Button>
					<Flex mt='12px'>
						<Box>
							Нет аккаунта?
							<Button
								variant='link'
								ml='4px'
								onClick={() => setForm('registration')}>
								Регистрация
							</Button>
						</Box>
					</Flex>
					<Flex mt='12px'>
						<Button
							variant='link'
							ml='auto'>
							Забыли пароль?
						</Button>
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
}
