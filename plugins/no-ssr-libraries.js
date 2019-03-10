import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import eruda from 'eruda'

/**
 * polyfill
 */
// @see https://github.com/w3c/IntersectionObserver#readme
import 'intersection-observer'

/**
 * eruda
 */
if (process.env.NODE_ENV === 'development') {
  eruda.init()
}

/**
 * vue carousel
 */
Vue.use(VueCarousel)
