import { fromGlobalId, nodeDefinitions } from "graphql-relay";
import { nodeType } from "./node.model";
import { factionType, getFaction } from "../faction";
import { getShip, shipType } from "../ship";

export const node = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId)
    switch (type as nodeType) {
      case nodeType.faction:
        return getFaction(id);
      case nodeType.ship:
        return getShip(id);
    }
  },
  (obj) => (obj.ships ? factionType.name : shipType.name),
)
