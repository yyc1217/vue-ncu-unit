
const prefixes = {
  'en': 'english',
  'zh-TW': 'chinese'
}

module.exports = {
  props: {
    'locale': {
      default: 'zh-TW'
    }
  },

  methods: {
    $t (obj, prop) {
      if (obj === undefined) {
        throw new Error('obj is undefined')
      }

      let property = `${prefixes[this.locale]}_${prop}`

      if (!obj.hasOwnProperty(property)) {
        throw new Error(`obj ${JSON.stringify(obj)} 沒有 ${property}`)
      }

      return obj[property]
    }
  }
}
