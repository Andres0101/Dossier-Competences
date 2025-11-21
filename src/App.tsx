import generatePDF, { Margin, Options } from 'react-to-pdf';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import './App.scss';

const options: Options = {
	method: 'open' as const,
	filename: 'Dossier_Compétences.pdf',
	page: {
		margin: {
			top: Margin.MEDIUM,
			right: Margin.NONE,
			bottom: Margin.MEDIUM,
			left: Margin.NONE,
		},
		format: 'A4',
		orientation: 'portrait' as const,
	},
	canvas: {
		mimeType: 'image/jpeg' as const,
		qualityRatio: 1,
	},
};

function App() {
	const getTargetElement = () => document.getElementById('content-id');
	return (
		<div style={{ width: '1240px' }}>
			<button
				onClick={() => generatePDF(getTargetElement, options)}
				style={{ position: 'absolute' }}
			>
				Download PDF
			</button>
			<div id="content-id">
				<Header />
				<Content />
			</div>
		</div>
	);
}

export default App;
