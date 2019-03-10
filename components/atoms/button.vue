<template lang="pug">
  button.button-normal(
    :class="[...styleClasses, { disabled }, { 'spinner': inProgress } ]"
    :disabled="disabled"
    @click.prevent.stop="click"
    @change="$emit('change')"
  )
    slot
</template>

<script>
import { styleProps } from '@/assets/js/util/index'
import { whenNot } from '@/assets/js/util/functions'


export default {
  mixins: [styleProps()],

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    inProgress: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    click($event) {
      whenNot(this.disabled, () => this.$emit('click', $event))
    },
  },
}
</script>


<style lang="stylus">
.button-normal
  position relative
  width 100%
  padding 10px 0
  border-style solid
  border-width 1px
  text-align center
  cursor: pointer
  transition all ease-in-out .2s
  letter-spacing 1px
  background-attachment fixed
  &:focus
    outline 0
  &.disabled
    cursor not-allowed

@keyframes spinner {
  to {transform: rotate(360deg);}
}

.spinner:before
  content ''
  opacity 0.5
  box-sizing border-box
  position absolute
  top 50%
  left 50%
  width 20px
  height 20px
  margin-top -10px
  margin-left -10px
  border-radius 50%
  border 2px solid #ccc
  border-top-color #333
  animation spinner .6s linear infinite

</style>
