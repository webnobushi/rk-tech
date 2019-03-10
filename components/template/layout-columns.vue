<docs>
  @see https://jp.vuejs.org/v2/guide/components-slots.html#スコープ付きスロット
</docs>

<template lang="pug">
  ul(
  :is="tagName"
  :class="[{ 'is-centered': isCentered }]").columns.is-multiline.is-variable.is-8
    li.column(
    v-for="(item, index) in items"
    :key="item.name || index"
    :class="[`is-${ 12 / columns }`]")

      slot(:item="item")

</template>

<script>
export default {
  props: {
    columns: {
      type: Number,
      default: 3,
    },

    items: {
      type: Array,
      default: [],
    },

    tagName: {
      type: String,
      default: 'ul'
    }
  },

  computed: {
    isCentered() {
      return this.items.length < this.columns
    }
  },
}
</script>
