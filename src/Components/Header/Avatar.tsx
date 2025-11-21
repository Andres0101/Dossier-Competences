import avatar from 'assets/photo.jpg';
import styles from './Avatar.module.scss';

export default function Avatar() {
	return (
		<div className={styles.avatar}>
			<img src={avatar} alt="Photo" />
		</div>
	);
}
