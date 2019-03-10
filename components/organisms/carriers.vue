<template lang="pug">
  LayoutContainer.columns.is-centered
    ol.column.is-10
      li(v-for="carrier in carriers")
        Carrier(:carrier="carrier")

</template>

<script>
import Carrier from '@/components/molecules/carrier'

export default {
  props: {
    carriers: {
      type: Array,
      default: [],
    },
  },

  components: {
    Carrier
  },
}
</script>

<style lang="stylus" scoped>
ol
  list-style-type none
li
  margin-bottom 20px
</style>
