<template>

<select v-model="selected"
        v-on:change="emitChange">

    <option v-for="department in filtered"
            v-bind:value="department.chinese_name"
            v-bind:key="department.id + department.chinese_name">{{ $t(department, 'name') }}</option>

</select>

</template>

<script>

import degrees from '../data/degrees'
import departments from '../data/departments'
import bus, { events } from './event-bus'
import mixin from './mixin'

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

    mixins: [
        mixin
    ],

    data () {
        return {
            departments,
            selected: this.defaults,
            filter: this.filtering
        }
    },

    mounted () {
        bus.$on(events.changeCollege.name, (data) => {
            this.filter.college = data.college
        });

        bus.$on(events.changeDegree.name, (data) => {
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
    },
    methods: {
        emitChange () {
            bus.$emit(events.changeDepartment.name, {
                department: this.selected
            })
        }
    }
}

</script>
