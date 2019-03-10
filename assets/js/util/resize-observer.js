import { fromEvent } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

let currentWidth, currentHeight
export default async function createResizeObserver(func, options) {
  currentWidth = window.innerWidth
  currentHeight = window.innerHeight

  if (options.immediately) {
    func(await resizeWidth())
  }

  return fromEvent(window, 'resize').pipe(
    debounceTime(50),
  ).subscribe(async () => {
    func(await resizeWidth())
  })
}


async function resizeWidth() {
  // 画面幅の変化をチェック
  const oldWidth = currentWidth
  const oldHeight = currentHeight

  // ios は resize 後に window width が変化するため少し待つ
  const isIos =
    navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')

  if (isIos) {
    await new Promise(resolve => setTimeout(resolve, 50))
  }

  currentWidth = window.innerWidth
  currentHeight = window.innerHeight

  return {
    changedWidth: currentWidth !== oldWidth,
    changedHeight: currentHeight !== oldHeight,
    currentWidth,
    oldWidth,
    currentHeight,
    oldHeight,
  }
}


