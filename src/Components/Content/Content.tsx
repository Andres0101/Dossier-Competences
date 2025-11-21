// Components
import Education from './Education/Education';
import Experiences from './Experiences/Experiences';
import Languages from './Languages/Languages';
import Profile from './Profile/Profile';
import Skills from './Skills/Skills';
// Styles
import styles from './Content.module.scss';

export default function Content() {
	return (
		<div className={styles.content}>
			<Profile />
			<Skills />
			<Education />
			<Languages />
			<div className={styles.separator} aria-hidden />
			<Experiences />
		</div>
	);
}
