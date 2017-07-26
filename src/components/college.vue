<template>

<select class="ncu-unit ncu-unit--college"
        v-bind:id="id"
        v-bind:title="$t(i18n.college, 'name')"
        v-model="selected"
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

    props: {
        defaults: String,
        id: {
            type: String,
            default: 'ncu-unit--college'
        }
    },

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