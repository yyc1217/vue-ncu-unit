import { random } from 'lodash'

import Vue from 'vue'
import { getComponent, bus } from './common'
import component from '@/components/grade.vue'
import degrees from '@/data/degrees'
import { events } from '@/components/event-bus'
import { degreeID } from '@/components/default-id'

let test = (degree, index, array) => {
  let defaults = random(2, degree.study_year).toString()
  let c
  beforeEach(() => {
    c = getComponent(component, {
      degree: degree.id,
      defaults
    })
  })

  it(`修業上限應為 ${degree.study_year} 年`, () => {
    c.element.options.length.should.eql(degree.study_year)
  })

  it(`應該預設選擇第 ${defaults} 年`, () => {
    c.element.value.should.eql(defaults)
  })

  let nextDegreeIndex = (index + 1) % array.length
  let nextDegree = array[nextDegreeIndex]
  it(`當學位改為 ${nextDegree.chinese_name} 時，修業上限應從 ${degree.study_year} 年修改為 ${nextDegree.study_year} 年`, (done) => {
    bus.$emit(events.changeDegree.withID(degreeID), {
      degree: nextDegree
    })

    Vue.nextTick(() => {
      c.element.options.length.should.eql(nextDegree.study_year)
      done()
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
