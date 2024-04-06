import { useEffect, useState } from "react";
import { Input, InputProps } from "./Input";
import { useDebounce } from "utils/hooks/useDebounce";

export interface DebouncedInputProps extends InputProps {
  onChange: any;
  stateHandler?: any;
  regex?: RegExp;
}

export const DebouncedInput = (props: DebouncedInputProps) => {
  const [v, setV] = useState(props.value)

  useEffect(() => {
    setV(props.value)
  }, [props.value])

  const dispatch = useDebounce(700, () => {
    props.onChange(v)
  })

  const handleKeywordUpdate = (e) => {
    const value = e.target.value
    if (value.match(props.regex) || value === '') {
      setV(value)
      dispatch()

    }
  }

  return (<Input
    {...props}
    onChange={handleKeywordUpdate}
    value={v}
  />)
}
