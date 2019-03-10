<template lang="pug">
  LayoutColumns(:items="projects")
    Project(slot-scope="slotProps" :project="slotProps.item")

</template>

<script>
import Project from '@/components/molecules/project'

export default {
  props: {
    projects: {
      type: Array,
      default: [],
    },
  },

  components: {
    Project,
  },
}
</script>
