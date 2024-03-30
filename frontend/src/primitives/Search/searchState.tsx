import { atomFamily } from "recoil";

export const searchState = atomFamily({
  key: 'searchState',
  default: ''
})
