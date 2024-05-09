import { curry } from "lodash/fp"

const l = (name: string, elementName: string, isPrimitive: boolean = true) => {
  const output = isPrimitive ? 'Primitive' : ''
  return `${output}${name}${elementName}`
}

export const labeler = curry(l)
