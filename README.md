# Dossier de Compétences Generator

Dossier de Compétences generation system with multi-language support and environment-driven data.

## Setup

### Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# CV language (fr or en)
VITE_LANG=fr

# Personal Information
VITE_FIRST_NAME=Pepe
VITE_LAST_NAME=RAMIREZ
VITE_EMAIL=peperamirez@gmail.com
VITE_LOCATION=Paris, France
```

### Switch Language

To generate the CV in another language, simply change the `VITE_LANG` variable:

- `VITE_LANG=fr` for French (default)
- `VITE_LANG=en` for English

Then run the build:

```bash
npm run build
```

### Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

## Structure

- `src/locales/` – Translation files (fr.json, en.json)
- `src/hooks/useTranslation.ts` – Hook to access translations
- `src/Components/` – CV components

## Security

⚠️ **Important**: The `.env` file contains personal and confidential information. Make sure to:

1. Never commit the `.env` file (it is already listed in `.gitignore`)
2. Use `.env.example` as the template to document required variables
3. Keep your personal data safe
