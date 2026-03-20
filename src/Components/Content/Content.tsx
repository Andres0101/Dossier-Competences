// Components
import Education from './Education/Education';
import Experiences from './Experiences/Experiences';
import Languages from './Languages/Languages';
import Projects from './Projects/Projects';
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
			<div className={styles.pageBreak}>
				<Experiences />
			</div>
			<div className={styles.pageBreak}>
				<Projects />
			</div>
		</div>
	);
}
