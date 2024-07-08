import { GraphQLObjectType, GraphQLString } from "graphql";
import { globalIdField } from "graphql-relay";
import { nDef } from '../node';

console.log({ nDef });
export const shipType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Ship',
  description: 'A ship in the Star Wars saga',
  // interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField(),
    name: {
      type: GraphQLString,
      description: 'The name of the ship.',
    },
  }),
});
