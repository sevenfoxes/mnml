import { GraphQLSchema } from "graphql";
import { BigIntResolver } from "graphql-scalars";
// import { asNexusMethod, makeSchema } from "nexus";
var { graphql, buildSchema } = require("graphql")
// import myType from './MyType'
import { query } from './query'
import * as ship from './ship'
import * as faction from './faction'
import * as node from './node'

// const BigInt = asNexusMethod(BigIntResolver, 'bigint')

// export const schema = makeSchema({
//   types: [
//     BigInt,
//     ...myType
//   ]
// })

export const schema = new GraphQLSchema({
  query,
  ...node,
  ...faction,
  ...ship
})
