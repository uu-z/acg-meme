/* @flow */


export const drawText = (ctx: Object, pos: string, text: String): Object => {
  const {canvas: {height, width}} = ctx
  const fontSize = computeFontSize(width, text.length)
  ctx.font = `bold ${fontSize}px Impact`
  ctx.textAlign = "center"
  ctx.fillStyle = '#fff'
  ctx.strokeStyle = '#000'
  ctx.lineWidth = 5

  let y 
  if(pos == "top") {
    y = fontSize + 15
  } else if(pos == "bottom") {
    y = height - (15 + fontSize )
  }

  ctx.strokeText(text, width/2, y)
  ctx.fillText(text, width/2, y)

  return ctx
}


const computeFontSize = (width: number, count: number): number => {
  return (width - 30) / count / 2
}