<template>

<select v-model="selected"
        v-on:change="emitChange">

    <option v-for="degree in degrees" v-bind:data-study_year="degree.study_year"
                                      v-bind:value="degree.id"
                                      v-bind:key="degree.id">{{ $t(degree, 'name') }}</option>

</select>

</template>

<script>

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
            bus.$emit(events.changeDegree.name, {
                degree: this.selected
            })
        }
    }
}

</script>