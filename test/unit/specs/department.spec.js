import { testBasic, testExcept, testOnly } from './common'
import component from '@/components/department.vue'
import data from '@/data/departments'
import { events } from '@/components/event-bus'

const name = '系所'

let filteredData = data.filter((dept) => {
  // 學士班 && 文學院
  return dept.study_system_no == 1 && dept.college_id == '文學院'
})

testBasic({
  name,
  defaults: data[0].id.toString(),
  component,
  data: filteredData,
  event: events.changeDepartment
})

let except = [
  10020, // 英美語文學系
]

testExcept({
  name,
  component,
  data : filteredData,
  except
})

let only = [
  10020, // 英美語文學系  
]

testOnly({
  name,
  component,
  data: filteredData,
  only
})