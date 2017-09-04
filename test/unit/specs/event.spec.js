import Vue from 'vue'
import components from '@'
import degrees from '@/data/degrees'

let propsData = {
  template: `<div>
                <degree></degree>
                <college></college>
                <department></department>
            </div>`,
  components,
  data () {
    return {
      bus: new Vue({})
    }
  }
}

let createElem = id => {
  const elm = document.createElement('div')
  elm.id = id
  document.body.appendChild(elm)
  return elm
}

let getStudySystemNo = (id) => {
  return degrees.filter((degree) => degree.id === id)[0].study_system_no
}

let filteredManually = ({ departments, degreeId, collegeId }) => {
  let studySystemNo = getStudySystemNo(degreeId)
  return departments.filter((department) => department.study_system_no === studySystemNo)
                    .filter((department) => department.college === collegeId)
}

describe('Event', () => {
  let vm
  beforeEach(() => {
    let elm = createElem('abcd')
    vm = new Vue(propsData).$mount(elm)
  })

  const degreeId = '博士班'
  const collegeId = '工學院'

  it(`應該只剩 ${degreeId} ${collegeId} 的系所`, done => {
    var [ degreeSelect, collegeSelect, departmentSelect ] = vm.$children

    degreeSelect.$data.selected = degreeId
    collegeSelect.$data.selected = collegeId
    degreeSelect.emitChange()
    collegeSelect.emitChange()

    departmentSelect.$nextTick(() => {
      let filtered = filteredManually({
        departments: departmentSelect.$data.departments,
        degreeId,
        collegeId
      })

      departmentSelect.$el.options.length.should.not.eql(0)
      departmentSelect.$el.options.length.should.eql(filtered.length)

      done()
    })
  })
})
