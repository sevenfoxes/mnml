import { FC } from "react"
import styled from "@emotion/styled";
import { buttonSize } from "primitives/Button/buttonSize"
import { CheckboxProps } from "primitives/Checkbox";
import { Label, LabelPostion } from "primitives/Label";

interface ToggleProps extends CheckboxProps {
  handleOnClick?: any;
}

const Root = styled(Label)(({
  fontSize: 12,
  padding: '.5rem 1rem',
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  position: 'relative',
  '&:not(:disabled)': {
    cursor: 'pointer'
  }
}))

const Text = styled('span')(({
  label: 'primitiveToggle',
  whiteSpace: 'nowrap',
  display: 'block'
}))

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
  transform: 'translate(-25%, -50%)'
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
  const { size = buttonSize.medium, className, onChange, id, labelPosition = LabelPostion.before, hideLabel, label, disabled, handleOnClick, checked } = props
  let trackHeight = 18
  let overhang = 4


  if (size === buttonSize.large) {
    trackHeight = 23
    overhang = 7
  }

  if (size === buttonSize.small) {
    trackHeight = 14
    overhang = 3
  }

  const handleChange = (v, id, e) => {
    const b = handleOnClick()
    if (typeof b === 'boolean') {
      !!onChange && onChange(b, id, e)
    }
  }


  return (
    <Root htmlFor={id} className={className}>
      {labelPosition === LabelPostion.before && !hideLabel && <Text>{label}</Text>}
      <Tog disabled={disabled}>
        <Input type={'checkbox'} id={id} onChange={(e) => handleChange(!checked, id, e)} checked={checked} disabled={disabled} />
        <Track trackHeight={trackHeight} />
        <Handle overhang={overhang} trackHeight={trackHeight} checked={checked} />
      </Tog>
      {labelPosition === LabelPostion.after && !hideLabel && <Text>{label}</Text>}
    </Root>
  )
}
