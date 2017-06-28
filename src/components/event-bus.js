import Vue from 'vue'
import 'babel-polyfill'
import { Enum } from 'enumify'

export default new Vue()

class Event extends Enum {}
Event.initEnum([
  'changeCollege',
  'changeDegree'
])

export const events = Event
