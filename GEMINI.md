# Project: Bowling Kata Scorer

## Project Overview

This project is a Javascript application designed to calculate the score of a ten-pin bowling game. The core logic is contained within the `game.js` file. The project is set up with `vitest` for testing, `eslint` for linting, and `prettier` for code formatting.

## Building and Running

*   **Running the application:**
    ```bash
    node game.js
    ```
*   **Running tests:**
    ```bash
    npm test -- --run
    ```
*   **Linting the code:**
    ```bash
    npm run lint
    ```
*   **Formatting the code:**
    ```bash
    npm run format
    ```

## Development Conventions

The project uses a standard Javascript coding style enforced by ESLint and Prettier. The configuration for these tools can be found in the `package.json` file. All logic for the bowling scorer is expected to be within the `game.js` file.
## PromptKit Quick Reference
- Review the available artefacts when the student requests them:
  - Protocol: `promptkit/protocols/setup.md` — instructions for updating these CLI briefings.
  - Workflow: `promptkit/workflows/tutor.md` — guide for tutoring/explanation sessions.
  - Workflow: `promptkit/workflows/reflect.md` — guide for documenting outcomes and next steps.
- Student notes live in `promptkit/notes/`; The table in `progress-journal.md` is main place to update with reflections. Instructor Activities are in `promptkit/activities/` (read-only).
- When new workflows arrive, expect additional files under `promptkit/workflows/`.