import test from 'ava'
import middleware from 'index'
import camelizeKeys from 'camelizeKeys'

test('Test', t => {
  t.is(typeof middleware, 'function')
})

test('camelizeKeys', t => {
  const subject = { f_o_o: 1, bar: 2, Buz: 3, Qu_x: 4 }
  const expected = { fOO: 1, bar: 2, Buz: 3, QuX: 4 }
  t.deepEqual(camelizeKeys(subject), expected)
})
