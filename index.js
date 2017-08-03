const multihash = require('multihashes')
const crypto = require('crypto')

const algoMap = {sha256: 'sha2-256'}

module.exports = (algo) => {
  return async buffer => {
    let hash = crypto.createHash(algo).update(buffer).digest()
    let multi = multihash.encode(hash, algoMap[algo] || algo)
    return multihash.toB58String(multi)
  }
}
