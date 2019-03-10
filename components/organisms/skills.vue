<docs>
  ヘッダーの横にヘルプマークを作って、それで凡例の説明を加える。ダイアログ表示。
</docs>

<template lang="pug">
  div
    no-ssr
      ul
        carousel(
        :scroll-per-page="true",
        :per-page-custom="[[320, 3],[768, 6]]")
          slide(v-for="skill in skills" :key="skill.name")
            LogoSkill.logo(
            :skill="skill"
            :is-selected="selected && skill.name === selected.name"
            @selected="clicked")

    LayoutContainer.columns.is-centered
      div.column.is-8.box.description
        div(v-if="selected")
          p: strong {{ selected.label }}
            span.labels
              FontIcon(icon="business", :disabled="!selected.carrier.business")
              FontIcon(icon="user", :disabled="!selected.carrier.private")
              FontIcon(icon="study", :disabled="!selected.carrier.study")

          p
            FontIcon(icon="history")
            span over {{ selected.carrier.value }} {{ selected.carrier.unit }}

          p.carrier-description(v-html="selected.description")

</template>

<script>
import LogoSkill from '@/components/molecules/logo-skill'

export default {

  props: {
    skills: {
      type: Array,
      default: [],
    }
  },

  components: {
    LogoSkill,
  },

  data: () => ({
    selected: null
  }),

  created() {
    this.selected = this.skills.length ? this.skills[0] : null
  },

  methods: {
    clicked(skillName) {
      this.selected = this.skills.find(skill => skill.name === skillName)
    }
  },
}
</script>

<style lang="stylus" scoped>
.description
  margin-top 20px
  min-height 200px

  .labels
    margin-left 10px
    *.icon
      margin-left 5px
      font-size 30px

  .carrier-description
    margin-top 15px
</style>
