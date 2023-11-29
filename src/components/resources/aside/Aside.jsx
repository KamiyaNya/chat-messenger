import Navigation from './Navigation/Navigation';
import ProfileImage from './ProfileImage/ProfileImage';
import Exit from './Exit/Exit';
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
