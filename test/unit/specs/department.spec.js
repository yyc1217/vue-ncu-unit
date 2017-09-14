import { testBasic } from './common'
import component from '@/components/department.vue'
import data from '@/data/departments'
import { events } from '@/components/event-bus'

let filteredData = data.filter((dept) => {
  // 學士班 && 文學院
  return dept.study_system_no == 1 && dept.college == '文學院'
})

testBasic({
  name: '系所',
  defaults: data[0].id.toString(),
  component,
  data: filteredData,
  event: events.changeDepartment
})
