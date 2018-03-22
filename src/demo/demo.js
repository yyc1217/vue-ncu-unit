import './demo.scss'

import Vue from 'vue'
import components, { bus, events } from '../'
import insertSql from './insert-sql'

let event = events.changeDegree.withID('demo-degree-5')
bus.$on(event, function (data) {
  document.getElementById('demoCallback').textContent = data.degree.id
})

components.insertSql = insertSql

new Vue({
  el: '#app',
  components,
  data () {
    return {}
  },
  mounted () {
    hljs.initHighlightingOnLoad()
    new ClipboardJS('.copyme');
  }
})
