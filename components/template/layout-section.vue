<template lang="pug">
  section(:id="id").layout-section
    Heading(:level=2).has-text-centered.is-marginless
      slot(name="heading")
    p.sub-heading.gray.has-text-centered.is-size-7
      slot(name="subHeading")

    slot(name="contents")

</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    }
  },
}
</script>

<style lang="stylus" scoped>
.layout-section
  padding 80px 0 20px
  &:first-child
    padding 0px 0 100px

.sub-heading
  margin-bottom 20px
  letter-spacing 3px
  &:before, &:after
    content: '-'
    display inline-block
</style>
