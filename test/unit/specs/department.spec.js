import { testBasic } from './common'
import component from '@/components/department.vue'
import data from '@/data/departments'
import { events } from '@/components/event-bus'

testBasic({
  name: '系所',
  defaults: '6002',
  component,
  data,
  event: events.changeDepartment
})
