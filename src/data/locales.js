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

export function names () {
  return map(locales, 'name')
}

export function prefix (locale) {
  return locales[locale].prefix
}
