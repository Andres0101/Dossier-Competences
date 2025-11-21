# Environment Variables

This document describes every environment variable required by the project.

## Required Variables

### Language

- `VITE_LANG`: CV language (`fr` for French, `en` for English). Default: `fr`

### Personal Information

- `VITE_FIRST_NAME`: First name
- `VITE_LAST_NAME`: Last name (displayed in uppercase)
- `VITE_EMAIL`: Email address
- `VITE_LOCATION`: Location (city, country)

## Sample .env file

```env
VITE_LANG=fr
VITE_FIRST_NAME=Pepe
VITE_LAST_NAME=RAMIREZ
VITE_EMAIL=peperamirez@gmail.com
VITE_LOCATION=Paris, France
```

## Usage

1. Copy this file as `.env` in the project root
2. Fill it with your personal data
3. To change the language, update `VITE_LANG` and run `npm run build`
