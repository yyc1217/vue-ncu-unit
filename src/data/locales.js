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

export const i18n = {
  college: {
    chinese_name: '學院',
    english_name: 'College'
  },
  department: {
    chinese_name: '系所',
    english_name: 'Department'
  },
  degree: {
    chinese_name: '學級',
    english_name: 'Degree'
  },
  grade: {
    chinese_name: '年級',
    english_name: 'Grade'
  }
}

export function prefixing (locale, property) {
  let prefix = locales[locale].prefix
  return `${prefix}_${property}`
}
