import test from 'ava'
import middleware from 'index'
import camelizeKeys from 'camelizeKeys'

[
  {
    subject: 'handled',
    meta: { camelize: true },
  },
  {
    subject: 'not handled',
  },
].forEach(({ subject, meta }) => {
  test(`middleware / ${subject}`, t => {
    const payload = { user_id: 1, user_name: 'sugarshin' }
    const expectedPayload = { userId: 1, userName: 'sugarshin' }
    const expected = { type: 'SOME_ACTION', payload: expectedPayload, meta }
    const mockedNext = () => expected
    const actual = middleware()(mockedNext)({ type: 'SOME_ACTION', payload, meta })
    t.deepEqual(expected, actual)
  })
})

test('helpers / camelizeKeys', t => {
  const subject = { f_o_o: 1, bar: 2, Buz: 3, Qu_x: 4 }
  const expected = { fOO: 1, bar: 2, Buz: 3, QuX: 4 }
  t.deepEqual(camelizeKeys(subject), expected)
})
