import css from '@eslint/css'
import { FlatCompat } from '@eslint/eslintrc'
import markdown from '@eslint/markdown'

const compat: FlatCompat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier']
  }),
  css.configs.recommended,
  markdown.configs.recommended
]
export default eslintConfig
