<template lang="pug">
  TransitionShow(
  name="fade"
  :show="show"
  :generate="false")
    Button(
    @click.prevent="scrollTop"
    class="button-scroll-top"
    bg="theme"
    color="white"
    border="none")
      FontIcon(icon="arrow-up")


</template>

<script>
import VueScrollTo from 'vue-scrollto'
import intersectionObserver from "@/assets/js/util/intersection-observer"
import { allowProps } from "@/assets/js/util";

export default {
  props: {
    scrollTopTarget: {
      type: String,
      default: '#__nuxt',
    },

    thresholdTarget: {
      type: String,
      default: '',
    },

    mode: {
      type: String,
      ...allowProps(['reached', 'over'])
    }
  },

  data: () => ({
    show: false,
  }),

  methods: {
    scrollTop() {
      VueScrollTo.scrollTo(this.scrollTopTarget, {
        easing: 'ease',
        duration: 700,
      })
    },
  },

  async mounted() {
    this.observer = intersectionObserver.createObserver(({ isIntersecting, boundingClientRect }) => {
      this.show = this.mode === 'reached'
        ? isIntersecting
        : window.pageYOffset > boundingClientRect.height

    })

    this.observer.observe(document.getElementById(this.thresholdTarget))
  },

  beforeDestroy() {
    this.observer.takeRecords()
  },
}
</script>

<style lang="stylus" scoped>
.button-scroll-top
  position fixed
  z-index 1
  bottom 20px
  right 10px
  width 35px
  height 35px
  display flex
  justify-content center
  align-items center
  padding 3px
  color white
  font-size 18px
  background-color rgba(0,0,0,0.8)
  cursor pointer

</style>
