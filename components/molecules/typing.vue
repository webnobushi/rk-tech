<template lang="pug">
  div.typing
    p(v-for="(text, index) in displayParagraphs" :key="index")
      template(v-for="char in text") {{ char }}
      span(v-show="index === currentIndex").cursor |

</template>

<script>
import { interval, animationFrameScheduler } from 'rxjs';
import { tap, map, takeWhile} from 'rxjs/operators';

export default {
  name: 'typing',

  props: {
    typings: {
      type: Array,
      required: true,
    },

    speed: {
      type: Number,
      default: 100,
    }
  },

  data:() => ({
    displayParagraphs: [],
    currentIndex: 0,
  }),

  computed: {
    paragraphs(){
      return this.typings.map(p => p.split(''))
    },
  },

  mounted() {
    this.type()
  },

  methods: {
    type() {
      if (this.paragraphs.length === 0) return

      this.init()

      interval(this.speed, animationFrameScheduler).pipe(
        map(this.popChar),
        tap(this.pushChar),
        takeWhile(this.isCompleted),
        tap(this.checkNextParagraph),
      ).subscribe()
    },

    init() {
      this.displayParagraphs = []
      this.currentIndex = 0
      Array.from({ length: this.paragraphs.length }, () => this.displayParagraphs.push([]))
    },

    popChar() {
      return this.paragraphs[this.currentIndex].shift()
    },

    pushChar(char) {
      this.displayParagraphs[this.currentIndex].push(char)
    },

    checkNextParagraph() {
      if (this.paragraphs[this.currentIndex].length === 0) {
        this.currentIndex++
      }
    },

    isCompleted() {
      return this.paragraphs[this.paragraphs.length  -1].length > 0
    },
  },
  watch: {
    typings() {
      this.type()
    }
  }
}

</script>

<style lang="stylus" scoped>
.cursor
  display inline
  animation flickerAnimation 1s infinite
  position relative
  top -2px

@keyframes flickerAnimation {
  0%   { opacity:1; }
  25%  { opacity:0; }
  50%  { opacity:0; }
  100% { opacity:1; }
}

p
  min-height 20px

</style>
