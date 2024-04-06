import { Button } from "primitives/Button"
import { Field } from "./Field"
import { useRecoilState } from "recoil"
import { fieldSelector } from "./fieldState"
import { useEffect } from "react"

export const ButtonField = ({ schema, value, children, ...props }) => {
  const [field, setField] = useRecoilState(fieldSelector(props.id))

  useEffect(() => {
    if (typeof value === 'boolean') {
      setField({ value, valid: true })
    }

  }, [])

  const handleClick = (e) => {
    setField({ value: !field.value, touched: true })
  }

  return (
    <Field
      id={props.id}
      schema={schema || null}
      initValue={value}
      showFieldIndicator={false}
    >
      <Button onClick={handleClick} {...props}>
        {children}
      </Button>
    </Field>
  )
}
