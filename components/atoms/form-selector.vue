<template lang="pug">
  div.field
    label.label {{ label }}

    div.control
      div.select
        select(
          @change="$emit('input', $event.target.value)")
          option(
          v-for="option in options"
          :key="option.value"
          :value="option.value") {{ option.label }}

</template>

<script>
export default {

  props: {
    options: {
      type: Array,
      required: true,
    },

    value: {
      type: [String, Number],
    },

    label: {
      type: String,
    },
  },

  components: {

  },

  data:() => ({
  }),

  computed: {

  },

  methods: {
  },

  mounted() {

  },
}
</script>

<style lang="stylus" scoped>

</style>
