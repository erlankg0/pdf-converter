import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from '@typescript-eslint/eslint-plugin';

// Используем ESLint и TypeScript плагин для конфигурации
const eslintConfig = {
    extends: [
        js.configs.recommended,
        ...tseslint.configs.recommended,
    ],
    ignorePatterns: ['dist'], // Игнорирование папки dist
    overrides: [
        {
            files: ['src/**/*.{ts,tsx}'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
            plugins: ['react-hooks', 'react-refresh'],
            rules: {
                ...reactHooks.configs.recommended.rules,
                'react-refresh/only-export-components': [
                    'warn',
                    { allowConstantExport: true },
                ],
            },
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    globals: {
        ...globals.browser,
    },
};

export default eslintConfig;