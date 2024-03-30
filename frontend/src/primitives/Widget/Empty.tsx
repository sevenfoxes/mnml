import styled from "@emotion/styled"
import { FC } from "react"

const Root = styled('div')({
  textAlign: 'center',
  label: 'primitiveEmpty',
  padding: '.5rem 1rem',
  fontSize: 12
})


interface EmptyProps {
  children: any;
}

export const Empty: FC<EmptyProps> = (props) => {
  const { children } = props
  return (
    <Root data-testid={'empty'}>
      {children}
    </Root>
  )
}
