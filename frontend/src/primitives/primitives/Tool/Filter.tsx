import styled from "@emotion/styled";
import { Dispatch, FC, SetStateAction, useContext, useEffect } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { filterGroupSelector, filterSelector } from "./filterState";
import { mdiChevronLeft, mdiFilter, mdiFilterOutline } from "@mdi/js";
import { Button, IconButton, OutlineButton } from "primitives/Button";
import Icon from "@mdi/react";
import { Popup, popupSelector } from "primitives/Popup";
import { useDimensions } from "utils/hooks/useDimensions";
import { buttonSize } from "primitives/Button/buttonSize";
import { useTranslation } from "react-i18next";
import { FilterContext } from "./FilterContext";

export interface FilterProps {
  setCurrentTitle?: Dispatch<SetStateAction<string>>;
  filterGroup?: string;
}

interface FilterToolProps {
  filterGroup?: string;
  action: (a: any) => void;
  id: string;
  size?: number;
  title: string;
  children: any;
  clear?: any;
  disabled?: boolean;
  onClose?: () => void;
  setCurrentTitle?: Dispatch<SetStateAction<string>>;
}

const Trigger = styled(Button)(() => ({
  background: 'transparent',
  color: 'var(--blue)',
  fontSize: '.8rem',
  padding: 0,
  width: 32,
  height: 32,
  margin: '0 auto',
  label: 'primitiveFilterTrigger',
  display: 'grid',
  placeContent: 'center'
}))

const Container = styled('div')(() => ({
  padding: 0
}))

const Tools: FC<{ clear: any }> = ({ clear }) => {
  return (
    <OutlineButton onClick={clear} color={'var(--white)'} sx={{ padding: '2px 3px' }} size={buttonSize.small}>Clear</OutlineButton>
  )
}

const LeftTools: FC<{ id: string, setCurrentTitle }> = ({ id, setCurrentTitle }) => {
  const { t } = useTranslation()
  const [filter, setFilter] = useRecoilState(filterSelector(id))

  if (!id) {
    return null;
  }

  const handleBack = () => {
    const p = filter.prev.length
    setCurrentTitle(t('Select one'))

    if (p === 0) {
      return null
    }

    return setFilter({ back: filter.prev[p - 1] })
  }

  return <IconButton path={mdiChevronLeft} color={'var(--white)'} onClick={handleBack}>{t('back')}</IconButton>
}

export const FilterTool: FC<FilterToolProps> = (props) => {
  const { action, size = .8, id, title, children, clear, onClose = () => null, setCurrentTitle, filterGroup, disabled = false } = props
  const { active, filters, filter, atRoot } = useRecoilValue(filterGroupSelector(filterGroup || id))
  const resetFilters = useResetRecoilState(filterGroupSelector(filterGroup || id))
  const icon = active ? mdiFilter : mdiFilterOutline
  const setOpen = useSetRecoilState(popupSelector(id))
  const { ref } = useDimensions(id, true)

  const handleClear = (e) => {
    !!clear && clear(e)
    resetFilters()
    if (setCurrentTitle) {
      setCurrentTitle('')
    }
  }

  useEffect(() => {
    if (atRoot && setCurrentTitle) {
      setCurrentTitle('')
    }
  }, [atRoot])

  return (
    <FilterContext.Provider value={{ id, group: filterGroup, setCurrentTitle }}>
      <Container>
        <Trigger data-testid={`filter-trigger-${id}`} onClick={() => setOpen(true)} disabled={disabled}>
          <Icon ref={ref} path={icon} size={size} />
        </Trigger>
        <Popup onClose={onClose} id={id} action={action} title={title} tools={active && <Tools clear={handleClear} />} leftTools={<LeftTools setCurrentTitle={setCurrentTitle} id={filter?.id} />}>
          {children}
        </Popup>
      </Container>
    </FilterContext.Provider>
  )
}
