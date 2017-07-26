import { prefixing, fallback } from '@/data/locales'

export default {
  props: {
    locale: {
      default: fallback
    },
    fallbackLocale: {
      default: fallback
    }
  },

  methods: {
    $t (obj, prop) {
      if (obj === undefined) {
        throw new Error('obj is undefined')
      }

      // 有該property且不為空
      let property = prefixing(this.locale, prop)
      if (obj.hasOwnProperty(property) && obj[property]) {
        return obj[property]
      }

      // 有該fallback property且不為空
      let fallbackProperty = prefixing(this.fallbackLocale, prop)
      if (obj.hasOwnProperty(fallbackProperty) && obj[fallbackProperty]) {
        return obj[fallbackProperty]
      }

      throw new Error(`obj ${JSON.stringify(obj)} 沒有 ${property} 也沒有 ${fallbackProperty}`)
    }
  }
}
