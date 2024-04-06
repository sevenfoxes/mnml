import styled from "@emotion/styled";
import { FC, ReactNode } from "react";
import { useDimensions } from "utils/hooks/useDimensions";
import { InfiniteScroll } from "./InfiniteScroll";
import { Loading } from "primitives/Loading";

interface ListProps {
  id?: string;
  title: string;
  showTitle?: boolean;
  tools?: ReactNode;
  children?: any;
  className?: string;
  onListEnd?: (e) => void;
  isLoading?: boolean;
  isError?: boolean;
}

const Root = styled('div')({
  height: '100%',
  overflow: 'hidden',
  label: 'PrimitiveList'
})

const Header = styled('div')({
  padding: '14px 0 14px 15px',
  background: 'var(--blue-extra-light)',
  display: 'grid',
  gap: 6,
  gridAutoFlow: 'column',
  gridTemplateColumns: 'auto auto 1fr min-content',
  justifyContent: 'start',
  alignItems: 'center',
  fontSize: 12,
  label: 'PrimitiveListHeader'
})

const Title = styled('div')({
  display: 'block',
  margin: 0,
  label: 'PrimitiveListTitle'
})

export const List: FC<ListProps> = (props) => {
  const { children, id = 'default', className, title, isLoading, isError = false, tools, onListEnd, showTitle = true } = props;
  const { ref, state } = useDimensions('listHeader');

  return (
    <Root data-testid={`list-${id}`} className={className} >
      <Header ref={ref}>
        {showTitle && <Title>{title}</Title>}
        {tools}
      </Header>
      <InfiniteScroll height={`calc(100% - ${state.height}px)`} id={'listScroll'} onListEnd={onListEnd} as={'ul'}>
        {!isError && (<div style={{ position: isLoading && 'absolute', top: 0, width: '100%' }}>
          {children}
        </div>)}
        {isError && (
          <div>
            Problem loading data <a href={'#'} onClick={window.location.reload}>try refreshing</a>
          </div>
        )}
        <Loading isLoading={isLoading} sx={{ position: 'sticky', background: 'rgba(255,255,255, .6)', top: '0', width: '100%', height: '100%' }} />
      </InfiniteScroll>
    </Root>
  );
}
