import { useMemo } from 'react';
import frTranslations from '../locales/fr.json';
import enTranslations from '../locales/en.json';

type Translations = typeof frTranslations;

const translations: Record<string, Translations> = {
	fr: frTranslations,
	en: enTranslations,
};

export function useTranslation() {
	const lang = (import.meta.env.VITE_LANG || 'fr') as 'fr' | 'en';
	const t = translations[lang] || translations.fr;

	return useMemo(() => ({ t, lang }), [lang]);
}
