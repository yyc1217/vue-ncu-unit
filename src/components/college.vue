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
import { keyBy } from 'lodash'

import colleges from '../data/colleges'
import bus, { events } from './event-bus'
import { collegeID } from './default-id'

import mixin from './mixin'

export default {

    props: {
        defaults: String,
        id: {
            type: String,
            default: collegeID
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
            let college = keyBy(this.colleges, 'id')[this.selected]
            bus.$emit(events.changeCollege.withID(this.id), {
                college
            })
        }
    }
}

</script>