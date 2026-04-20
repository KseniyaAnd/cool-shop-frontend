import globals from 'globals';
import prettier from 'eslint-config-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import angularTemplateParser from '@angular-eslint/template-parser';
import regexPlugin from 'eslint-plugin-regex';
import { fixupPluginRules } from '@eslint/compat';

export default [
  prettier,

  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: {
      '@angular-eslint/template': angularTemplate,
      regex: fixupPluginRules(regexPlugin),
    },
    rules: {
      '@angular-eslint/template/alt-text': 'error',
      '@angular-eslint/template/no-negated-async': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'warn',
      '@angular-eslint/template/prefer-control-flow': 'warn',
      'regex/invalid': ['error', [{ regex: '[а-яА-ЯёЁ]', message: 'No cyrillic allowed!' }]],
    },
  },

  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: tsparser,
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      '@typescript-eslint': tseslint,
      'unused-imports': unusedImports,
    },

    rules: {
      'no-unused-vars': 'off',

      'unused-imports/no-unused-imports': 'error',

      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      'no-console': [
        'warn',
        {
          allow: ['error', 'warn'],
        },
      ],

      'no-restricted-syntax': [
        'error',
        {
          selector: 'Literal[value=/.*[а-яА-ЯёЁ].*/]',
          message: 'Cyrillic characters are not allowed in strings.',
        },
        {
          selector: 'TemplateElement[value.raw=/.*[а-яА-ЯёЁ].*/]',
          message: 'Cyrillic characters are not allowed in template literals.',
        },
        {
          selector: 'Identifier[name=/.*[а-яА-ЯёЁ].*/]',
          message: 'Cyrillic characters are not allowed in variable names.',
        },
      ],
    },
  },
];
