import { atomFamily } from "recoil";

export const offsetState = atomFamily({
  key: 'offsetState',
  default: 0
})

export const pageSizeState = atomFamily({
  key: 'pageSizeState',
  default: 25
})
