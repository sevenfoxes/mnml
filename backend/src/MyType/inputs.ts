import { inputObjectType, list } from "nexus";

export const myType_where = inputObjectType({
  name: 'myType_where',
  definition(t) {
    t.field("AND", { type: list("myType_where") })
    t.field("OR", { type: list("myType_where") })
    t.field("NOT", { type: list("myType_where") })
    // fields.map(f => t.field(f.name, { type: `${f.name}_where` } as any))
  },
})
