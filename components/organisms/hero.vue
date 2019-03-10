<template lang="pug">
  div(ref="hero").hero
    LayoutContainer
      Heading(level=1, color="theme").has-text-left RK-Tech

      Typing(
      :typings="heroDisplay"
      :style="{ top: `${top}%`, left: `${left}%` }").hero-text.white

      div.contact.columns
        div.column.is-4.is-offset-4.is-half-mobile.is-offset-one-quarter-mobile
          Button(
          @click="$emit('click')"
          color="white",
          border="white"
          hover="white").is-size-6-mobile CONTACT

      p.last-update.white.is-size-7-mobile last update {{ lastUpdate }}
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Typing from '@/components/molecules/typing'
import { bgImageOnLoad } from '@/assets/js/util/index'
import createResizeObserver from '@/assets/js/util/resize-observer'
import adjustPosition from '@/assets/js/util/image-position'
import { curry } from 'ramda'

export default {
  props: {
    lastUpdate: {
      type: String,
      default: ''
    }
  },

  components: {
    Typing,
  },

  data: () => ({
    top: 27,
    left: 43,
  }),

  computed: {
    ...mapState(['heroDisplay']),
  },

  async mounted() {
    await bgImageOnLoad(this.$refs.hero, '/images/hero.jpg')
    this.initHeroDisplay([
      'Frontend Engineer',
      ' ',
      'working as a freelance',
      '@Tokyo',
    ])
    this.initHeroText()
  },

  methods: {
    ...mapActions(['initHeroDisplay']),

    async initHeroText() {
      const calcImagePosition = curry(adjustPosition)(1920, 1280, this.left, this.top)

      this.resizeObserver = await createResizeObserver(({ currentWidth, currentHeight }) => {
        const [x, y] = calcImagePosition(currentWidth, currentHeight)
        this.top = y
        this.left = x
      }, { immediately: true })
    },
  },

  beforeDestroy() {
    this.resizeObserver.unsubscribe()
  }
}
</script>

<style lang="stylus" scoped>
.hero
  padding 5px 0
  height 100vh
  background-position center
  background-size cover
  background-repeat no-repeat
  margin-bottom 40px
  .heading
    display inline-block

.hero-text
  position absolute
  width 300px
  font-size 13px
  letter-spacing 3px
  word-break break-all
  transform skew(-27deg, 3deg) perspective(700px) rotateY(-26deg)

  @media screen and (max-width: 767px)
    font-size 10px

.contact
  position absolute
  width 100%
  bottom 15vh
  font-size 24px
  font-weight bold

.last-update
  position absolute
  bottom 0
  right 10px
</style>
