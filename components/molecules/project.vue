<template lang="pug">
  article
    div.card-image
      figure
        template(v-if="project.imageSrc")
          DeviceFrame(
          v-if="project.imageSrc.pc"
          :image-src="project.imageSrc.pc"
          device="pc")
          DeviceFrame(
          v-if="project.imageSrc.mobile"
          :image-src="project.imageSrc.mobile")


    div.card-content
      div.content
        div.heading.is-size-6: strong
          a(
          v-if="project.url"
          :href="project.url"
          target="_blank"
          ).external-link {{ project.label }}
            FontIcon(icon="external-link-square").is-size-6

          span(v-else) {{ project.label }}

        div.descriptions
          p
            FontIcon(icon="gear")
            | {{ project.skills | joinArray }}
          p
            FontIcon(icon="calendar")
            | {{ project.term }}

          p
            FontIcon(icon="tags")
            | {{ project.tags | joinArray }}

          p
            FontIcon(icon="comment")
            | {{ project.description }}

</template>

<script>
import DeviceFrame from '@/components/molecules/device-frame'

export default {
  props: {
    project: {
      type: Object,
      required: true,
    }
  },

  components: {
    DeviceFrame,
  },

  filters: {
    joinArray(array = []) {
      return array.join(', ')
    }
  },
}
</script>

<style lang="stylus" scoped>
article
  max-width 400px
  margin 0 auto

.card-image
  figure
    display flex
    align-items center
    justify-content center
    position relative
    height 120px
    width 100%
    .mobile
      position absolute
      height 100%
      left 5%
      bottom 0
    .pc
      height 100%
      position relative

.card-content
  padding 5px
  .heading
    text-align center
    letter-spacing 3px
    margin 0 0 10px

  .descriptions
    padding 0 10px
    i
      margin-right 5px
    p
      margin-bottom 7px

</style>
