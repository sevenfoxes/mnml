import styled from "@emotion/styled";
import { mdiAccountCircleOutline, mdiLogout } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "primitives/Button";
import { FC, useState } from "react";
import { useOnClickOutside } from "utils/hooks/useOnClickOutside";
import { useTranslation } from "react-i18next";
import { useResetRecoilState } from "recoil";

const Root: any = styled('div')({
  padding: 0,
  height: 36,
  position: 'relative',
  display: 'block',
  label: 'PrimitiveAccountTool'
});

const Btn: any = styled(Button)({
  padding: 0,
  height: 36,
  label: 'PrimitiveAccountToolBtn',
  '&:focus-visible': {
    borderRadius: '50%',
    outlineOffset: 1
  }
});

const Pop: any = styled('div')({
  borderRadius: 2,
  alignItems: 'center',
  padding: '.5rem 0',
  position: 'relative',
  display: 'block',
  background: 'var(--white)',
  boxShadow: '0 0 20px rgba(0, 0, 0, .3)',
  zIndex: 1,
  label: 'PrimitiveAccountToolPop'
});

const PopArrow: any = styled('div')({
  top: -25,
  right: 5,
  position: 'absolute',
  content: '""',
  width: 60,
  height: 25,
  zIndex: 2,
  overflow: 'hidden',
  label: 'PrimitiveAccountToolPopArrow',
  '&:after': {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 20,
    height: 20,
    boxShadow: 'var(--shadow-default)',
    background: 'var(--white)',
    transform: 'rotate(45deg)',
    display: 'block',
    content: '""'
  }
});

const PopContainer: any = styled('div')(({ open }: any) => ({
  top: 51,
  right: -12,
  position: 'absolute',
  display: open ? 'block' : 'none',
  label: 'PrimitiveAccountToolPopContainer',
}));

const Logout: any = styled(Button)({
  alignItems: 'center',
  top: 50,
  right: 0,
  display: 'flex',
  gap: 2,
  padding: '13px 24px',
  minWidth: 200,
  textAlign: 'left',
  label: 'PrimitiveAccountToolPopContainer',
});

export const AccountTool: FC<any> = () => {
  const [open, setOpen] = useState(false);
  const ref = useOnClickOutside(() => setOpen(false));
  const { t } = useTranslation();

  const handleLogout = () => {
  }

  return (
    <Root ref={ref}>
      <Btn onClick={() => setOpen(!open)}>
        <Icon path={mdiAccountCircleOutline} size={1.5} />
      </Btn>
      <PopContainer open={open}>
        <PopArrow />
        <Pop>
          <Logout onClick={handleLogout}>
            <Icon path={mdiLogout} size={1} />{t('Log out')}</Logout>
        </Pop>
      </PopContainer>
    </Root>
  );
}
