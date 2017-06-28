import { getComponent } from './common'
import component from '@/components/trans.vue'
import { names, prefixing, fallback } from '@/data/locales'

let locales = names.concat(undefined)

let types = [
  'college',
  'degree',
  'department'
]

let test = (type, locale) => {
  let datas = require(`@/data/${type}s`)
  let data = datas[0]

  const c = getComponent(component, {
    type,
    transId: data.id,
    locale
  })

  locale = locale === undefined ? fallback : locale
  let text = data[prefixing(locale, 'name')]
  it(`應顯示 ${text}`, () => {
    c.text().should.eql(text)
  })
}

describe('id轉換', () => {
  locales.forEach((locale) => {
    describe(`語系 ${locale}`, () => {
      types.forEach((type) => {
        test(type, locale)
      })
    })
  })
})
