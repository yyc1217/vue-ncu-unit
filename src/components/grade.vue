<template>

<select v-model="grade">

    <option v-for="n in years"
            v-bind:value="n"
            v-bind:key="'grade' + n">{{ n }}</option>

</select>

</template>

<script>

import degrees from '../data/degrees'
import bus from './event-bus'

export default {

    props: [
        'defaults',
        'degree'
    ],

    data () {
        return {
            grade: this.defaults,
            degree_id : this.degree
        }
    },

    computed: {
        years () {

            let degree = degrees.filter((degree) => degree.chinese_name === this.degree_id)[0]
            let study_year = degree && degree.study_year || 0

            return study_year
        }
    },

    mounted () {
        bus.$on('change:degree', (data) => {
            this.degree_id = data.degree
        })
    }
}

</script>

<style>
</styles>