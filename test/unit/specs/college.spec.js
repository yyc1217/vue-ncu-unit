import data from '@/data/colleges'
import { testBasic } from './common'
import component from '@/components/college.vue'
import { events } from '@/components/event-bus'

testBasic({
  name: '學院',
  defaults: '工學院',
  component,
  data,
  event: events.changeCollege
})
