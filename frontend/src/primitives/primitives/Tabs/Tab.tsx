import { FC, useContext, useEffect } from "react";
import { Button } from "../Button";
import Icon from "@mdi/react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { tabState } from "./tabState";
import { TabsContext } from "./TabsContext";
import { SerializedStyles } from "@emotion/react";

export interface Tab {
  children: string;
  iconPath?: string;
  active?: boolean;
  onClick?: (tab: string) => void;
  tabKey?: string;
  activeBg?: string;
  className?: string;
  sx?: SerializedStyles;
  isRoute?: string;
}

const Btn = styled(Button)(({ active, activeBg, sx }: any) => ({
  alignItems: 'center',
  background: active ? activeBg : 'transparent',
  width: '100%',
  gap: 5,
  padding: '6px 10px',
  color: active ? 'var(--white)' : 'var(--blue)',
  fontSize: 12,
  borderRadius: 0,
  textAlign: 'center',
  label: 'primitiveTabBtn',
  '&:focus-visible': {
    outlineOffset: -1
  },
  ...sx
}))

const Txt = styled('span')(() => ({
  display: 'block',
  label: 'primitiveTabTxt',
}))

export const Tab: FC<Tab> = (props) => {
  const tabsKey = useContext(TabsContext)
  const { active, iconPath, children, onClick, tabKey, activeBg = 'var(--blue)', className, sx } = props;
  const [activeTab, setActiveTab] = useRecoilState(tabState(tabsKey));
  const t = tabKey || children.toLowerCase().replaceAll(' ', '')

  useEffect(() => {
    !activeTab && active && setActiveTab(tabKey)
  }, [])

  const handleClick = () => {
    if (!active) {
      activeTab !== t && setActiveTab(t);
      !!onClick && onClick(t)
    }
  }

  return (
    <li className={className}>
      <Btn
        data-testid={activeTab === t ? `${t}-active` : t}
        active={activeTab === t}
        activeBg={activeBg}
        onClick={handleClick}
        sx={sx}
      >
        {iconPath && <Icon path={iconPath} size={1.2} style={{ height: '20px'}} />}
        <Txt>{children}</Txt>
      </Btn>
    </li>
  )
}
