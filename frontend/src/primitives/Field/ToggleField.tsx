import styled from "@emotion/styled";
import { FC, useEffect } from "react";
import { Field, FieldProps } from "primitives/Field";
import { useRecoilState } from "recoil";
import { fieldSelector, fieldTouchedState } from "./fieldState";
import { Toggle } from "primitives/Toggle";
import { Size } from "models/Stylable.model";
import { InputProps } from "primitives/Input/Input.model";

type ToggleFieldProps = Omit<InputProps, 'value' | 'onChange'> & Omit<FieldProps<any>, 'children'> & {
  value?: string;
  password?: boolean;
  size?: Size;
  checked?: boolean;
}

const StyledToggle = styled(Toggle)({
  paddingRight: '26px'
})

export const ToggleField: FC<ToggleFieldProps> = (props) => {
  const { className, label, disabled, id, checked, schema = null, value: initValue = null, size = Size.medium } = props
  const [{ value, error }, setField] = useRecoilState(fieldSelector(id))
  const [touched, setTouched] = useRecoilState(fieldTouchedState(id))


  const handleFieldUpdate = (e) => {
    setField({ value: e })
    !touched && setTouched(true)
  }

  useEffect(() => {
    initValue && setField({ value: initValue })
  }, [initValue])

  return (
    <Field
      id={id}
      schema={schema}
      initValue={initValue}
    >
      <StyledToggle
        size={size}
        className={className}
        id={id}
        onChange={handleFieldUpdate}
        label={label}
        value={value}
        disabled={disabled}
        checked={checked}
      />
    </Field>
  );
}
