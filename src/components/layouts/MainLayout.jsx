import Aside from '@/components/resources/aside/Aside';
import styles from './MainLayout.module.scss';

export default function MainLayout({ children }) {
	return (
		<div className={styles.container}>
			<Aside />
			{children}
		</div>
	);
}
