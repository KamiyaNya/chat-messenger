'use client';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, FormLabel, Input, Box, Flex } from '@chakra-ui/react';
import { Search, X } from 'lucide-react';
import { useDebounce } from '@uidotdev/usehooks';
import { $api } from '@/utils/axios';
import { setUsers, setFriends } from '@/store/slice/users.slice';

export default function SearchField() {
	const [searchValue, setSearchValue] = useState('');
	const debounceSearch = useDebounce(searchValue, 500);
	const dispatch = useDispatch();
	const clearField = () => {
		setSearchValue('');
		dispatch(setUsers([]));
		dispatch(setFriends([]));
	};
	const searchUsersAndGroups = async () => {
		try {
			if (debounceSearch) {
				const { data } = await $api.get('/users/find_user_and_groups', {
					params: {
						name: debounceSearch,
					},
				});

				const { users, friends, groups } = data.data;
				dispatch(setUsers(users));
				dispatch(setFriends(friends));
			} else {
				clearField();
			}
		} catch (error) {}
	};

	useEffect(() => {
		searchUsersAndGroups();
	}, [debounceSearch]);

	return (
		<FormControl>
			<FormLabel
				px='25px'
				py='18px'
				bgColor='#fff'
				boxShadow='0 4px 5px 2px rgba(121, 197, 239, 0.38)'
				borderRadius='25px'
				m={0}>
				<Flex alignItems='center'>
					<Box
						mr='20px'
						cursor='text'>
						<Search
							size={43}
							color='#7C7C7C'
						/>
					</Box>
					<Input
						placeholder='Поиск'
						fontSize='28px'
						outline='none'
						border='none'
						boxShadow='none'
						color='#4D4949'
						_focusVisible={{ boxShadow: 'none' }}
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					<Box
						cursor='pointer'
						color='#7C7C7C'
						_hover={{ color: '#423F3F' }}
						onClick={clearField}>
						<X size='26px' />
					</Box>
				</Flex>
			</FormLabel>
		</FormControl>
	);
}
