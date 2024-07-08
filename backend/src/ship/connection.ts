import { connectionDefinitions } from "graphql-relay";
import { shipType } from "./output";

export const shipConnection = connectionDefinitions({
  nodeType: shipType,
});
