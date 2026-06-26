# Somali Prosody Database: frontend

Vue frontend for https://somaliprosody.dh.gu.se/

Relies on [som-backend](https://github.com/CDH-DevTeam/som-backend).

Uses [Howler](https://howlerjs.com/) for sound playback.

## Development

Requires Node.js 22 or newer.

```sh
nvm use 22
yarn install
yarn serve
```

The development server runs at http://localhost:5173 by default.

## Configuration

Example `.env` file with default values:

```ini
# Backend URL base
VITE_API_BASE="http://localhost:8030"
VITE_SOUND_BASE="https://data.dh.gu.se/som/sound/"
```
