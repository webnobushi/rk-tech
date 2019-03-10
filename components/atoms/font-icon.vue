<docs>

</docs>

<template lang="pug">
  i(
    @click="$emit('click', $event)"
    :class="classes"
    :style="{ transform: `rotate(${rotate}deg)` }")

    span(v-if="hasText" class="text")
      slot
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      require: true,
    },

    // アイコンを回転アニメーションさせる
    isSpin: {
      type: Boolean,
      default: false,
    },

    isButton: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    rotate: {
      type: Number,
      default: 0,
    },

  },

  computed: {
    classes() {
      return [
        'icon',
        `icon-${this.icon}`,
        { 'is-button': this.isButton },
        { spin: this.isSpin },
        { 'gray': this.disabled },
      ]
    },

    hasText() {
      return !!this.$slots.default
    },
  },
}
</script>

<style lang="stylus" scoped>
.icon
  .text
    margin-left 5px

.is-button
  &:hover
    cursor pointer

</style>
