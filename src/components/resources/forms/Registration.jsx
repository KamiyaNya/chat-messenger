'use client';

import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';

export default function Registration({ setForm }) {
	const [login, setLogin] = useState({ email: '', password: '', username: '' });
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
						/>
					</FormControl>
					<FormControl mt='10px'>
						<FormLabel>Имя пользователя</FormLabel>
						<Input
							value={login.email}
							onChange={(event) => setLogin({ ...login, username: event.target.value })}
							type='text'
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
						_hover={{ bg: '#5A02CF' }}>
						Войти
					</Button>
					<Flex mt='12px'>
						<Box>
							Есть аккаунта?
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
