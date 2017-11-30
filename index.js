const multihash = require('multihashes')
const crypto = require('crypto')
const isStream = require('is-stream')

const algoMap = {sha256: 'sha2-256'}

module.exports = (algo) => {
  let _algo = algoMap[algo] || algo
  return async value => {
    if (Buffer.isBuffer(value)) {
      let hash = crypto.createHash(algo).update(value).digest()
      let multi = multihash.encode(hash, _algo)
      return multihash.toB58String(multi)
    } else if (isStream(value)) {
      let _hasher = crypto.createHash(algo)
      value.on('data', chunk => {
        _hasher.update(chunk)
      })
      return new Promise((resolve, reject) => {
        value.on('error', reject)
        value.on('end', () => {
          let multi = multihash.encode(_hasher.digest(), _algo)
          resolve(multihash.toB58String(multi))
        })
      })
    } else {
      throw new Error('TypeError: must be buffer or stream')
    }
  }
}
