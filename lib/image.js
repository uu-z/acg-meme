/* @flow */

import fs from 'fs'
import Canvas from 'canvas'
import http from 'http'

import {ctx2d} from './context'
import {isUrl, parsePath, genUniqueString} from './helpers'

export const getAndRead = async (url: string): ?Object => {
  return new Promise((resolve, reject) => {
      http.get(url, (res) => {
      let data = ''
      res.setEncoding('binary')
      res.on('data', (chunk) => { data += chunk })
      res.on('end', () => {

       resolve(loadImage(data))
      })
    })
  })
}

const loadImage = (buf) => {
  const img = new Canvas.Image
  
  img.onload = () => {
  // console.log('onload')
  }
  img.onerror = (err) => {
  // console.log(err)
  }

  img.src = new Buffer(buf, 'binary')

  let ctx = ctx2d(img.width, img.height)
  ctx.drawImage(img, 0, 0, img.width, img.height)

  return ctx
}

const readFile = (filename: string): ?Object => {
// console.log('read file')
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (error, data) => {
      if(error) reject(error)

      resolve(loadImage(data))
    })
  })
}

export const get = async (path: any): any => {
// console.log('get url')
  const method = isUrl(path) ? getAndRead : readFile
  const ctx = await method(path)

  return ctx
}



export const save = (ctx: Object, path: string): void => {
  const {filename = genUniqueString('meme-') , dir = process.cwd()} = parsePath(path) || {}
// console.log(dir)
  if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  saveFromPath(ctx, `${dir}/${filename}.jpeg`)
}

export const saveFromPath = async (ctx: Object, path: string): * => {
// console.log('save from path')
  const out = fs.createWriteStream(path)
  const stream = ctx.canvas.createJPEGStream()

  stream.on('data', (chunk) => {
    out.write(chunk)
  }).on('end', () => {
    out.end()
  })
}