<template>

<select class="ncu-unit ncu-unit--grade"
        v-bind:id="id"
        v-bind:title="$t(i18n.grade, 'name')"
        v-model="grade">

    <option v-for="n in years"
            v-bind:value="n"
            v-bind:key="'grade' + n">{{ n }}</option>

</select>

</template>

<script>

import degrees from '../data/degrees'
import bus, { events } from './event-bus'
import { gradeID, degreeID } from './default-id'

import mixin from './mixin'

export default {

    props: {
        id: {
            type: String,
            default: gradeID
        },
        defaults: {
            type: String,
            default: '1'
        },
        degree: {
            type: String,
            required: true
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
            grade: this.defaults,
            degree_id : this.degree
        }
    },

    computed: {
        years () {

            let degree = degrees.filter((degree) => degree.id === this.degree_id)[0]
            if (!degree && !degree.study_year) {
                throw new Error('不存在該學位，degree id=' + this.degree_id)
            }

            return degree.study_year
        }
    },

    methods: {
        emitChange () {
            bus.$emit(events.changeGrade.withID(this.id), {
                grade: this.grade
            })
        },

        afterMounted () {
            bus.$on(events.changeDegree.withID(this.listenToDegree), (data) => {
                this.degree_id = data.degree.id
            })
        }
    }
}

</script>
