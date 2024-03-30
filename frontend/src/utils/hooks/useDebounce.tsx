import { debounce } from 'lodash/fp';
import { useEffect, useMemo, useRef } from 'react'

export const useDebounce = (delay, callback: () => void) => {
  const ref = useRef<any>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(delay)(func);
  }, []);

  return debouncedCallback;
};
