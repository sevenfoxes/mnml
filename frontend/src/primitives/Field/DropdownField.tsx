import { FC, useEffect } from "react"
import { Dropdown, DropdownItem, DropdownProps } from "../Dropdown/Dropdown"
import styled from "@emotion/styled"
import { Field, FieldProps, fieldSelector, fieldTouchedState } from "primitives/Field"
import { useRecoilState, useSetRecoilState } from "recoil"
import { SerializedStyles } from "@emotion/react"

const Root = styled(Dropdown)(({ sx }: any) => ({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  padding: '.5rem 1rem',
  label: 'DropdownField',
  ...sx
}))

type FormDropdownProps = Omit<DropdownProps, 'value' | 'onClick'> & Omit<FieldProps, 'children'> & {
  required?: boolean;
  value?: string;
  sx?: SerializedStyles;
}

export const DropdownField: FC<FormDropdownProps> = (props) => {
  const { id, required = false, schema, value: initValue, showFieldIndicator } = props
  const [field, setValue] = useRecoilState(fieldSelector(id))
  const setTouched = useSetRecoilState(fieldTouchedState(id))

  const handleFieldUpdate = (e, v: DropdownItem) => {
    setValue({ value: v.value, valid: true })
  }
  const handleBlur = () => setTouched(true)

  useEffect(() => {
    initValue && setValue({ value: initValue })
  }, [initValue])

  return (
    <Field
      id={id}
      schema={schema}
      showFieldIndicator={showFieldIndicator}
    >
      <Root
        {...props}
        onClick={handleFieldUpdate}
        onBlur={handleBlur}
        value={field.value}
        required={required}
      />
    </Field>
  )

}
