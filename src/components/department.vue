<template>

<select class="ncu-unit ncu-unit--department"
        v-bind:id="id"
        v-bind:name="name"
        v-bind:title="$t(i18n.department, 'name')"
        v-model="selected"
        v-on:change="emitChange">

    <option v-for="department in filtered"
            v-bind:value="department.id"
            v-bind:key="department.id + department.chinese_name">{{ $t(department, 'name') }}</option>

</select>

</template>

<script>
import { keyBy } from 'lodash'

import degrees from '../data/degrees'
import departments from '../data/departments'
import bus, { events } from './event-bus'
import { departmentID, collegeID, degreeID } from './default-id'
import mixin from './mixin'

export default {

    props: {
        id: {
            type: String,
            default: departmentID
        },
        name: {
            type: String,
            default: 'department'
        },
        defaults: {
            type: [ String, Number ],
            default : departments[0].id
        },
        filtering: {
            type: Object,
            default () {
                return {
                    college: undefined,
                    degree: undefined
                }
            }
        },
        listenToCollege: {
            type: String,
            default: collegeID
        },
        listenToDegree: {
            type: String,
            default: degreeID
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

    computed: {
        filtered () {
            let degree = degrees.filter((degree) => degree.id === this.filter.degree)[0]
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
            let department = keyBy(this.departments, 'id')[this.selected]
            bus.$emit(events.changeDepartment.withID(this.id), {
                department
            })
        },

        afterMounted () {
            bus.$on(events.changeCollege.withID(this.listenToCollege), (data) => {
                this.filter.college = data.college.id
                this.resetSelected()
            });

            bus.$on(events.changeDegree.withID(this.listenToDegree), (data) => {
                this.filter.degree = data.degree.id
                this.resetSelected()
            });
        },

        resetSelected () {
            let filtered = this.filtered
            this.selected = filtered.length == 0 ? '' : filtered[0].id
        }
    }
}

</script>
