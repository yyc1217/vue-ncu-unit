import Vue from 'vue'
import 'babel-polyfill'
import { Enum } from 'enumify'

export default new Vue()

class Event extends Enum {
  withID (targetID = 'This should not be empty') {
    return this.name + ':' + targetID
  }
}

Event.initEnum([
  'changeCollege',
  'changeDegree',
  'changeDepartment'
])

export const events = Event
