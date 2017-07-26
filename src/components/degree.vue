<template>

<select class="ncu-unit ncu-unit--degree"
        v-model="selected"
        v-on:change="emitChange">

    <option v-for="degree in degrees" v-bind:data-study_year="degree.study_year"
                                      v-bind:value="degree.id"
                                      v-bind:key="degree.id">{{ $t(degree, 'name') }}</option>

</select>

</template>

<script>
import _ from 'lodash'

import degrees from '../data/degrees'
import bus, { events } from './event-bus'
import mixin from './mixin'

export default {

    props : [
        'defaults'
    ],

    mixins : [
        mixin
    ],

    data () {
        return {
            degrees,
            selected : this.defaults
        }
    },

    methods: {
        emitChange () {
            let degree = _.keyBy(this.degrees, 'id')[this.selected]
            bus.$emit(events.changeDegree.name, {
                degree
            })
        }
    }
}

</script>