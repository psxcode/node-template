import test from 'tape'
import { id } from '../src'

test('test', (t) => {
  t.equals(
    id(2),
    2,
    'should be equal'
  )

  t.end()
})
