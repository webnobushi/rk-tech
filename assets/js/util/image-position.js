export default function adjustPosition(originWidth, originHeight, baseX, baseY, currentWidth, currentHeight) {
  const originAspectRatioWH = originWidth / originHeight
  const originAspectRatioHW = originHeight / originWidth
  const currentAspectRatioWH = currentWidth / currentHeight
  const aspectDiff = originAspectRatioWH - currentAspectRatioWH
  const isZoomMode = aspectDiff < 0

  let positionX, positionY
  if (isZoomMode) {
    positionX = baseX
    positionY = currentPosition(originAspectRatioHW, currentHeight, currentWidth, baseY)
  } else {
    positionX = currentPosition(originAspectRatioWH, currentWidth, currentHeight, baseX)
    positionY = baseY
  }

  return [positionX, positionY]
}

function currentPosition(aspectRatio, target, another, base) {
  const currentMax = another * aspectRatio
  const diff = (currentMax - target) / 2
  const ret = (currentMax * base * 0.01) - diff
  return ret / target * 100
}
