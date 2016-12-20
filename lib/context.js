/* @flow */
import Canvas from 'canvas'

export const ctx2d = (w: number | string, h: number | string): Object => {
  const canvas = new Canvas(w, h)
  const ctx = canvas.getContext('2d')
  return ctx
}