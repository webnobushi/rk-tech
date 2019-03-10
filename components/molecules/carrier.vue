<template lang="pug">
  div
    span.prop.gray {{ carrier.from }} ~ {{ carrier.to }}
    div.prop
      span {{ carrier.company }}
      | &nbsp;/&nbsp;
      span.gray {{ carrier.role }}

</template>

<script>
export default {
  props: {
    carrier: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="stylus" scoped>
.prop
  padding 0 5px
  display inline-block
  width 50%
  vertical-align top
  word-break break-all

</style>
