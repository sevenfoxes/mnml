import styled from "@emotion/styled";
import { FC, useEffect } from "react";
import { Input, InputProps } from "../Input/Input";
import { Field, FieldProps } from "primitives/Field";
import { useRecoilState } from "recoil";
import { fieldSelector, fieldTouchedState } from "./fieldState";

type NumberFieldProps = Omit<InputProps, 'value' | 'onChange'> & Omit<FieldProps<number>, 'children'> & {
  value?: number;
}

const StyledInput = styled(Input)({
  input: {
    textAlign: 'right',
    label: 'NumberField',
    background: 'var(--light)',
    padding: '.5rem .25rem'
  },
  label: {
    label: 'NumberFieldLabel',
    padding: 0,
    alignItems: 'center',
    textAlign: 'right',
    display: 'grid',
    gap: 3,
    gridTemplateColumns: 'min-content 55px'
  }
})

export const NumberField: FC<NumberFieldProps> = (props) => {
  const { className, label, disabled, id, required, schema = null, placeholder, password, value: initValue = null } = props
  const [{ value, error }, setField] = useRecoilState(fieldSelector(id))
  const [touched, setTouched] = useRecoilState(fieldTouchedState(id))
  const handleBlur = () => setTouched(true)

  const handleFieldUpdate = (e) => {
    setField({ value: Number(e.target.value) })
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
      showFieldIndicator={false}
    >
      <StyledInput
        as={'input'}
        className={className}
        disabled={disabled}
        required={required}
        onBlur={handleBlur}
        id={id}
        placeholder={placeholder}
        onChange={handleFieldUpdate}
        label={label}
        value={value}
        type={"number"}
        error={error}
        password={password}
        {...props}
      />
    </Field>
  );
}
