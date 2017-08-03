let hasher = require('../')
let test = require('tap').test

test('hasher: basic sha1', async t => {
  t.plan(1)
  let _hasher = hasher('sha1')
  let hash = await _hasher(Buffer.from('asdf'))
  t.same(hash, '5dreDuCVa7sH2pDn3tsbxeyhw5BXiB')
})

test('hasher: basic sha256', async t => {
  t.plan(1)
  let _hasher = hasher('sha256')
  let hash = await _hasher(Buffer.from('asdf'))
  t.same(hash, 'QmeYzshSoNHr2QUWqmkMAy6raRhcmzTuroy7johWJNn3fY')
})
