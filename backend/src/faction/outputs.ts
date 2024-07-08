import { GraphQLObjectType, GraphQLString } from "graphql";
import { connectionArgs, connectionFromArray, globalIdField } from "graphql-relay";
import { shipConnection, getShip } from "../ship";
import { node } from "../node/node";

export const factionType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Faction',
  description: 'A faction in the Star Wars saga',
  interfaces: [node.nodeInterface],
  fields: () => ({
    id: globalIdField(),
    name: {
      type: GraphQLString,
      description: 'The name of the faction.',
    },
    ships: {
      type: shipConnection.connectionType,
      description: 'The ships used by the faction.',
      args: connectionArgs,
      resolve: (faction, args) =>
        connectionFromArray(faction.ships.map(getShip), args),
    },
  }),
});
