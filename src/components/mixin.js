import { prefix, fallback } from '@/data/locales'

module.exports = {
  props: {
    'locale': {
      default: fallback
    }
  },

  methods: {
    $t (obj, prop) {
      if (obj === undefined) {
        throw new Error('obj is undefined')
      }

      let property = `${prefix(this.locale)}_${prop}`

      if (!obj.hasOwnProperty(property)) {
        throw new Error(`obj ${JSON.stringify(obj)} 沒有 ${property}`)
      }

      return obj[property]
    }
  }
}
