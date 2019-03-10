<template lang="pug">
  div.logo-skill(
    @click="selected"
    @touchstart="selected"
    @mouseenter="selected"
  )
    img(
    :src="skill.imageSrc"
    :class="classes"
    ).image.fit-contain

</template>

<script>
export default {

  props: {
    skill: {
      type: Object,
      required: true,
    },

    isSelected: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    classes() {
      return [
          this.isSelected ? 'is-96x96' : 'is-48x48',
          { 'disabled': !this.isSelected },
        ]
    }
  },

  methods: {
    selected() {
      this.$emit('selected', this.skill.name)
    },
  }
}
</script>

<style lang="stylus" scoped>
.logo-skill
  width 96px
  height 96px
  margin 0 auto
  display flex
  align-items center

  img
    transition all .3s
    margin 0 auto
    &.disabled
      opacity 0.7


</style>
