import styled from "@emotion/styled";
import { mdiCheckboxBlankCircle, mdiCheckboxBlankCircleOutline } from "@mdi/js";
import { Icon } from "primitives/Icon";
import { Label, LabelPostion } from "primitives/Label";
import { FC, useEffect } from "react"
import { useRecoilState } from "recoil";
import { radioState } from "./radioState";


export interface RadioProps {
  name?: string;
  id: string;
  size?: number;
  value: string | boolean;
  label: string;
  labelPosition?: LabelPostion;
  hideLabel?: boolean;
  className?: string;
  initial?: boolean;
  disabled?: boolean;
  onChange: (v: any, id: string) => void;
}

export const Text = styled('span')(({
  label: 'primitiveRadioText',
  whiteSpace: 'nowrap',
  display: 'block'
}))

const Input = styled('input')(({
  label: 'primitiveCheckboxInput',
  whiteSpace: 'nowrap',
  display: 'block',
  position: 'absolute',
  left: '-99rem',
  opacity: '0'
}))

const StyledIcon = styled(Icon)(() => {
  return {
    color: 'var(--blue)'
  }
});

export const StyledLabel = styled(Label)(({
  alignItems: 'center',
  display: 'flex',
  '&:not(:disabled)': {
    cursor: 'pointer'
  }
}))


export const Radio: FC<RadioProps> = (props) => {
  const { value, onChange, labelPosition = LabelPostion.before, hideLabel = false, disabled, name, id, className, label, initial, size = .8 } = props
  const [checked, setChecked] = useRecoilState(radioState(name))
  const isChecked = checked === value

  const handleChange = () => {
    !!onChange && onChange(value, id)
    setChecked(value)
  }

  useEffect(() => {
    if (initial) {
      handleChange()
    }
  }, [])

  return (
    <StyledLabel className={className} htmlFor={id}>
      {labelPosition === LabelPostion.before && !hideLabel && <Text>{label}</Text>}
      <Input onChange={handleChange} type="radio" id={id} name={name} checked={isChecked} disabled={disabled} />
      <StyledIcon path={isChecked ? mdiCheckboxBlankCircle : mdiCheckboxBlankCircleOutline} size={size} />
      {labelPosition === LabelPostion.after && !hideLabel && <Text>{label}</Text>}
    </StyledLabel>
  )
}
