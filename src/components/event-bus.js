import Vue from 'vue'
export default new Vue()

import 'babel-polyfill'
import { Enum } from 'enumify'
class Event extends Enum {}
Event.initEnum([
  'changeCollege'
])

export const events = Event
