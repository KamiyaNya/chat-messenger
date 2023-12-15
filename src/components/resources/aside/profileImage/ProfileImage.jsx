import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import styles from './ProfileImage.module.scss';
export default function ProfileImage() {
	const user = useSelector((state) => state.auth.user);
	return (
		<Box
			className={styles.profile_image}
			borderRadius='50%'
			width='80px'
			height='80px'
			borderWidth='5px'
			borderColor='#5322bc'
			overflow='hidden'>
			{user && user.userImage ? (
				<Image
					className={styles.profile_image_img}
					src={user.userImage}
					alt='profile image'
					width={80}
					height={100}
				/>
			) : (
				<Box
					bgColor='#5322bc'
					width='100%'
					height='100%'></Box>
			)}
		</Box>
	);
}
