import { random } from 'lodash'

import colleges from '@/data/colleges'
import { names as locales, prefixing } from '@/data/locales'
import common from './common'
import component from '@/components/college.vue'
import bus, { events } from '@/components/event-bus'

let defaults = '工學院'

let c

beforeEach(() => {
  c = common.getComponent(component, {
    defaults
  })
})

describe('學院', () => {
  it(`應該載入 ${colleges.length} 個學院`, () => {
    c.element.options.length.should.eql(colleges.length)
  })

  it(`應該預設選擇 ${defaults}`, () => {
    c.element.value.should.eql(defaults)
  })

  it(`在切換時發出 ${events.changeCollege} 事件`, (done) => {
    bus.$on(events.changeCollege.name, (data) => {
      done()
    })
    c.element.selectedIndex = (c.element.selectedIndex + 1) % colleges.length
    c.trigger('change')
  })

  describe('語系', () => {

    locales.forEach((locale) => {
      it(locale, () => {
        c = common.getComponent(component, {
          defaults,
          locale
        })

        let index = random(colleges.length - 1)
        c.element.selectedIndex = index

        let propertyName = prefixing(locale, 'name')
        c.element.options[index].text.should.be.eql(colleges[index][propertyName])
      })
    })
  })
})
