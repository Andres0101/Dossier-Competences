import { useTranslation } from '../../../hooks/useTranslation';
import styles from '../Content.module.scss';

export default function Skills() {
	const { t } = useTranslation();
	const highlightPattern = t.skills.areas[1].highlightWords;

	const renderWithHighlights = (text: string) =>
		text
			.split(new RegExp(`(${highlightPattern?.join('|')})`, 'gi'))
			.map((part, index) =>
				highlightPattern?.some(
					(word: string) => word.toLowerCase() === part.toLowerCase()
				) ? (
					<span key={`${part}-${index}`} className={`fw-700`}>
						{part}
					</span>
				) : (
					part
				)
			);

	return (
		<div className={`flex-col gap-32`}>
			<div className={`flex-col`}>
				<h1 className={`fw-700`}>{t.skills.areas[0].title}</h1>
				<ul className={`flex-col gap-4 ${styles.list}`}>
					{t.skills.areas[0].skills.map((skill: string, index: number) => (
						<li key={index}>{skill}</li>
					))}
				</ul>
			</div>

			<div className={`flex-col`}>
				<h1 className={`fw-700`}>{t.skills.areas[1].title}</h1>
				<ul className={`flex-col gap-4 ${styles.list}`}>
					{t.skills.areas[1].skills.map((skill: string, index: number) => (
						<li key={index}>{renderWithHighlights(skill)}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
