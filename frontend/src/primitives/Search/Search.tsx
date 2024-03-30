import styled from "@emotion/styled";
import { mdiCloseCircle, mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import { DebouncedInput, InputProps } from "primitives/Input";
import { FC, useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { searchState } from "./searchState";
import { IconButton } from "primitives/Button/IconButton";

interface SearchProps extends Partial<InputProps> {
  id: string;
  label: string;
  handler: (e) => void;
  className?: string;
}

const Root = styled('div')(() => ({
  display: 'grid',
  gridAutoFlow: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  gap: 0,
  background: 'var(--white)',
  padding: '4px 3px',
  borderRadius: 2,
  position: 'relative',
  label: 'primitiveSearch'
}))

const Input = styled(DebouncedInput)(() => ({
  marginRight: '1rem',
  maxWidth: 120,
  label: 'primitiveSearchInput'
}))

const CloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  right: 10,
  top: '50%',
  transform: 'translateY(-50%)',
  label: 'primitiveSearchClose'
}))

export const Search: FC<SearchProps> = (props) => {
  const { label, placeholder, id, handler, className, startIcon, autocapitalize } = props;
  const [searchTerm, setSearchTerm] = useRecoilState(searchState(id));
  const clearSearchTerm = useResetRecoilState(searchState(id));
  const searchMinLength = 2

  useEffect(() => {
    if (searchTerm.length > searchMinLength || searchTerm === '') {
      handler(searchTerm?.trim());
    }
  }, [searchTerm])

  return (
    <Root className={className}>
      <Icon path={mdiMagnify} size={'20px'} style={{ color: 'var(--blue)' }} />
      <Input
        autocapitalize={autocapitalize}
        startIcon={startIcon}
        id={id}
        label={label}
        value={searchTerm}
        placeholder={placeholder}
        regex={new RegExp(/^[a-zA-Z0-9]+$/g)}
        onChange={(e) => {
          setSearchTerm(e)
        }}
        hideLabel
      />
      {!!searchTerm && <CloseButton path={mdiCloseCircle} iconSize={.8} sx={{ color: '#999' }} onClick={clearSearchTerm}>clear</CloseButton>}
    </Root>
  );
}
