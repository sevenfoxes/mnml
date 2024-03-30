import { Kind } from "graphql";
import { enumType, inputObjectType, intArg, interfaceType, objectType, scalarType } from "nexus";

const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc']
})

const AnyScalar = scalarType({
  name: 'Any',
  asNexusMethod: 'any',
  description: 'Any scalar',
  parseValue(value) {
    return value
  },
  serialize(value) {
    return value
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return Number(ast.value)
    }
    if (ast.kind === Kind.STRING) {
      return String(ast.value)
    }
    if (ast.kind === Kind.FLOAT) {
      return String(ast.value)
    }
    return null
  }
})

const Agg = interfaceType({
  definition(t) {
    t.field('_avg', { type: 'Any' })
    t.field('_count', { type: 'Any' })
    t.field('_sum', { type: 'Any' })
    t.field('_min', { type: 'Any' })
    t.field('_max', { type: 'Any' })
  },
})

const Aggregate = objectType({
  name: 'Aggregate',
  definition(t) {
    t.implements('Agg')
  },
})

const Where = inputObjectType({
  name: 'Aggregate',
  definition(t) {
    t.field('equals', { type: 'Any' })
    t.field('not', { type: 'Any' })
    t.field('in', { type: 'Any' })
    t.field('notIn', { type: 'Any' })
    t.field('lt', { type: 'Any' })
    t.field('gt', { type: 'Any' })
    t.field('gte', { type: 'Any' })
    t.field('contains', { type: 'Any' })
    t.field('startsWith', { type: 'Any' })
    t.field('endsWith', { type: 'Any' })
  }
})

export const pagingArgs = {
  skip: intArg(),
  take: intArg()
}

export default [
  Agg,
  Aggregate,
  SortOrder,
  AnyScalar,
  Where
]
