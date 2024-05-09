import styled from "@emotion/styled"
import {
  mdiCheckboxBlank,
  mdiCheckboxBlankCircle,
  mdiCheckboxBlankOutline,
  mdiCheckboxMarked,
  mdiCheckboxMarkedCircle,
  mdiCheckboxMarkedOutline,
  mdiRadioboxBlank,
  mdiRadioboxMarked
} from "@mdi/js"
import { Variants, Position, Size } from "models/Stylable.model"
import { FC, useState } from "react"

import { Label } from "primitives/Label"
import { Icon } from "primitives/Icon"
import { BooleanInputProps } from "./Input.model"

const Root: any = styled(Label)(({ theme, variant, sx, unstyle, disabled }: any) => {
  const t = theme.checkbox
  const u = unstyle ? t.styles.unstyled.root : t.styles[variant].root

  return {
    label: t.labels.root,
    ...u,
    cursor: disabled ? 'default' : 'pointer',
    ...sx
  }
})

export interface CheckboxInputProps extends BooleanInputProps {
  size?: Size;
  unstyle?: boolean;
}

export const CheckboxInput: FC<CheckboxInputProps> = (props) => {
  const {
    checked,
    disabled,
    handleErrors,
    hideLabel,
    label,
    required,
    size,
    sx,
    type = 'checkbox',
    unstyle,
    variant = Variants.default,
    position = Position.before,
    ...p
  } = props
  const [value, setValue] = useState(p.value || false)

  const handleClick = (e) => {
    if (!disabled) {
      setValue(!value)
      !!p?.onClick && p.onClick(e)
    }
  }

  const variants = {
    [Variants.default]: { on: mdiCheckboxMarkedOutline, off: mdiCheckboxBlankOutline },
    [Variants.filled]: { off: mdiCheckboxBlank, on: mdiCheckboxMarked },
    [Variants.outlined]: { off: mdiRadioboxBlank, on: mdiRadioboxMarked },
    [Variants.rounded]: { off: mdiCheckboxBlankCircle, on: mdiCheckboxMarkedCircle },
  }

  return (
    <Root
      unstyle={unstyle}
      variant={variant}
      position={Position}
      text={hideLabel || label}
      onClick={handleClick}
      disabled={disabled}
    >
      <Icon sx={{ opacity: disabled ? .5 : 1 }} path={value ? variants[variant].on : variants[variant].off}></Icon>
    </Root>
  )

}
