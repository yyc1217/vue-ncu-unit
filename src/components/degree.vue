<template>

<select v-model="selected">

    <option v-for="degree in degrees" v-bind:data-study_year="degree.study_year"
                                      v-bind:value="degree.id"
                                      v-bind:key="degree.id">{{ $t(degree, 'name') }}</option>

</select>

</template>

<script>

import degrees from '../data/degrees'
import bus from './event-bus'

export default {

    props : [
        'defaults'
    ],

    data () {
        return {
            degrees,
            selected : this.defaults
        }
    },

    watch: {
        selected (newValue) {
            bus.$emit('change:degree', {
                degree: this.selected
            });
        }
    }
}

</script>

<style>
</style>