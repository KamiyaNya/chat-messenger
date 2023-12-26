'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { icons } from 'lucide-react';
import styles from './Navigation.module.scss';

export default function NavigationItem({ link }) {
	const LucideIcon = icons[link.icon];
	const pathname = usePathname();
	const isActive = pathname === link.href
	return (
		<li className={`${styles.navigation_item} ${isActive ? styles.navigation_active: ''}`}>
			<Link className={styles.navigation_link} href={link.href}>
				<LucideIcon
					size='38px'
					color='#fff'
					strokeWidth={1.5}
				/>
			</Link>
		</li>
	);
}
