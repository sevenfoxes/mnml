import { GraphQLSchema } from "graphql";
import { query } from './query'
import * as ship from './ship'
import * as faction from './faction'
import * as node from './node'


export const schema = new GraphQLSchema({
  query,
  ...node,
  ...faction,
  ...ship
})
