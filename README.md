# Somali Prosody Database: frontend

Vue frontend for https://somaliprosody.dh.gu.se/

Relies on [som-backend](https://github.com/CDH-DevTeam/som-backend).

Uses [Howler](https://howlerjs.com/) for sound playback.

## Configuration

Uses [environment variables](https://cli.vuejs.org/guide/mode-and-env.html#environment-variables). Example `.env` file with default values:

```ini
# Backend URL base
VUE_APP_API_BASE="http://localhost:8030"
VUE_APP_SOUND_BASE="https://data.dh.gu.se/som/sound/"
```
