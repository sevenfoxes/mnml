import { flatten } from 'lodash/fp'
import { extendType } from 'nexus'
import { Context } from '../context'

import * as ins from './inputs'
import * as outs from './outputs'

const query = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field('myType', {
      type: 'myType',
      resolve: async (_parent, args, context: Context) => {
        return [{
          foo: 'foo',
          bar: 'bar'
        }]
      }
    })
  },
})

export const inputs = Object.values(ins)
export const outputs = Object.values(outs)

export default flatten([inputs, outputs, query] as any)
