import { BigIntResolver } from "graphql-scalars";
import { asNexusMethod, makeSchema } from "nexus";
import myType from './MyType'

const BigInt = asNexusMethod(BigIntResolver, 'bigint')

export const schema = makeSchema({
  types: [
    BigInt,
    ...myType
  ]
})
