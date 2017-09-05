import './demo.scss'

import Vue from 'vue'
import components, { bus, events } from '../'

let event = events.changeDegree.withID('demo-degree-5')
bus.$on(event, function (data) {
  document.getElementById('demoCallback').textContent = data.degree.id
})

new Vue({
  el: '#app',
  components,
  data () {
    return {}
  }
})
