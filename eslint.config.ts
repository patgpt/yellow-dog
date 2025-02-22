import { FlatCompat } from '@eslint/eslintrc'

const compat: FlatCompat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

const eslintConfig = [
  ...compat.config({
    ignorePatterns: [
      'node_modules',
      'dist',
      'build',
      'coverage',
      'next',
      'turbo',
      '.env',
      '.env.local',
      '.env.development.local',
      '.env.test.local',
      '.env.production.local',
      'docs/**/*'
    ],
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      'react/jsx-no-literals': 'error', // Consistently import navigation APIs from `@/i18n/routing`
      'no-restricted-imports': [
        'error',
        {
          name: 'next/link',
          message: 'Please import from `@/i18n/routing` instead.'
        },
        {
          name: 'next/navigation',
          importNames: ['redirect', 'permanentRedirect', 'useRouter', 'usePathname'],
          message: 'Please import from `@/i18n/routing` instead.'
        }
      ]
    }
  })
]
export default eslintConfig
