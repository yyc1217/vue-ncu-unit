import './demo.scss'

import Vue from 'vue'
import components from '../'

// https://laracasts.com/discuss/channels/vue/use-a-global-event-bus
const bus = new Vue({})

new Vue({
  el: '#app',
  components,
  data () {
    return {
      bus
    }
  }
})
