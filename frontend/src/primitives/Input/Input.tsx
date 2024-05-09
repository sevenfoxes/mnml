import styled from "@emotion/styled";
import { Sx, Variants } from "models/Stylable.model";
import { FC, useState } from "react";
import { HtmlInputProps, ValueFirstEvent } from "./Input.model";
import { Icon } from "primitives/Icon";

type BaseInputProps = Omit<HtmlInputProps<any>, 'label'>

const Root = styled('div')(({ unstyle, theme, startIcon, endIcon, variant = Variants.default, sx = {} }: any) => {
  const cols = [!!startIcon && 'min-content', '1fr', !!endIcon && 'min-content'].filter(i => i).join(' ')
  const t = theme.input
  const s = unstyle ? t.styles.unstyled.Root : t.styles[variant].Root({ cols })

  return {
    label: t.labels.Root,
    ...s,
    ...sx
  }
})

const StyledInput: any = styled('input')(({ unstyle, theme, variant, sx = {} }: any) => {
  const t = theme.input
  const s = unstyle ? t.styles.unstyled.Input : t.styles[variant].Input

  return {
    ...s,
    ...sx
  }
})

const StartIcon = styled(Icon)(({ theme, variant, sx, unstyle, onClick, fontSize = 11 }: any) => {
  const t = theme.input
  const s = unstyle ? t.styles.unstyled.StartIcon : t.styles[variant].StartIcon({ fontSize, onClick })

  return {
    label: t.labels.startIcon,
    ...s,
    ...sx
  }
})

const EndIcon = styled(Icon)(({ onClick, unstyle, theme, variant, sx, fontSize = 11 }: any) => {
  const t = theme.input
  const s = unstyle ? t.styles.unstyled.EndIcon : t.styles[variant].EndIcon({ fontSize, onClick })

  return {
    label: t.labels.EndIcon,
    ...s,
    ...sx
  }
})

export const Input: FC<BaseInputProps> = (props) => {
  const {
    onClickEndIcon,
    onClickStartIcon,
    startIcon,
    endIcon,
    onChange,
    onFocus,
    onBlur,
    as = 'input',
    readonly = false,
    readonlyType = 'span',
    error = '',
    type = 'text',
    required = false,
    sx = {} as Sx,
    variant = Variants.default,
    value: v = '',
    unstyle = false,
    ...rest
  } = props
  const [value, setV] = useState(v);
  const [focused, setFocused] = useState(false);

  const stylable = {
    variant,
    unstyle,
  }

  const startStyleable = {
    ...stylable,
    ...sx?.icons,
    ...sx?.startIcon
  }

  const endStyleable = {
    ...stylable,
    ...sx?.icons,
    ...sx?.endIcon
  }

  const handleChange: ValueFirstEvent<any> = (v, e) => {
    const val = e.target?.event
    setV(val)
    !!onChange && onChange(val, e)
  }

  const handleFocus: ValueFirstEvent<any> = (v, e) => {
    setFocused(true)
    !!onFocus && onFocus(v, e)
  }

  const handleBlur: ValueFirstEvent<any> = (v, e) => {
    setFocused(false);
    !!onBlur && onBlur(v, e)
  }

  return (
    <Root
      {...stylable}
      sx={sx?.root || sx}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {!!startIcon && (
        <StartIcon
          {...startStyleable}
          onClick={onClickStartIcon}
          path={startIcon}
        />)}
      <StyledInput
        {...stylable}
        sx={sx?.input}
        focused={focused}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        as={readonly ? 'span' : as}
        type={type}
        value={value}
        {...rest}
      />
      {!!endIcon && (
        <EndIcon
          {...endStyleable}
          onClick={onClickEndIcon}
          path={endIcon}
        />)}
    </Root>
  );
}
