import styled from "@emotion/styled"
import { fieldState } from "primitives/Field"
import { Select } from "primitives/Select";
import { FC } from "react";
import { useRecoilState } from "recoil"

const StyledSelect = styled(Select)(() => ({
  label: 'SelectField',
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  padding: '8px 18px',
  borderBottom: '1px solid var(--light)',

  select: {
    justifySelf: 'end',
    textAlign: 'right',
    paddingRight: 0,
  }

}));


interface FieldProps {
  disabled?: boolean;
  label: string;
  id: string;
  children: any;
}

export const SelectField: FC<FieldProps> = (props) => {
  const [value, setValue] = useRecoilState(fieldState(props.id))
  const handleFieldUpdate = (e) => {
    setValue(e.target.value)
  }
  return <StyledSelect {...props} onChange={handleFieldUpdate} value={value}>
    {props.children}
  </StyledSelect>
}
