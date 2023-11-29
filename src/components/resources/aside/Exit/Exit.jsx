import { Flex } from '@chakra-ui/react';
import { LogOut } from 'lucide-react';

export default function Exit() {
	return (
		<Flex mt='auto' width='100%' justifyContent="center" py='25px' _hover={{bgColor: '#5322bc'}} cursor="pointer">
			<LogOut size={38} color="#fff"/>
		</Flex>
	);
}
