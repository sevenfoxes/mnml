import styled from "@emotion/styled";
import { once } from "lodash/fp";
import { FC } from "react";
import { useDimensions } from "utils/hooks/useDimensions";

interface ScrollProps {
  children: any;
  className?: string;
  id: string;
  onListEnd?: (a?: any) => void;
}

const Root = styled('div')(() => {
  return {
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
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

export const Scroll: FC<ScrollProps> = ({ children, onListEnd = () => null, className, id, ...p }) => {
  const { ref: scrollRef, state: content } = useDimensions(id);

  const handleScroll = (e) => {
    const current = scrollRef.current
    const amountScrolled = current?.scrollTop

    if ((amountScrolled + content.height) >= current?.scrollHeight && amountScrolled > 0) {
      onListEnd(e)
    }
  }

  return <Root data-testid={`scroll-${id}`} className={className} onScroll={handleScroll} ref={scrollRef}>{children}</Root>
}
