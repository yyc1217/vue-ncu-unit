<template>

<select v-model="selected"
        v-on:change="emitChange">

    <option v-for="college in colleges"
            v-bind:value="college.id"
            v-bind:key="college.id">{{ $t(college, 'name') }}</option>
</select>

</template>

<script>

import colleges from '../data/colleges'
import bus, { events } from './event-bus'

import mixin from './mixin'

export default {

    props: [
        'defaults'
    ],

    mixins: [
        mixin
    ],

    data () {
        return {
            colleges,
            selected: this.defaults
        };
    },

    methods: {
        emitChange () {
            bus.$emit(events.changeCollege.name, {
                college: this.selected
            })
        }
    }
}

</script>