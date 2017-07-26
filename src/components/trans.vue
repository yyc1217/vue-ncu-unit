<template>

<span class="ncu-unit ncu-unit--trans"
      v-bind:id="id">{{ translated }}</span>

</template>

<script>

/**
* 將學院、系所或學位的id轉換成中文或英文
*
*/

import { keyBy } from 'lodash'
import degrees from '../data/degrees'
import colleges from '../data/colleges'
import departments from '../data/departments'

import mixin from './mixin'

export default {

    props: {
        id: {
            type: String,
            default: 'ncu-unit--trans'
        },
        type: String,
        transId: {
            type: [
                String,
                Number
            ],
            required: true
        }
    },

    mixins: [
        mixin
    ],

    data () {
        return {
            degrees : keyBy(degrees, 'id'),
            colleges : keyBy(colleges, 'id'),
            departments : keyBy(departments, 'id')
        }
    },

    computed : {
        translated () {
            switch(this.type) {
                case 'degree':
                    return this.trans(this.degrees)
                case 'college':
                    return this.trans(this.colleges)
                case 'department':
                    return this.trans(this.departments)

                default:
                    throw new Error(`無法將id ${this.transId} 翻譯成類型 ${this.type}`)
            }
        }
    },

    methods : {
        trans (data) {
            return this.$t(data[this.transId], 'name')
        }
    }
}

</script>