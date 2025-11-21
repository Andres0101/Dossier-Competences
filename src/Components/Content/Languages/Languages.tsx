import { useTranslation } from '../../../hooks/useTranslation';
import styles from '../Content.module.scss';

export default function Languages() {
	const { t } = useTranslation();
	const highlightPattern = t.languages.highlightWords;

	const renderWithHighlights = (text: string) =>
		text
			.split(new RegExp(`(${highlightPattern.join('|')})`, 'gi'))
			.map((part, index) =>
				highlightPattern.some(
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
		<div className={`flex-col`}>
			<h1 className={`fw-700`}>{t.languages.title}</h1>
			<ul className={`flex-col gap-4 ${styles.list}`}>
				{t.languages.list.map((language: string, index: number) => (
					<li key={index}>{renderWithHighlights(language)}</li>
				))}
			</ul>
		</div>
	);
}
