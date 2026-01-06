import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import './App.scss';

function App() {
	const generatePDF = () => {
		// Use browser's print functionality which preserves text
		const printWindow = window.open('', '_blank');
		if (!printWindow) {
			alert('Please allow popups to generate PDF');
			return;
		}

		const element = document.getElementById('content-id');
		if (!element) return;

		// Clone the element with all styles
		const clonedElement = element.cloneNode(true) as HTMLElement;

		// Get all style tags and link tags from the document
		const styleTags = Array.from(document.querySelectorAll('style'))
			.map((style) => style.outerHTML)
			.join('\n');

		const linkTags = Array.from(
			document.querySelectorAll('link[rel="stylesheet"]')
		)
			.map((link) => link.outerHTML)
			.join('\n');

		// Create print-friendly HTML with all styles
		const htmlContent = `
			<!DOCTYPE html>
			<html>
				<head>
					<meta charset="UTF-8">
					<title>Dossier de Compétences</title>
					${linkTags}
					${styleTags}
					<style>
						@page {
							size: A4 portrait;
							margin: 20px 0;
						}
						@media print {
							@page {
								margin: 20px 0;
								size: A4 portrait;
							}
							body {
								margin: 20px 0;
								padding: 0;
							}
						}
						body {
							margin: 20px 0;
							padding: 0;
							width: 1200px;
						}
						* {
							box-sizing: border-box;
							-webkit-print-color-adjust: exact;
							print-color-adjust: exact;
						}
					</style>
				</head>
				<body>
					${clonedElement.outerHTML}
				</body>
			</html>
		`;

		printWindow.document.write(htmlContent);
		printWindow.document.close();

		// Wait for content and styles to load, then trigger print
		printWindow.onload = () => {
			setTimeout(() => {
				// Note: Users should uncheck "Headers and Footers" in the print dialog
				// to remove the date, title, and page numbers
				printWindow.print();
			}, 500);
		};
	};

	return (
		<div style={{ width: '1200px', margin: '0 auto' }}>
			<button onClick={generatePDF} style={{ position: 'absolute' }}>
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
