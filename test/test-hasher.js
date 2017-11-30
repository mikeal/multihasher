const hasher = require('../')
const bl = require('bl')
const test = require('tap').test

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

test('hasher: stream', async t => {
  t.plan(1)
  let _hasher = hasher('sha256')
  let stream = bl()
  stream.end(Buffer.from('asdf'))
  let hash = await _hasher(stream)
  t.same(hash, 'QmeYzshSoNHr2QUWqmkMAy6raRhcmzTuroy7johWJNn3fY')
})

test('invalid type', async t => {
  t.plan(2)
  let _hasher = hasher('sha256')
  try {
    await _hasher('asdf')
  } catch (e) {
    t.type(e, 'Error')
    t.same(e.message, 'TypeError: must be buffer or stream')
  }
})
