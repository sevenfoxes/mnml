import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { Dimensions, dimensionSelector, edgeDimensionSelector, windowDimensionSelector } from "./useDimensionState";

interface UseDimensions {
  ref: any;
  state: Dimensions;
}

export const useDimensions = (stateKey: string, detectEdges?: boolean): UseDimensions => {
  const ref = useRef(null)
  const s = detectEdges ? edgeDimensionSelector : dimensionSelector
  const [state, setState] = useRecoilState(s(stateKey));

  const [windowState, setWindowState] = useRecoilState(windowDimensionSelector)
  useEffect(() => {
    const handleResize = () => {
      setWindowState({ height: window.innerHeight, width: window.innerWidth })
      ref.current && setState(ref.current.getBoundingClientRect())
    }
    window.addEventListener('resize', handleResize)

    ref.current && handleResize();
  }, [ref.current?.scrollHeight, window.innerHeight])

  return { ref, state }
}
