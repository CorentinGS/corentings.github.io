/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['tailwindcss'],
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
    'tailwindcss/migration-from-tailwind-2': 'off',
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    tailwindcss: {
      config: './tailwind.config.cjs',
    },
  },
  ignorePatterns: ['**/.astro/**'],
};
