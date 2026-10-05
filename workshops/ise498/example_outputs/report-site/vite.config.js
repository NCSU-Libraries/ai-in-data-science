import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

// report.md and charts/ live one folder up, in the evidence pack.
// The build reads them directly. The dev server serves files outside this
// folder only after src/main.js has imported them, and refuses direct requests
// (for example a chart URL fetched right after a restart) with a 403.
// Allowing the evidence pack folder makes both work.
const evidencePack = fileURLToPath(new URL('..', import.meta.url));

export default defineConfig({
  base: './', // relative asset paths, so dist/ can be hosted from any folder
  server: {
    fs: { allow: [evidencePack] },
  },
});
