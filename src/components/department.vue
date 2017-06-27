<template>

<select v-model="selected">

    <option v-for="department in filtered"
            v-bind:value="department.chinese_name"
            v-bind:key="department.id">{{ $t(department, 'name') }}</option>

</select>

</template>

<script>

import degrees from '../data/degrees'
import departments from '../data/departments'
import bus from './event-bus'

export default {

    props: {
        defaults: String,
        filtering: {
            type: Object,
            default () {
                return {
                    college: undefined,
                    degree: undefined
                }
            }
        }
    },

    data () {
        return {
            departments,
            selected: this.defaults,
            filter: this.filtering
        }
    },

    mounted () {
        bus.$on('change:college', (data) => {
            this.filter.college = data.college
        });

        bus.$on('change:degree', (data) => {
            this.filter.degree = data.degree
        });
    },

    computed: {
        filtered () {

            let degree = degrees.filter((degree) => degree.id == this.filter.degree)[0]
            let study_system_no = degree && degree.study_system_no || -1

            return this.departments

                    .filter((department) => {
                        return this.filter.college === undefined || department.college === this.filter.college
                    })

                    .filter((department) => {
                        return this.filter.degree === undefined || department.study_system_no == study_system_no
                    })
        }
    }
}

</script>

<style>
</style>

