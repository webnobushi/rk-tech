<template lang="pug">
  TransitionShow(
  :name="transitionName"
  :show="show"
  mode="visible")
    slot
</template>

<script>
import { when, gt, curry } from 'ramda'
import intersectionObserver from "@/assets/js/util/intersection-observer"
import { ifVal } from "@/assets/js/util/functions"
import { getDefaultSlot } from "@/assets/js/util"

export default {

  props: {
    transitionName: {
      type: String,
      default: 'fade',
    },

    showThreshold: {
      type: Number,
      default: 0.2,
    }
  },

  data:() => ({
    show: false,
  }),

  mounted() {
    const observer = intersectionObserver.createObserver(this.handler)
    const observe = curry(intersectionObserver.observe)(observer)
    this.observer = observer

    ifVal(getDefaultSlot(this.$slots), observe)
  },

  methods: {
    handler({ isIntersecting, intersectionRatio, target }) {
      when(gt(intersectionRatio), () => {
        this.show = true
        this.observer.unobserve(target)
      })(this.showThreshold)
    }
  },

  beforeDestroy() {
    intersectionObserver.unobserve(this.observer)
  }
}
</script>
