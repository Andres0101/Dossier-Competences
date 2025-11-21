// Components
import Profile from './Profile/Profile';
import Skills from './Skills/Skills';
// Styles
import styles from './Content.module.scss';

export default function Content() {
	return (
		<div className={styles.content}>
			<Profile />
			<Skills />
		</div>
	);
}
