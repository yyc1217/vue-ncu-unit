import { testBasic } from './common'
import component from '@/components/degree.vue'
import data from '@/data/degrees'
import { events } from '@/components/event-bus'

testBasic({
  name: '學位',
  defaults: '博士班',
  component,
  data,
  event: events.changeDegree
})
