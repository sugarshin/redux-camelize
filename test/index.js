import test from 'ava'
import middleware, { camelizeKeys } from 'index'

test('main is function', t => {
  t.is(typeof middleware, 'function')
})

test('camelizeKeys is function', t => {
  t.is(typeof camelizeKeys, 'function')
})

;[
  {
    subject: 'handled',
    meta: { camelize: true },
    expected: { userId: 1, userName: 'sugarshin' },
  },
  {
    subject: 'not handled / `camelize` meta property not defined',
    meta: {},
    expected: { user_id: 1, user_name: 'sugarshin' },
  },
  {
    subject: 'not handled / `meta` not defined',
    expected: { user_id: 1, user_name: 'sugarshin' },
  },
  {
    subject: 'not handled / emit error',
    meta: { camelize: true },
    error: true,
    expected: { user_id: 1, user_name: 'sugarshin' },
  },
  {
    subject: 'handled / emit error, but ignoreOnError: false',
    option: { ignoreOnError: false },
    meta: { camelize: true },
    error: true,
    expected: { userId: 1, userName: 'sugarshin' },
  },
].forEach(({ subject, meta, expected, option, error }) => {
  const payload = { user_id: 1, user_name: 'sugarshin' }
  const mockedNext = a => a
  test(`middleware / ${subject}`, t => {
    const nextACtion = { type: 'SOME_ACTION', payload: expected, meta, error }
    const actual = middleware(option)()(mockedNext)({ type: 'SOME_ACTION', payload, meta, error })
    t.deepEqual(nextACtion, actual)
  })
})

test('helpers / camelizeKeys', t => {
  const subject = { f_o_o: 1, bar: 2, Buz: 3, Qu_x: 4 }
  const expected = { fOO: 1, bar: 2, Buz: 3, QuX: 4 }
  t.deepEqual(camelizeKeys(subject), expected)
  t.deepEqual(subject, { f_o_o: 1, bar: 2, Buz: 3, Qu_x: 4 })
})
