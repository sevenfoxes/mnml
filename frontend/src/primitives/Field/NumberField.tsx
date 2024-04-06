import styled from "@emotion/styled";
import { FC, useEffect } from "react";
import { Input, InputProps } from "../Input/Input";
import { Field, FieldProps } from "primitives/Field";
import { useRecoilState } from "recoil";
import { fieldSelector, fieldTouchedState } from "./fieldState";

type NumberFieldProps = Omit<InputProps, 'value' | 'onChange'> & Omit<FieldProps, 'children'> & {
  value?: number;
  password?: boolean;
  multiline?: boolean;
}

const StyledInput = styled(Input)({
  input: {
    textAlign: 'right',
    label: 'NumberField'
  },
  label: {
    label: 'NumberFieldLabel',
    padding: '.5rem 1rem',
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: '1fr auto'
  }
})

export const NumberField: FC<NumberFieldProps> = (props) => {
  const { className, label, disabled, id, required, showFieldIndicator, schema = null, placeholder, password, value: initValue = null, hideLabel, multiline } = props
  const [{ value, error }, setField] = useRecoilState(fieldSelector(id))
  const [touched, setTouched] = useRecoilState(fieldTouchedState(id))


  const handleBlur = () => setTouched(true)

  const handleFieldUpdate = (e) => {
    setField({ value: e.target.value })
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
      showFieldIndicator={showFieldIndicator}
    >
      <StyledInput
        as={multiline ? 'textarea' : 'input'}
        className={className}
        disabled={disabled}
        required={required}
        onBlur={handleBlur}
        id={id}
        placeholder={placeholder}
        onChange={handleFieldUpdate}
        label={label}
        value={value}
        type={password ? "password" : "text"}
        error={error}
        password={password}
        hideLabel={hideLabel}
      />
    </Field>
  );
}
