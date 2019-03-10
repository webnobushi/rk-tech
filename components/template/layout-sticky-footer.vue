<template lang="pug">
  div(
    :class="{ 'is-sticky' : isSticky }"
    :style="`height: ${slotContentsHeight}px`").sticky-footer
    div(ref="body").sticky-footer-body
      slot

</template>

<script>
import observer from '@/assets/js/util/intersection-observer'

export default {
  name: 'sticky-footer',

  data() {
    return {
      isSticky: false,
      slotContentsHeight: null,
    }
  },

  mounted() {
    this.slotContentsHeight = this.$el.offsetHeight

    this.observer = observer.createObserver(({ isIntersecting, intersectionRatio }) => {
      this.isSticky = intersectionRatio < 1
    })
    this.observer.observe(this.$el)
  },

  beforeDestroy() {
    this.observer.unobserve(this.$el)
  },
}


</script>


<style lang="stylus">
.sticky-footer
  width 100%
  &.is-sticky
   .sticky-footer-body
      position fixed
      width 100%
      bottom 0
      left 0
      margin-top 0
      z-index 1
      padding 5px 10px
</style>
