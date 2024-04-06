import { Children, FC, useEffect } from "react";
import styled from "@emotion/styled";
import { TabsContext } from "./TabsContext";
import { useSetRecoilState } from "recoil";
import { tabState } from "./tabState";
import { SerializedStyles } from "@emotion/react";

interface TabsProps {
  children: any;
  tabsKey: string;
  sx?: SerializedStyles;
  className?: string;
  showBorders?: boolean;
  initTab?: string;
}

const Root: any = styled('ul')(({ sx, count, showBorders }: any) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${count}, 1fr)`,
  background: 'var(--blue-extra-light)',
  border: '1px solid var(--blue)',
  label: 'primitiveTabs',
  ...sx,
  '& > * + * > button': {
    borderLeft: showBorders && '1px solid var(--blue)'
  },
  '& > * button': {
    minHeight: 32,
  }
}))

export const Tabs: FC<TabsProps> = (props) => {
  const { children, tabsKey, initTab, showBorders = false, sx } = props;
  const setActiveTab = useSetRecoilState(tabState(tabsKey))

  useEffect(() => {
    if (initTab) {
      setActiveTab(initTab)
    }
  }, [])

  return (
    <TabsContext.Provider value={tabsKey}>
      <Root sx={sx} count={Children.count(children)} showBorders={showBorders}>
        {children}
      </Root>
    </TabsContext.Provider>
  );
}
