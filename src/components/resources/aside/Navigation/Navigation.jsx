
import styles from './Navigation.module.scss';
import NavigationItem from './NavigationItem';

export default function Navigation({ NavLinks }) {

	return (
		<nav className={styles.navigation}>
			<ul>
				{NavLinks.map((link) => (
					<NavigationItem
						key={link.id}
						link={link}
					/>
				))}
			</ul>
		</nav>
	);
}
