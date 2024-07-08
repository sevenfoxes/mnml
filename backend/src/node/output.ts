import { fromGlobalId, nodeDefinitions } from "graphql-relay";
import { nodeType } from "../node.model";
import { shipType } from "../ship";
import { getFaction, getShip } from "../database";
import { factionType } from "../faction";

const nd = nodeDefinitions(
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

export const nDef = nodeDefinitions(
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

