import 'should'
import { mount } from 'avoriaz'

let getComponent = (component, propsData = {}) =>
  mount(component, {
    propsData
  })

exports.getComponent = getComponent
