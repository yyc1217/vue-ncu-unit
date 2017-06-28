import { random } from 'lodash'

import common from './common'
import component from '@/components/grade.vue'
import degrees from '@/data/degrees'

let test = (degree, index, array) => {
  let defaults = random(2, degree.study_year).toString()
  const c = common.getComponent(component, {
    degree: degree.id,
    defaults
  })

  it(`修業上限應為 ${degree.study_year} 年`, () => {
    let options = c.element.getElementsByTagName('option')
    options.length.should.eql(degree.study_year)
  })

  it(`應該預設選擇第 ${defaults} 年`, () => {
    c.element.value.should.eql(defaults)
  })

  let nextDegreeIndex = (index + 1) % array.length
  let nextDegree = array[nextDegreeIndex]
  it(`當學位改為 ${nextDegree.chinese_name} 時，修業上限應修改為 ${nextDegree.study_year} 年`, () => {
    common.bus.$emit('change:degree', {
      degree: nextDegree
    })
  })
}

describe('年級', () => {
  degrees.forEach((degree, index, array) => {
    describe(degree.chinese_name, () => {
      test(degree, index, array)
    })
  })
})
