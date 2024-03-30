import { atomFamily, selectorFamily } from "recoil";

export interface AlertState {
  title: string;
  buttonText?: string;
  msg: string;
  open?: boolean;
}

export const alertState = atomFamily({
  key: 'alertState',
  default: {
    title: 'alert',
    msg: 'this is an alert',
    open: false
  } as AlertState
})

export const alertSelector = selectorFamily({
  key: 'alertSelector',
  get: (key: string) => ({ get }): Partial<AlertState> => get(alertState(key)),
  set: (key: string) =>
    ({ set }, payload: Partial<AlertState>) => set(alertState(key), (p) => ({ ...p, ...payload }))
})
