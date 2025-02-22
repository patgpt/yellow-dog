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
      '.env.production.local'
    ],
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier']
  })
]
export default eslintConfig
