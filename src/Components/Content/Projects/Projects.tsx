import { useTranslation } from '../../../hooks/useTranslation';
import styles from '../Content.module.scss';

export default function Projects() {
	const { t } = useTranslation();

	return (
		<div className={`flex-col gap-48`}>
			<h1 className={`fw-700`}>{t.personal_projects.title}</h1>
			{t.personal_projects.projects.map((project: any) => (
				<div className={`flex-col gap-24`}>
					<div className={`flex-col gap-4 borderTop borderBottom`}>
						<div className={`flex-row ic jb`}>
							<h2 className={`fw-600`}>{project.title}</h2>
						</div>
						<p className={`fs-16 lh-relaxed t-jus`}>{project.stack}</p>
					</div>
					{/* Project */}
					<p className={`fs-16 lh-relaxed t-jus`}>{project.description}</p>
					{/* Features */}
					<div className={`flex-col gap-4`}>
						<p className={`fs-16 fw-700 lh-relaxed t-jus`}>
							{project.features.title}
						</p>
						<ul className={`flex-col gap-4 ${styles.list} ${styles.mt0}`}>
							{project.features.list.map((mission: string, index: number) => (
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
				</div>
			))}
		</div>
	);
}
