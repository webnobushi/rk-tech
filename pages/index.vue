<template lang="pug">
  div
    Hero(
    id="hero"
    last-update='2019.10.1',
    @click="$router.push({ name: 'contact' })")

    LayoutContainer
      IntersectionShow(transition-name="slide-up")
        LayoutSection(id="skill")
          template(slot='heading') SKILL
          template(slot='subHeading') 保有スキル
          template(slot='contents')
            Skills(:skills="skills")

      IntersectionShow(transition-name="slide-left")
        LayoutSection(id="load" ref="load")
          template(slot='heading') LOAD
          template(slot='subHeading') 稼働状況
          template(slot='contents')
            Load(:load="load")


      IntersectionShow(transition-name="slide-right")
        LayoutSection(id="work" ref="work")
          template(slot='heading') WORK
          template(slot='subHeading') 過去実績
          template(slot='contents')
            Projects(:projects="projects.work")

      IntersectionShow(transition-name="slide-down")
        LayoutSection(id="private" ref="private")
          template(slot='heading') PRIVATE DEV
          template(slot='subHeading') 個人開発
          template(slot='contents')
            Projects(:projects="projects.private")

      IntersectionShow(transition-name="slide-up")
        LayoutSection(id="carrier" ref="carrier")
          template(slot='heading') CARRIER
          template(slot='subHeading') 経歴概要
          template(slot='contents')
            Carriers(:carriers="carriers")

    Footer(id="footer")

    ButtonScrollTop(threshold-target="footer" mode="reached")

</template>

<script>
import Hero from '@/components/organisms/hero'
import Dialog from '@/components/organisms/dialog'
import Footer from '@/components/organisms/footer'
import Skills from '@/components/organisms/skills'
import Load from '@/components/organisms/load'
import Projects from '@/components/organisms/projects'
import Carriers from '@/components/organisms/carriers'
import ButtonScrollTop from '@/components/molecules/button-scroll-top'

import skillsDomain from '@/assets/js/domain/skills'
import loadDomain from '@/assets/js/domain/load'
import projectsDomain from '@/assets/js/domain/projects'
import carrierDomain from '@/assets/js/domain/carriers'

import { groupBy, filter, has } from 'ramda'

export default {
  name: 'TOP',

  components: {
    Hero,
    Footer,
    Dialog,
    Skills,
    Load,
    Projects,
    Carriers,
    ButtonScrollTop,
  },

  async asyncData() {
    return {
      skills: await skillsDomain.index(),
      load: await loadDomain.index(),
      projects: groupBy(
        workOrPrivate,
        filter(has('isWork'), await projectsDomain.index())),
      carriers: await carrierDomain.index(),
    }
  },

  data: () => ({
    skills: [],
    load: [],
    projects: {
      work: [],
      private: [],
    },
    carriers: [],
  }),
}

function workOrPrivate(item) {
  return item.isWork ? 'work': 'private'
}

</script>
