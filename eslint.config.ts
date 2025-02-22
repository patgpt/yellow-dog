import { FlatCompat } from '@eslint/eslintrc'

const compat: FlatCompat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier']
  })
]
export default eslintConfig
