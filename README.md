# hasher

Simple hasher using multihash and async functions.

```javascript
let hasher = require('hasher')('sha256')
let hash = await hasher(Buffer.from('test'))
console.log(hash)
```