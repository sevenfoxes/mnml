import { MutableRefObject, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { Dimensions, dimensionSelector, dimensionState, windowDimensionSelector } from "./useDimensionState";
import { useDimensions } from "./useDimensions";

interface UseCollision {
  ref: any;
  state: Dimensions;
}

export const useCollision = (stateKey: string): UseCollision => {
  const ref = useRef(null)
  const [state, setState] = useRecoilState(dimensionSelector(`${stateKey}-collision`))

  useEffect(() => {
    const handleResize = () => {
      ref.current && setState(ref.current.getBoundingClientRect())
    }
    window.addEventListener('resize', handleResize)
    ref.current && handleResize()
  }, [ref, state])
  return { state, ref }
}
