<template lang="pug">
  TransitionShow.dialog(
    name="fade"
    :show="show"
    mode="display")
    
    div(
      :class="['frame', { isBlackout }]"
      @click="backDrop"
      ref="frame")
      
      TransitionShow(name="fade" :show="show")
        div(
          :style="{ width }"
          ref="dialogRoot").dialog-root
          LayoutContainer(
            :class="['body', { enableScroll }]"
            ref="body"
            body-scroll-lock-ignore)
            slot(name="body")

            FontIcon(
              v-if="hasCloseButton"
              icon="close"
              :is-button="true"
              @click.prevent="closeDialog").close-button

            div(v-if="!!$slots.footer" class="dialog-footer")
              slot(name="footer")

</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },

    enableBackdrop: {
      type: Boolean,
      default: true,
    },

    withLockScroll: {
      type: Boolean,
      default: true,
    },

    withBlackout: {
      type: Boolean,
      default: true,
    },

    enableScroll: {
      type: Boolean,
      default: true,
    },

    width: {
      type: String,
    },

    hasCloseButton: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    isBlackout() {
      if (!this.withBlackout) {
        return false
      }

      return this.show
    },
  },

  created() {
    if (this.withLockScroll) {
      this.$watch('show',async newValue => {
        if (newValue) {
          // body 要素の生成を待つ
          await this.$nextTick()
          
          this.$refs.body.scrollTop = 0
          lockScroll()
        } else {
          unlockScroll()
        }
      })
    }
  },

  methods: {
    closeDialog() {
      this.$emit('update:show', false)
      this.$emit('close')
    },

    backDrop(event) {
      const background = [
        this.$refs.body,
        this.$refs.frame,
        this.$refs.dialogRoot,
      ]

      if (this.enableBackdrop) {
        if (background.includes(event.target)) {
          this.closeDialog()
        }
      }
    },
  },

  beforeDestroy() {
    unlockScroll()
  },
}

export function lockScroll() {
  document.getElementsByTagName('html')[0].style.overflow = 'hidden'
  document.getElementsByTagName('body')[0].style.overflow = 'hidden'
}

export function unlockScroll() {
  document.getElementsByTagName('html')[0].style.overflow = null
  document.getElementsByTagName('body')[0].style.overflow = null
}

</script>


<style lang="stylus" scoped>
@import "../../assets/styl/variables.styl"

.dialog
  position fixed
  width 100%
  height 100%
  z-index 1

  .frame
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    transition all .3s
    display flex
    align-items center
    justify-content center

    &.isBlackout
      background-color rgba(0, 0, 0, 0.7)

  .dialog-root
    position relative
    background-color $white

  .body
    &.enableScroll
      overflow scroll
    padding 10px

  .dialog-footer
    margin-top 30px

  .close-button
    position absolute
    top 5px
    right 5px
</style>
