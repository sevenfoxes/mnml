import { MutableRefObject, useEffect, useRef } from "react";

export const useOnClickOutside = <T extends HTMLElement>(handler: any, ref?: MutableRefObject<any>) => {
  const internalRef = useRef<T>(null)
  const r = !!ref ? ref : internalRef

  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!r.current || r.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [r, handler]
  );

  if (ref) return;
  return r
}
