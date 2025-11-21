/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_EMAIL: string;
	readonly VITE_LOCATION: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare module '*.svg' {
	const content: string;
	export default content;
}

declare module '*.svg?react' {
	import * as React from 'react';
	const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;
	export default ReactComponent;
}

declare module '*.png' {
	const content: string;
	export default content;
}

declare module '*.jpg' {
	const content: string;
	export default content;
}

declare module '*.jpeg' {
	const content: string;
	export default content;
}

declare module '*.gif' {
	const content: string;
	export default content;
}

declare module '*.webp' {
	const content: string;
	export default content;
}
