# acg-meme

acg-meme is a meme image generator lib, build with node.js

## Installation
```js

$ yarn add acg-meme
```

## Usage

```js
import {get, drawText, save} from 'acg-meme'

let ctx = get(path: url | path)

ctx = drawText(ctx, 'top', 'topText')
ctx = drawText(ctx, 'bottom', 'bottomText')

save(ctx, ?path)

```


## Example

![preview]('./example/basic/basic.jpeg')
![preview]('./example/url/url.jpeg')