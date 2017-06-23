<template>

<span>{{ translated }}</span>

</template>

<script>

/**
* 將學院、系所或學位的id轉換成中文或英文
*
*/

import _ from 'lodash'
import degrees from './data/degrees'
import colleges from './data/colleges'
import departments from './data/departments'

export default {

    props: ['type', 'transId'],

    data () {
        return {
            degrees : _.keyBy(degrees, 'id'),
            colleges : _.keyBy(colleges, 'id'),
            departments : _.keyBy(departments, 'chinese_name')
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
                    throw new Error(`無法將 ${this.transId}} 翻譯成 ${this.type}`)
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