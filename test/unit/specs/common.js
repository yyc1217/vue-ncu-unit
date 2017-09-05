import should from 'should'
import { mount } from 'avoriaz'
import { random } from 'lodash'
import eventBus from '@/components/event-bus'
import { names as locales, prefixing } from '@/data/locales'

export const bus = eventBus

let getComponent = (component, propsData = {}) =>
  mount(component, {
    propsData
  })

export { getComponent }

let testBasic = ({ name, data, defaults, component, event }) => {
  describe(name, () => {
    let c
    beforeEach(() => {
      c = getComponent(component, {
        defaults
      })
    })

    it(`應該載入 ${data.length} 個${name}`, () => {
      c.element.options.length.should.eql(data.length)
    })

    it(`應該預設選擇 ${defaults}`, () => {
      c.element.value.should.eql(defaults)
    })

    it(`在切換時發出 ${event} 事件，並且有送出資料`, (done) => {
      bus.$on(event.withID(c.element.id), (data) => {
        should(data).not.be.empty()
        done()
      })
      c.element.selectedIndex = (c.element.selectedIndex + 1) % data.length
      c.trigger('change')
    })

    testLocale({
      component,
      defaults,
      data,
      property: 'name'
    })
  })
}
export { testBasic }

let testLocale = ({ component, defaults, data, property }) => {
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
export { testLocale }
