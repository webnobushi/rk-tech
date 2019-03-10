<template lang="pug">
  transition(@after-leave="$emit('after-leave')"
    :name="disabled ? '' : name")

    template(v-if="mode === 'generate'")
      template(v-if="show")
        slot

    template(v-if="mode === 'display'")
      div(v-show="show")
        slot

    div(
    v-if="mode === 'visible'"
    :class="[show ? 'visible' : 'hidden', name ]").visible-transition
      slot

</template>


<script>
import { allowProps as allow } from '@/assets/js/util/index'

export default {
  props: {
    name: {
      type: String,
      required: true,
      ...allow([
        '',
        'fade',
        'fade-thin',
        'slide-up',
        'slide-down',
        'slide-left',
        'slide-right',
        'slide-right-thin',
        'toast',
      ]),
    },

    show: {
      type: Boolean,
      default: false,
    },

    mode: {
      type: String,
      ...allow(['generate', 'display', 'visible'])
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>


<style lang="stylus">
// fade
.fade-enter-active, .fade-leave-active
  transition: all .5s ease

.fade-enter, .fade-leave-to
  opacity: 0

.fade-thin-enter-active
  transition: all .1s ease

.fade-thin-enter
  opacity: 0.5

.fade-thin-leave-active
  transition: all .1s ease

.fade-thin-leave-to
  opacity: 0.5


// slide-up
.slide-up-enter-active
  animation: slide-up .4s

.slide-up-leave-active
  animation: slide-up .4s reverse

// slide-down
.slide-down-enter-active
  animation: slide-down .3s

.slide-down-leave-active
  animation: slide-down .3s reverse

// slide-left
.slide-left-enter-active
  animation: slide-left .3s

.slide-left-leave-active
  animation: slide-left .3s reverse

// slide-right
.slide-right-enter-active
  animation: slide-right .3s

.slide-right-leave-active
  animation: slide-right .3s reverse

// slide-right-thin
.slide-right-thin-enter-active
  animation: slide-right-thin .3s

.slide-right-thin-leave-active
  animation: slide-right-thin .3s reverse

// toast
.toast-enter-active
  animation: toast-in-out 5s ease-out

.toast-leave-active
  animation: toast-in-out 5s reverse


@keyframes slide-up {
  0% {
    transform: translate(0, 2vh)
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes slide-down {
  0% {
    transform: translate(0, -2vh);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes slide-left {
  0% {
    transform: translate(-100vw, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes slide-right {
  0% {
    transform: translate(100vw, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes slide-right-thin {
  0% {
    transform: translate(20vw, 0);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

@keyframes toast-in-out {
  0% {
    transform: translate(100vw, 0);
  }
  20% {
    transform: translate(0, 0);
  }
  70% {
    transform: translate(0, 0);
  }
  80% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100vw, 0);
  }
}

.page-enter-active {
  transition: opacity .3s
}
.page-enter {
  opacity: 0.2
}

/* mode: visible */
.visible-transition
  transition: all .5s ease
  &.visible
    opacity: 1
  &.hidden
    opacity: 0

.slide-up
  &.visible
    transform: translateY(0px)
  &.hidden
    transform: translateY(10px)

.slide-down
  &.visible
    transform: translateY(0px)
  &.hidden
    transform: translateY(-50px)

.slide-left
  &.visible
    transform: translateX(0px)
  &.hidden
    transform: translateX(-10px)

.slide-right
  &.visible
    transform: translateX(0px)
  &.hidden
    transform: translateX(10px)

</style>
