import { FC } from "react"
import styled from "@emotion/styled";
import { } from "primitives/Input";
import { Label } from "primitives/Label";
import { CheckboxInputProps } from "primitives/Input/CheckboxInput";
import { AnyObject } from "yup/lib/types";
import { Position, Size } from "models/Stylable.model";
export interface ToggleProps extends CheckboxInputProps {

  onChange?: any;
}

const Root: any = styled(Label)(({ sx, size, position }: AnyObject) => {
  let fontSize = 11
  if (size === Size.medium) {
    fontSize = 12
  }

  if (size === Size.large) {
    fontSize = 13
  }

  return {
    fontSize,
    padding: '.5rem 1rem',
    display: 'grid',
    gridTemplateColumns: position === Position.before ? '1fr auto' : 'auto 1fr',
    gap: position === Position.before ? 8 : 16,
    position: 'relative',
    '&:not(:disabled)': {
      cursor: 'pointer'
    },
    ...sx
  }
})

const Input = styled('input')({
  label: 'primitiveToggleInput',
  whiteSpace: 'nowrap',
  display: 'block',
  position: 'absolute',
  left: '-99rem',
  opacity: '0'
})

const Tog = styled('div')(({ disabled }: any) => ({
  position: 'relative',
  opacity: disabled && .5,
  transform: 'translate(7px, -50%)'
}))

const Handle = styled('div')(({ checked, overhang, trackHeight }: any) => ({
  width: trackHeight + (2 * overhang),
  height: trackHeight + (2 * overhang),
  borderRadius: '50%',
  background: checked ? 'var(--blue)' : '#efefef',
  position: 'absolute',
  top: `-${overhang}px`,
  transform: checked ? `translate(-50%, calc(50% - ${overhang}px))` : `translate(0, calc(50% - ${overhang}px))`,
  left: !checked ? `-${overhang * 2}px` : trackHeight + (overhang * 3),
  transition: 'all .2s',
  boxShadow: `0px 1px ${overhang}px #0000007d, inset 0px 1px 1px #00000052`,
  border: `${overhang + 1}px solid #fff`
}))

const Track = styled('div')(({ trackHeight }: any) => ({
  width: trackHeight * 2,
  height: trackHeight,
  borderRadius: trackHeight / 2,
  background: '#ddd',
  top: '50%',
  transform: 'translate(0,50%)',
  boxShadow: 'inset 1px 1px 2px #00000069'
}))

export const Toggle: FC<ToggleProps> = (props) => {
  const { value, size = Size.medium, className, id, position = Position.above, hideLabel, label, disabled, checked, sx } = props
  let trackHeight = 16
  let overhang = 3


  if (size === Size.large) {
    trackHeight = 22
    overhang = 4
  }

  if (size === Size.small) {
    trackHeight = 13
    overhang = 2
  }

  const handleClick = (e) => {
    e.preventDefault()
    !!props.onChange && props.onChange(e)
  }

  if (value === null) return null

  return (
    <Root size={size} id={id} className={className} sx={sx?.label} position={position} text={label} hideText={hideLabel} onClick={handleClick}>
      <Tog disabled={disabled}>
        <Input type={'checkbox'} id={id} disabled={disabled} value={value} />
        <Track trackHeight={trackHeight} />
        <Handle overhang={overhang} trackHeight={trackHeight} checked={value} />
      </Tog>
    </Root>
  )
}
