import { prefixing, fallback, i18n } from '../data/locales'

export default {
  props: {
    locale: {
      default: fallback
    },
    fallbackLocale: {
      default: fallback
    },
    i18n: {
      type: Object,
      default: () => i18n
    },
    except: {
      type: Array,
      default: () => []
    },
    only: {
      type: Array,
      default: () => []
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
  },

  mounted () {
    if (typeof this.emitChange === 'function') {
      this.emitChange()
    }

    if (typeof this.afterMounted === 'function') {
      this.afterMounted()
    }
  }
}
