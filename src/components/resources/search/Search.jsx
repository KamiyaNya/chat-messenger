'use client';
import { useState } from 'react';
import { FormControl, FormLabel, Input, Box, Flex } from '@chakra-ui/react';
import { Search } from 'lucide-react';

export default function SearchField({ }) {
	const [searchValue, setSearchValue] = useState('');

	return (
		<FormControl>
			<FormLabel
				px='25px'
				py='18px'
				bgColor='#fff'
				boxShadow='0 4px 5px 2px rgba(121, 197, 239, 0.38)'
				borderRadius='25px' m={0}>
				<Flex alignItems='center'>
					<Box mr='20px' cursor='text'>
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
					/>
				</Flex>
			</FormLabel>
		</FormControl>
	);
}
