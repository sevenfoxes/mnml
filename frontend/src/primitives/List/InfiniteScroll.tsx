import styled from "@emotion/styled";
import { once } from "lodash/fp";
import { ElementType, FC } from "react";
import { useDimensions } from "utils/hooks/useDimensions";

interface InfiniteScrollProps {
  onListEnd?: (e) => void;
  children?: any;
  className?: string;
  id: string;
  as?: ElementType<any>;
  height?: string;
}

const Scroll = styled('div')(({ height }: Partial<InfiniteScrollProps>) => {
  return {
    display: 'block',
    margin: 0,
    padding: 0,
    overflowY: 'scroll',
    label: 'PrimitiveInfiniteList',
    height,
    position: 'relative',
    '::-webkit-scrollbar': {
      width: 3
    },
    '::-webkit-scrollbar-track': {
      background: '#eee'
    },
    '::-webkit-scrollbar-thumb': {
      background: '#aaa',
      borderRadius: 3,
    }
  }
})

export const InfiniteScroll: FC<InfiniteScrollProps> = (props) => {
  const { children, onListEnd, id, as, height } = props
  const { ref: scrollRef, state: content } = useDimensions(id);

  const handleEndOfList = once((e) => {
    onListEnd(e)
  })

  const handleScroll = (e) => {
    const current = scrollRef.current
    const amountScrolled = current?.scrollTop

    if ((amountScrolled + content.height) >= current?.scrollHeight && amountScrolled > 0) {
      handleEndOfList(e)
    }
  }

  return (
    <Scroll as={as} height={height || '100%'} onScroll={handleScroll} ref={scrollRef}>
      {children}
    </Scroll>
  )
}
