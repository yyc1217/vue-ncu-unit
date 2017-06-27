import common from './common'
import component from '@/components/grade.vue'
import degrees from '@/data/degrees'
import _ from 'lodash'

describe('年級', () => {
  degrees.forEach((degree) => {
    let defaults = _.random(1, degree.study_year).toString()
    const c = common.getComponent(component, {
      degree: degree.chinese_name,
      defaults
    })

    it(`${degree.chinese_name} 應該有 ${degree.study_year} 年`, () => {
      let options = c.element.getElementsByTagName('option')
      options.length.should.eql(degree.study_year)
    })

    it(`${degree.chinese_name} 應該預設選擇第 ${defaults} 年`, () => {
      c.element.value.should.eql(defaults)
    })
  })
})
