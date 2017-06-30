import { testBasic } from './common'
import component from '@/components/department.vue'
import data from '@/data/departments'
import { events } from '@/components/event-bus'

testBasic({
  name: '系所',
  defaults: '地球科學學系',
  component,
  data,
  event: events.changeDepartment
})
