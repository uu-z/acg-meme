import {get, save, drawText } from '../lib'
import {isUrl} from '../lib/helpers'
import path from 'path'
import Canvas from 'canvas'

const textInput = {
  bottom: '我已经看到结局了'
}

describe('get file', () => {
  it('should get with url file', async () => {
    const url = 'http://ofp6m7o9r.bkt.clouddn.com/media/upload_images/0uo4Wpdvc4.jpeg'
    let ctx = await get(url)
    ctx = drawText(ctx, 'bottom', '不知所措')
    save(ctx, `${process.cwd()}/example/url`)

  })
  it('should get with local file', async () => {
    const file = path.join(path.dirname(__dirname), 'example', 'basic', 'test.jpg')
    let ctx = await get(file)
    ctx = drawText(ctx, 'bottom', '我来教你认识一下生命的可贵~')
    save(ctx, `${process.cwd()}/example/basic`)
  })
})

describe('util test', () => {
  it('isUrl should return false when param is not url', () => {
    expect(isUrl('/Users/vai/GitHub/meme/examsple/basic/test.png')).toBeFalsy()
  })
  it('isUrl should return true when param is url', () => {
    expect(isUrl('http://www.bilibili.com')).toBeTruthy()
  })
})