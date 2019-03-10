<docs>
  ヘッダテキストスタイル
</docs>

<template lang="pug">
  div.heading(:is="is" :class="[`level-${level}`, ...styleClasses]")
    slot

</template>
<script>
import { allowProps as allow, styleProps } from '@/assets/js/util/index'

export default {
  name: 'heading',

  mixins:[styleProps()],

  props: {
    level: {
      require: true,
      ...allow([1, 2, 3, '1', '2', '3']),
    },

    tagName: {
      type: String,
    },
  },

  computed: {
    is() {
      return this.tagName || `h${this.level || 1}`
    },
  },

}
</script>


<style lang="stylus" scoped>
.heading
  &.level-1
    font-size 28px
    margin-bottom 28px
    font-weight bold

  &.level-2
    font-size 24px
    margin-bottom 24px
  &.level-3
    font-size 20px
    margin-bottom 20px

</style>
