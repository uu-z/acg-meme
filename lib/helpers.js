import {resolve} from 'path'

export const parsePath = (path: string): ?Object => {
  if(!path) {
    return 
  }
  
  const paths = path.split('/')

  if(paths.length > 1){
    return {
      filename: paths[paths.length - 1],
      dir: paths.slice(0, path.length -1).join('/')
    }
  } else if (paths.length == 1) {
    return {
      filename: paths[0]
    }
  }
}

export const genUniqueString = (salt: string): string => `${salt}${Math.random().toString(36).substr(2, 10)}`

export const isUrl = (str: string): boolean => new RegExp('^http(s|)://').test(str)