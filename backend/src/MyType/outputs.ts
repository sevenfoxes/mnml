import { objectType } from "nexus"

export const myType = objectType({
  name: 'myType',
  definition(t) {
    t.field("foo", { type: 'String' })
    t.field("bar", { type: 'String' })
    // fields.map(f => t.field(f.name, { type: `${f.name}_where` } as any))
  },
})
