import { atom, atomFamily, selector, selectorFamily } from "recoil";

export interface Dimensions {
  x?: number;
  y?: number;
  height: number;
  width: number;
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
}

export const dimensionState = atomFamily({
  key: 'dimensionState',
  default: {} as Dimensions
})

export const windowDimensionState = atom({
  key: 'windowDimensionState',
  default: {} as Dimensions
})

export const dimensionSelector = selectorFamily({
  key: 'dimensionSelector',
  get: (k: string) => ({ get }): Dimensions => {
    const state = get(dimensionState(k))
    return {
      top: state.top,
      left: state.left,
      right: state.right,
      bottom: state.bottom,
      x: state.x,
      y: state.y,
      height: Math.ceil(state.height),
      width: Math.ceil(state.width),
    }
  },
  set: (k) => ({ set }, rect) => {
    return set(dimensionState(k), rect)
  }
})

export const edgeDimensionSelector = selectorFamily({
  key: 'edgeDimensionSelector',
  get: (k: string) => ({ get }): any => {
    const winState = get(windowDimensionSelector)
    const triggerState = get(dimensionState(k))
    const popupState = get(dimensionState(`${k}-dd`))

    const safezone = 20 // space between edge
    const safeRender = safezone / 2 // space between trigger

    const initY = triggerState?.y + triggerState?.height + safeRender
    const initX = triggerState?.x
    const h = initY + popupState.height
    const w = initX + popupState.width
    const tooWide = w > winState.width
    const tooTall = h > winState.height

    const yOffset = tooTall ? h - winState.height + safezone : 0

    const x = () => {
      if (!yOffset && !tooWide) return initX
      if (!yOffset && tooWide) return initX - safezone - Math.abs(winState.width - w)
      if (!tooWide) return initX + triggerState?.width + safeRender
      if (tooWide) return initX - popupState.width - safeRender
    }

    return {
      x: x(),
      y: initY - yOffset
    }
  },
  set: (k) => ({ set }, rect) => {
    return set(dimensionState(k), rect)
  }
})

export const windowDimensionSelector = selector({
  key: 'windowDimensionSelector',
  get: ({ get }): Dimensions => {
    return get(windowDimensionState)
  },
  set: ({ set }, rect) => set(windowDimensionState, rect)
})
