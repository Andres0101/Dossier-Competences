import { Fragment } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';

export default function Profile() {
	const { t } = useTranslation();
	const profileDescription = t.profile.description.split('\n');
	const highlightPattern = t.profile.highlightWords;

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
		<div className={`flex-col gap-8`}>
			<h1 className={`fw-700`}>{t.profile.title}</h1>
			<p className={`fs-16 lh-relaxed t-jus`}>
				{profileDescription.map((paragraph, idx) => (
					<Fragment key={idx}>
						{renderWithHighlights(paragraph)}
						{idx < profileDescription.length - 1 && <br />}
					</Fragment>
				))}
			</p>
		</div>
	);
}
