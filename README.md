# hasher

Simple hasher using multihash and async functions.

```javascript
let hasher = require('hasher')('sha256')
let hash = await hasher(Buffer.from('test')) // return hash as B58 string.
console.log(hash) // 'QmeYzshSoNHr2QUWqmkMAy6raRhcmzTuroy7johWJNn3fY'
```