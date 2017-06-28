import 'should'
import { mount } from 'avoriaz'
import { random } from 'lodash'

import bus from '@/components/event-bus'
import { names as locales, prefixing } from '@/data/locales'

exports.bus = bus

let getComponent = (component, propsData = {}) =>
  mount(component, {
    propsData
  })
exports.getComponent = getComponent

exports.testLocale = ({ component, defaults, data, property }) => {
  describe('語系', () => {
    locales.forEach((locale) => {
      it(locale, () => {
        let c = getComponent(component, {
          defaults,
          locale
        })

        let index = random(data.length - 1)
        c.element.selectedIndex = index

        let propertyName = prefixing(locale, property)
        c.element.options[index].text.should.be.eql(data[index][propertyName])
      })
    })
  })
}