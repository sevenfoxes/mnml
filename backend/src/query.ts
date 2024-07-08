import { GraphQLObjectType } from "graphql";
import { factionType, getEmpire, getRebels } from "./faction";
import { node } from "./node/node";

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return ({
      node: node.nodeField,
      rebels: {
        type: factionType,
        resolve: getRebels,
      },
      empire: {
        type: factionType,
        resolve: getEmpire,
      },
    })
  },
});
