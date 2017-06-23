<template>

<select v-model="selected"
        v-on:change="emitChange">

    <option v-for="college in colleges"
            v-bind:value="college.id"
            v-bind:key="college.id">{{ $t(college, 'name') }}</option>
</select>

</template>

<script>

import colleges from './data/colleges'
import bus from './event-bus'

export default {

    props: [
        'defaults'
    ],

    data () {
        return {
            colleges,
            selected: this.defaults
        };
    },

    methods: {
        emitChange () {
            bus.$emit('change:college', {
                college: this.selected
            })
        }
    }
}

</script>

<style>
</style>