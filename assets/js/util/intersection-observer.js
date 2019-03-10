import { times,multiply, forEach, mergeDeepRight } from 'ramda'

const threshold = 0.1
const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: '0px',
  threshold: times(multiply(threshold), (1 / threshold) + 1)
}

export default {
  createObserver(handler, options = {}) {
    return new IntersectionObserver(
      forEach(handler),
      mergeDeepRight(DEFAULT_OPTIONS, options)
    )
  },

  observe(observer, targets) {
    forEach(target => observer.observe(target))(targets)
  },

  unobserve(observer) {
    forEach(target => observer.unobserve(target))(observer.takeRecords())
  }
}
