
import { defineConfig } from './dist/index.mjs';

export default defineConfig({
  input: './srcTest/locales/en/**/*.json',
  output: './srcTest/i18n',
})
