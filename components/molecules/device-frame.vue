<template lang="pug">
  img(
  :src="frameImageSrc"
  :style="{ 'background-image': `url('${this.imageSrc}')` }"
  :class="[device]").frame

</template>

<script>
import { allowProps as allow } from '@/assets/js/util'

export default {

  props: {
    imageSrc: {
      type: String,
      required: true,
    },

    device: {
      type: String,
      ...allow(['mobile', 'pc'])
    }
  },

  computed: {
    frameImageSrc() {
      return this.device === 'mobile' ? '/images/projects/mobile-frame.png' : '/images/projects/pc-frame.png'
    },
  },
}
</script>

<style lang="stylus" scoped>
.frame
  &.mobile
    background-size 78%
    background-position center
  &.pc
    background-size 80%
    background-position center 40%

</style>
