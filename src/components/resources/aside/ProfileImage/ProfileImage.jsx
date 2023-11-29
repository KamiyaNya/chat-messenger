import Image from 'next/image';
import styles from './ProfileImage.module.scss';
export default function ProfileImage() {
	return (
		<div className={styles.profile_image}>
			<Image
				className={styles.profile_image_img}
				src='/profileImage.jpg'
				alt='profile image'
				width={80}
				height={100}
			/>
		</div>
	);
}
