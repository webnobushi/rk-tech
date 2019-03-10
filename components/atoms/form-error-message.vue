<template lang="pug">
  TransitionShow(:show="show" name="slide-up" mode="visible")
    div.container
      p(v-for="message in messages").error {{ message }}

</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: false,
    }
  },

  computed: {
    show() {
      return this.messages.length > 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  min-height 25px
  p
    font-size 12px

</style>
