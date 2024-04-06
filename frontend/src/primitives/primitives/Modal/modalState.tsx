import { atomFamily, selectorFamily } from "recoil";

export const modalState = atomFamily({
  key: 'modalState',
  default: false
})

export const modalSelector = selectorFamily({
  key: 'modalSelector',
  get: (key: string) => ({ get }) => get(modalState(key)),
  set: (key: string) => ({ set }, payload: boolean) => set(modalState(key), payload)
})
