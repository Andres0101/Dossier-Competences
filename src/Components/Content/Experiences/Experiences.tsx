import { useTranslation } from '../../../hooks/useTranslation';
import styles from '../Content.module.scss';

export default function Experiences() {
	const { t } = useTranslation();
	const highlightPatternSoop = t.experiences.soop.highlightWords;
	const highlightPatternAffeniteam = t.experiences.affeniteam.highlightWords;
	const highlightPatternSully = t.experiences.sully.highlightWords;

	const renderWithHighlights = (text: string, company: string) => {
		const highlightPattern =
			company === 'Soop'
				? highlightPatternSoop
				: company === 'Sully Group'
				? highlightPatternSully
				: highlightPatternAffeniteam;
		return text
			.split(new RegExp(`(${highlightPattern.join('|')})`, 'gi'))
			.map((part, index) =>
				highlightPattern.some(
					(word: string) => word.toLowerCase() === part.toLowerCase()
				) ? (
					<span key={`${part}-${index}`} className={`fw-700 underline`}>
						{part}
					</span>
				) : (
					part
				)
			);
	};

	return (
		<div className={`flex-col gap-48`}>
			<h1 className={`fw-700`}>{t.experiences.title}</h1>
			{/* Soop */}
			<div className={`flex-col gap-24`}>
				<div className={`flex-col gap-4 borderTop borderBottom`}>
					<div className={`flex-row ic jb`}>
						<h2 className={`fw-600`}>{t.experiences.soop.company}</h2>
						<p className={`fs-16 lh-relaxed t-jus`}>
							{t.experiences.soop.period}
						</p>
					</div>
					<p className={`fs-16 lh-relaxed t-jus`}>
						{t.experiences.soop.position}
					</p>
				</div>
				{/* Project */}
				<p className={`fs-16 lh-relaxed t-jus`}>
					{renderWithHighlights(
						t.experiences.soop.project,
						t.experiences.soop.company
					)}
				</p>
				{/* Missions */}
				<div className={`flex-col gap-4`}>
					<p className={`fs-16 fw-700 lh-relaxed t-jus`}>
						{t.experiences.soop.missions.title}
					</p>
					<ul className={`flex-col gap-4 ${styles.list} ${styles.mt0}`}>
						{t.experiences.soop.missions.list.map(
							(mission: string, index: number) => (
								<li key={index}>{mission}</li>
							)
						)}
					</ul>
				</div>
				{/* Technologies */}
				<div className={`flex-col gap-4`}>
					<p className={`fs-16 fw-700 lh-relaxed t-jus`}>
						{t.experiences.soop.technologies.title}
					</p>
					<p className={`fs-16 lh-relaxed t-jus`}>
						{t.experiences.soop.technologies.list.join(', ')}
					</p>
				</div>
				{/* Results */}
				<div className={`flex-col gap-4`}>
					<p className={`fs-16 fw-700 lh-relaxed t-jus`}>
						{t.experiences.soop.results.title}
					</p>
					<p className={`fs-16 lh-relaxed t-jus`}>
						{t.experiences.soop.results.description}
					</p>
				</div>
			</div>

			{/* Sully */}
			<div className={`flex-col gap-24 ${styles.newPage}`}>
				<div className={`flex-col gap-4 borderTop borderBottom`}>
					<div className={`flex-row ic jb`}>
						<h2 className={`fw-600`}>{t.experiences.sully.company}</h2>
						<p className={`fs-16 lh-relaxed t-jus`}>
							{t.experiences.sully.period}
						</p>
					</div>
					<p className={`fs-16 lh-relaxed t-jus`}>
						{t.experiences.sully.position}
					</p>
				</div>

				{/* Projects */}
				{t.experiences.sully.projects.map((project: any, index: number) => (
					<div
						key={index}
						className={`flex-col gap-24 ${
							index === 2
								? 'mb-extra'
								: index + 1 < t.experiences.sully.projects.length
								? 'mb-16'
								: ''
						}`}
					>
						<p className={`fs-16 lh-relaxed t-jus`}>
							{renderWithHighlights(project.title, t.experiences.sully.company)}
						</p>
						{/* Missions */}
						<div className={`flex-col gap-4`}>
							<p className={`fs-16 fw-700 lh-relaxed t-jus`}>
								{project.missions.title}
							</p>
							<ul className={`flex-col gap-4 ${styles.list} ${styles.mt0}`}>
								{project.missions.list.map((mission: string, index: number) => (
									<li key={index}>{mission}</li>
								))}
							</ul>
						</div>
						{/* Technologies */}
						<div className={`flex-col gap-4`}>
							<p className={`fs-16 fw-700 lh-relaxed t-jus`}>
								{project.technologies.title}
							</p>
							<p className={`fs-16 lh-relaxed t-jus`}>
								{project.technologies.list.join(', ')}
							</p>
						</div>
						{/* Results */}
						<div className={`flex-col gap-4`}>
							<p className={`fs-16 fw-700 lh-relaxed t-jus`}>
								{project.results.title}
							</p>
							<p className={`fs-16 lh-relaxed t-jus`}>
								{project.results.description}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Affeniteam */}
			<div className={`flex-col gap-24 ${styles.lastPage}`}>
				<div className={`flex-col gap-4 borderTop borderBottom`}>
					<div className={`flex-row ic jb`}>
						<h2 className={`fw-600`}>{t.experiences.affeniteam.company}</h2>
						<p className={`fs-16 lh-relaxed t-jus`}>
							{t.experiences.affeniteam.period}
						</p>
					</div>
					<p className={`fs-16 lh-relaxed t-jus`}>
						{t.experiences.affeniteam.position}
					</p>
				</div>

				{/* Project */}
				<p className={`fs-16 lh-relaxed t-jus`}>
					{renderWithHighlights(
						t.experiences.affeniteam.project,
						t.experiences.affeniteam.company
					)}
				</p>
				{/* Missions */}
				<div className={`flex-col gap-4`}>
					<p className={`fs-16 fw-700 lh-relaxed t-jus`}>
						{t.experiences.affeniteam.missions.title}
					</p>
					<ul className={`flex-col gap-4 ${styles.list} ${styles.mt0}`}>
						{t.experiences.affeniteam.missions.list.map(
							(mission: string, index: number) => (
								<li key={index}>{mission}</li>
							)
						)}
					</ul>
				</div>
				{/* Technologies */}
				<div className={`flex-col gap-4`}>
					<p className={`fs-16 fw-700 lh-relaxed t-jus`}>
						{t.experiences.affeniteam.technologies.title}
					</p>
					<p className={`fs-16 lh-relaxed t-jus`}>
						{t.experiences.affeniteam.technologies.list.join(', ')}
					</p>
				</div>
				{/* Results */}
				<div className={`flex-col gap-4`}>
					<p className={`fs-16 fw-700 lh-relaxed t-jus`}>
						{t.experiences.affeniteam.results.title}
					</p>
					<p className={`fs-16 lh-relaxed t-jus`}>
						{t.experiences.affeniteam.results.description}
					</p>
				</div>
			</div>
		</div>
	);
}
