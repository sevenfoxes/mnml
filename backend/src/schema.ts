import { GraphQLSchema } from "graphql";
import { query } from './query'
import * as ship from './ship'
import * as faction from './faction'

export const schema = new GraphQLSchema({
  query,
  ...faction,
  ...ship
})
