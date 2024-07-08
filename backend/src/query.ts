import { GraphQLObjectType, GraphQLString } from "graphql";
import { factionType } from "./faction";
import { getEmpire, getRebels } from "./database";
import { nDef } from "./node";

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return ({
      rebels: {
        type: factionType,
        resolve: () => getRebels(),
      },
      empire: {
        type: factionType,
        resolve: () => getEmpire(),
      },
      node: nDef.nodeField,
    })
  },
});
