import Navigation from './navigation/Navigation';
import ProfileImage from './profileImage/ProfileImage';
import Exit from './exit/Exit';
import styles from './Aside.module.scss';

export default function Aside() {
	const navLinks = [
		{
			id: 1,
			label: 'Главная',
			href: '/home',
			icon: 'Home',
		},
		{
			id: 2,
			label: 'Чат',
			href: '/chat',
			icon: 'MessageCircle',
		},
		{
			id: 3,
			label: 'Уведомления',
			href: '/notifications',
			icon: 'Bell',
		},
		{
			id: 4,
			label: 'Настройки',
			href: '/settings',
			icon: 'Settings',
		},
	];

	return (
		<aside className={styles.aside}>
			<ProfileImage />
			<Navigation NavLinks={navLinks} />
			<Exit />
		</aside>
	);
}
