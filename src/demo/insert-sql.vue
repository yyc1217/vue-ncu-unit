<template>
    <div>
        <pre class="one-line">
            <code :id="componentId">{{ sql }}</code>
        </pre>
        <button class="copyme u-pull-right"
                :data-clipboard-target="'#' + componentId">Copy</button>
    </div>
</template>

<script>

import squel from 'squel'

export default {
    props: {
        source: {
            type: String,
            required: true,
        },
    },
    data () {
      return {
          componentId : this.source + '-sql',
          datas: require('../data/' + this.source)
      }
    },

    computed: {
      sql () {
          return squel.insert()
                .into(this.source)
                .setFieldsRows(this.datas)
                .toString()
      }
  },
}
</script>
