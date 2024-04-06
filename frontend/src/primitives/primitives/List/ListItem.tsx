import styled from "@emotion/styled";
import { Button } from "primitives/Button";
import { FC } from "react";

const Root = styled('li')(() => ({}))

const Btn: any = styled(Button)(({ isActive }: any) => ({
  display: 'block',
  width: '100%',
  minHeight: 44,
  borderBottom: `1px solid rgb(222,222,222)`,
  borderRadius: 0,
  background: isActive && `linear-gradient(to right, var(--purple), var(--blue-light))`,
  fontSize: 12,
  padding: '8px 15px',
  color: isActive ? 'white' : 'black',
  textAlign: 'left',
  label: 'PrimitiveListItem',
  '&:focus-visible': {
    outlineColor: 'white'
  },
  span: {
    display: 'flex',
    gap: 3
  }
}))

interface ListItem {
  children: any;
  onClick: (e) => void;
  isActive: boolean;
}

export const ListItem: FC<ListItem> = (props) => {
  const { children, onClick, isActive } = props;

  return (
    <Root>
      <Btn onClick={onClick} isActive={isActive} id={'listItem'} >
        {children}
      </Btn>
    </Root>
  );
}
