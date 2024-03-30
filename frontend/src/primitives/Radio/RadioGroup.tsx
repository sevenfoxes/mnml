import { FC } from "react"
import { Radio } from "./Radio";
import styled from "@emotion/styled";
import { Grid } from "primitives/Grid";

export interface RadioItem {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  radios: RadioItem[];
  orientation?: string;
  onChange?: any;
  disabled?: boolean;
  value?: string;
}

const Container = styled(Grid)(({ orientation }: any) => ({
  gridAutoFlow: orientation,
  label: 'primitiveRadioGroup'
}))

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { name, radios, orientation = 'column', onChange, disabled, value } = props
  return (
    <Container orientation={orientation} >
      {!!radios.length && radios.map((r, i) => <Radio onChange={onChange} key={i} name={name} {...r} value={value} id={`${name}${i}`} disabled={disabled} />)}
    </Container>
  )
}
