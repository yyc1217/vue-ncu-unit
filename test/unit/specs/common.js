import 'should'
import { mount } from 'avoriaz'
import bus from '@/components/event-bus'

let getComponent = (component, propsData = {}) =>
  mount(component, {
    propsData
  })

exports.getComponent = getComponent

exports.bus = bus
