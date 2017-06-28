import { map } from 'lodash'

const locales = {
  en: {
    name: 'en',
    prefix: 'english'
  },
  'zh-TW': {
    name: 'zh-TW',
    prefix: 'chinese'
  }
}

export default locales

export const fallback = 'zh-TW'

export const names = map(locales, 'name')

export function prefixing (locale, property) {
  let prefix = locales[locale].prefix
  return `${prefix}_${property}`
}
