import styled from "@emotion/styled";
import { Card } from "primitives/Card";
import { Loading } from "primitives/Loading";
import { FC, ReactNode } from "react";
import { Empty } from "./Empty";
import { SerializedStyles } from "@emotion/react";

const Root = styled(Card)(({ tall }: any) => {

  return {
    fontSize: 12,
    background: 'var(--white)',
    label: 'Widget',
  }
})


interface WidgetProps {
  children: any;
  title: string;
  hasData?: boolean;
  empty: ReactNode | string | number;
  sx?: SerializedStyles;
  tools?: any;
  maxHeight?: any;
  tall?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  onScrollEnd?: () => void;
  id: string;
}

export const Widget: FC<WidgetProps> = (props) => {
  const { title, onScrollEnd = () => null, id, children, empty, hasData = false, sx, tools, maxHeight, isLoading, isError, tall = false } = props


  return (
    <Root id={id} onScrollEnd={onScrollEnd} maxHeight={maxHeight} title={title} sx={sx} tools={tools} tall={tall}>

      <div>
        {hasData && children}
      </div>
      {!hasData && !isLoading && (
        <Empty>
          {empty}
        </Empty>
      )}
      {isError && (
        <Empty>
          There was an issue retrieving data
        </Empty>
      )}
      <Loading isLoading={isLoading} size={4} sx={{ position: 'sticky', background: 'rgba(255,255,255, .6)', top: '0', width: '100%', height: '100%' } as any} />
    </Root>
  )
}
