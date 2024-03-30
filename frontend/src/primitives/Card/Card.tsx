import styled from "@emotion/styled"
import { Scroll } from "primitives/Scroll"
import { FC } from "react"

const Root: any = styled('div')(({ sx, maxHeight }: any) => ({
  fontSize: 12,
  background: 'var(--white)',
  display: 'grid',
  gridTemplateRows: '36px 1fr',
  label: 'PrimitiveCard',
  ...sx
}))

const Header: any = styled('div')(({ hasTools }: any) => {
  return {
    padding: '0 .5rem',
    background: 'var(--blue-extra-light)',
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: hasTools ? '1fr auto' : '1fr',
    alignItems: 'center',
    gap: '.5rem',
    fontSize: 12,
    lineHeight: '22px',
    label: 'PrimitiveCardHeader'
  }
})

const Content = styled(Scroll)(({ maxHeight }: any) => {
  return {
    label: 'PrimitiveCardContent',
    maxHeight: maxHeight || '100vh',
    position: 'relative'
  }
})

const Tools = styled('div')({
  label: 'PrimitiveCardTools',

})

interface CardProps {
  children: any;
  title: string;
  sx: any;
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
