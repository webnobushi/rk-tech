import * as R from 'ramda'
import { curry } from "ramda";

export function whenNot(bool, func) {
  R.when(
    R.not,
    func,
  )(bool)
}

export function ifVal(x, f) {
  return x == null ? null : f(x)
}

export function log(display, messages) {
  display(messages)
}

export function ifTrue(func) {
  return curry((func, result) => {
    if (result) {
      func()
    }
  })(func)
}

