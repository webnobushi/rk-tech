import * as R from 'ramda'

export function allowProps(whiteList) {
  const validate = R.curry(allow)(whiteList)
  const errorMessage = R.curry(buildErrorMessage)(whiteList)
  const validateHandler = R.curry(logErrorHandler)(console.log, errorMessage)

  return {
    validator: R.pipe(
        validate,
        validateHandler,
      ),

    // 先頭の要素をデフォルト値とする
    default: whiteList[0],
  }
}

/**
 *
 * @param whiteList [*]
 * @param value *
 *
 * @returns {[boolean, *]}
 */
function allow(whiteList, value) {
  return R.pair(whiteList.includes(value), value)
}

function buildErrorMessage(whiteList, value) {
  return `given value "${value}" is invalid. allow list -> ${whiteList}`
}

function logErrorHandler(logger, errorMessage, validationResult) {
  const [valid, targetValue] = validationResult

  if (!valid) logger(errorMessage(targetValue))

  return valid
}

// @see assets/styl/global.styl
export function styleProps(colorSet = ['', 'white', 'gray', 'black', 'theme', 'none']) {
  return {
    props: {
      size: {
        type: String,
        ...allowProps(['', 'x-small', 'small', 'large']),
      },

      color: {
        type: String,
        ...allowProps(colorSet),
      },

      bg: {
        type: String,
        ...allowProps(colorSet),
      },

      border: {
        type: String,
        ...allowProps(colorSet),
      },

      hover: {
        type: String,
        ...allowProps([...colorSet, 'lighten', 'darken']),
      },
    },

    computed: {
      styleClasses() {
        return [
          this.size,
          `bg-${this.bg}`,
          this.color,
          this.border ? `border-${this.border}` : '',
          this.hover ? `hover-${this.hover}` : '',
        ]
      }
    }
  }
}

export function getDefaultSlot($slots) {
  return R.ifElse(
    R.prop('length'),
    R.map(R.prop('elm')),
    R.always(null),
  )($slots.default)
}

export function sleep(timeMills) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, timeMills)
  })
}

export function bgImageOnLoad(targetElement, imageSrc) {
  return new Promise(resolve => {
    const bgImg = new Image()

    bgImg.onload = function () {
      targetElement.style.backgroundImage = 'url(' + bgImg.src + ')'
      resolve(true)
    }

    bgImg.src = imageSrc
  })
}
