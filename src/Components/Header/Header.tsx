import { useTranslation } from '../../hooks/useTranslation';
// Components
import Avatar from './Avatar';
// Icons
import EmailIcon from 'assets/icons/email.svg?react';
import PinIcon from 'assets/icons/pin.svg?react';
// Styles
import styles from './Header.module.scss';

export default function Header() {
	const { t } = useTranslation();
	const firstName = import.meta.env.VITE_FIRST_NAME || '';
	const lastName = import.meta.env.VITE_LAST_NAME || '';

	return (
		<header className={styles.header}>
			<div className={`flex-col gap-32`}>
				<h1 className={`fs-46 fw-900 text-white lh-normal`}>
					Dossier de Compétences
				</h1>

				<div className={`flex-col gap-12`}>
					<h5 className={`fs-24 fw-900 text-white`}>
						{firstName} {lastName.toUpperCase()}
					</h5>
					<h6 className={`text-white fs-14 fw-400 lh-normal`}>
						{t.header.title}
					</h6>
					<div className={`flex-col gap-4`}>
						<div className="flex ic gap-8">
							<EmailIcon />
							<p className={`text-white lh-normal`}>
								{import.meta.env.VITE_EMAIL}
							</p>
						</div>
						<div className="flex ic gap-8">
							<PinIcon />
							<p className={`text-white lh-normal`}>
								{import.meta.env.VITE_LOCATION}
							</p>
						</div>
					</div>
				</div>
			</div>
			<Avatar />
		</header>
	);
}
