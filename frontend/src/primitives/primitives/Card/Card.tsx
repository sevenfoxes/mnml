import styled from "@emotion/styled"
import { Scroll } from "primitives/Scroll"
import { FC } from "react"

const Root: any = styled('div')(({ sx, maxHeight }: any) => ({
  // fontSize: 12,
  // background: 'var(--white)',
  // display: 'grid',
  // gridTemplateRows: '36px 1fr',
  borderRadius: 3,
  label: 'PrimitiveCard',
  ...sx
}))

const Header: any = styled('div')(({ hasTools }: any) => {
  return {
    padding: '.25rem .5rem',
    background: 'var(--blue)',
    gridAutoFlow: 'column',
    display: 'grid',
    gridTemplateColumns: hasTools ? '1fr auto' : '1fr',
    // alignItems: 'center',
    // gap: '.5rem',
    // fontSize: 12,
    // lineHeight: '22px',
    color: 'white',
    // background: 'var(--blue-light)',
    borderRadius: '5px 5px 0 0 ',
    label: 'PrimitiveCardHeader'
  }
})

const Content = styled(Scroll)(({ maxHeight }: any) => {
  return {
    label: 'PrimitiveCardContent',
    background: 'white',
    position: 'relative',
    padding: '.5rem',
    height: 'auto',
    borderRadius: '0 0 5px 5px'
  }
})

const Tools = styled('div')({

  label: 'PrimitiveCardTools',

})

interface CardProps {
  children: any;
  title: string;
  sx?: any;
  className?: string;
  tools?: any;
  onScrollEnd?: (a?: any) => void;
  id: string;
}

export const Card: FC<CardProps> = (props) => {
  const { title, children, className, sx, tools, id, onScrollEnd = () => null } = props
  return (
    <Root data-testid={`card-${id}`} className={className} sx={sx}>
      <Header data-testid={`card-header-${id}`} hasTools={!!tools}>
        {title}
        {tools && (
          <Tools data-testid={`card-tools-${id}`}>
            {tools}
          </Tools>
        )}
      </Header>
      <Content data-testid={`card-content-${id}`} onListEnd={onScrollEnd} id={id}>
        {children}
      </Content>
    </Root>
  )
}
