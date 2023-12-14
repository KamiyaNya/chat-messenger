'use client';

import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Spinner, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { $api } from '@/utils/axios';
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Registration({ setForm }) {
	const [login, setLogin] = useState({ email: '', password: '', username: '' });
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(true);
	const [error, setError] = useState({ field: '', message: '' });
	const toast = useToast();

	const validationFields = () => {
		const email = login.email.trim();
		const username = login.username.trim();
		const password = login.password.trim();

		if (!email.length) {
			setSuccess(false);
			setError({ field: 'email', message: 'Заполните email' });
			return false;
		}

		if (!email.match(emailRegex)) {
			setSuccess(false);
			setError({ field: 'email', message: 'Некорректный формат почты' });
			return false;
		}

		if (!username.length) {
			setSuccess(false);
			setError({ field: 'username', message: 'Заполните имя пользователя' });
			return false;
		}

		if (username.length < 4) {
			setSuccess(false);
			setError({ field: 'username', message: 'Не менее 4 символов' });
			return false;
		}

		if (!password.length) {
			setSuccess(false);
			setError({ field: 'password', message: 'Заполните пароль' });
			return false;
		}

		if (password.length < 4) {
			setSuccess(false);
			setError({ field: 'password', message: 'Не менее 4 символов' });
			return false;
		}
		setSuccess(true);
		setError({ field: '', message: '' });
		return true;
	};

	const RegisterHandler = () => {
		return new Promise(async (resolve, reject) => {
			try {
				setLoading(true);
				const { data } = await $api.post(`/auth/register`, {
					userName: login.username,
					userEmail: login.email,
					userPassword: login.password,
				});
				if (!data.success) {
					setError({ field: data.field, message: data.message });
					reject();
				} else {
					setError({ field: '', message: '' });
				}
				setSuccess(data.success);
				setLoading(false);
				resolve();
			} catch (error) {
				reject(error);
				setLoading(false);
			}
		});
	};

	const executeHandler = async () => {
		if (!validationFields()) return;

		toast.promise(RegisterHandler(), {
			success: { title: 'Успешная регистрация', isClosable: true },
			loading: { title: 'Производим авторизацию', isClosable: true },
			error: { title: 'Произошла ошибка', isClosable: true },
		});
	};

	const removeErrorMessage = () => {
		setSuccess(true);
		setError({ field: '', message: '' });
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
					Регистрация
				</Heading>
				<Box mt='24px'>
					<FormControl>
						<FormLabel>E-mail</FormLabel>
						<Input
							value={login.email}
							onChange={(event) => setLogin({ ...login, email: event.target.value })}
							type='email'
							outline='none'
							onFocus={removeErrorMessage}
						/>
						{!success && error.field === 'email' ? (
							<Box
								fontSize='12px'
								color='red.400'
								mt='4px'>
								{error.message}
							</Box>
						) : (
							''
						)}
					</FormControl>
					<FormControl mt='10px'>
						<FormLabel>Имя пользователя</FormLabel>
						<Input
							value={login.username}
							onChange={(event) => setLogin({ ...login, username: event.target.value })}
							type='text'
							outline='none'
							onFocus={removeErrorMessage}
						/>
						{!success && error.field === 'username' ? (
							<Box
								fontSize='12px'
								color='red.400'
								mt='4px'>
								{error.message}
							</Box>
						) : (
							''
						)}
					</FormControl>
					<FormControl mt='10px'>
						<FormLabel>Пароль</FormLabel>
						<Input
							value={login.password}
							onChange={(event) => setLogin({ ...login, password: event.target.value })}
							type='password'
							outline='none'
							onFocus={removeErrorMessage}
						/>
						{!success && error.field === 'password' ? (
							<Box
								fontSize='12px'
								color='red.400'
								mt='4px'>
								{error.message}
							</Box>
						) : (
							''
						)}
					</FormControl>

					<Button
						colorScheme='teal'
						variant='solid'
						mt='16px'
						width='100%'
						size='lg'
						bg='#6E00FF'
						_hover={{ bg: '#5A02CF' }}
						onClick={() => executeHandler()}
						isDisabled={loading ? true : false}>
						{loading ? <Spinner /> : 'Регистрация'}
					</Button>
					<Flex mt='12px'>
						<Box>
							Есть аккаунт?
							<Button
								variant='link'
								ml='4px'
								onClick={() => setForm('login')}>
								Войти
							</Button>
						</Box>
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
}
