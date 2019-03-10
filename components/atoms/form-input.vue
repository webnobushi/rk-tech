<template lang="pug">
  div.field
    label.label
      span {{ label }}
      span(v-show="required").error *

    div.control
      textarea(
        v-if="type === 'textarea'"
        :value="value"
        :disabled="disabled"
        @click="$emit('click')"
        @change="$emit('change', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        :rows="rows"
        :placeholder="placeholder").textarea

      input(
        v-else
        :name="name"
        :type="type"
        :value="value"
        :disabled="disabled"
        @click="$emit('click')"
        @change="$emit('change', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        ref="input"
        :placeholder="placeholder"
        ).input

      slot

</template>

<script>
import { allowProps as allow } from '@/assets/js/util'

export default {

  props: {
    type: {
      type: String,
      ...allow(['text', 'password', 'number', 'textarea', 'email']),
    },

    value: {
      type: [String, Number],
    },

    name: {
      type: String,
    },

    label: {
      type: String,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    placeholder: {
      type: String,
    },

    required: {
      type: Boolean,
      default: false,
    },

    invalid: {
      type: Boolean,
      default: false,
    },

    rows: {
      type: Number,
      default: 3,
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "../../assets/styl/variables.styl"

.input, .textarea
  transition all ease-in-out .15s
  &:focus,&:hover
    outline 0
    border-color $primary
    box-shadow none
  &:focus
    background-color lighten($gray, 35)

</style>
