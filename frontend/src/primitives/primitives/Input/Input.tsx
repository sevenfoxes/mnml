import styled from "@emotion/styled";
import { ChangeEventHandler, ElementType, FC, useState } from "react";
import { Required } from 'primitives/Required';
import { Icon } from "primitives/Icon";

export interface InputProps {
  label: string;
  type?: string;
  value: string;
  id: string;
  placeholder?: string;
  onBlur?: (e: Event) => void;
  onFocus?: (e: Event) => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyUp?: any;
  className?: string;
  hideLabel?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  password?: boolean;
  startIcon?: string;
  endIcon?: string;
  autocapitalize?: boolean;
  as?: ElementType<any>;
}

const Root = styled('div')({
  position: 'relative',
  label: 'primitiveInput'
});

const StyledInput: any = styled('input')({
  border: 'none',
  borderRadius: 3,
  padding: '5px 10px',
  width: "100%",
  display: 'block',
  '&:hover, &:focus, &:active': {
    outline: 'none',
  },
  '&:disabled': {
    background: 'transparent',
    opacity: .5
  },
  label: 'primitiveInputInput'
})

const Label: any = styled('label')({
  display: 'block',
  label: 'primitiveInputLabel',
})

const LabelText = styled('span')(({ hideLabel }: any) => ({
  fontSize: 12,
  display: 'block',
  position: hideLabel ? 'absolute' : 'static',
  left: '-999px',
  overflow: 'hidden',
  label: 'primitiveInputLabelText'
}))

const Error = styled('div')(({ hideLabel }: any) => ({
  padding: '0 26px 5px',
  fontSize: 12,
  color: 'var(--danger)',
  textAlign: 'right',
  maxWidth: 340
}))

const StartIcon = styled(Icon)(({ }: any) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'var(--blue)',
  left: 6
}))

const EndIcon = styled(Icon)(({ }: any) => ({
  color: 'var(--blue)',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: 6
}))

const InputWrapper = styled('div')(({ startIcon, endIcon }: any) => ({
  position: 'relative',
  paddingLeft: startIcon ? 32 : 0,
  paddingRight: endIcon ? 32 : 0
}))

export const Input: FC<InputProps> = (props) => {
  const {
    error = '',
    hideLabel = false,
    className, type = 'text',
    as,
    onChange,
    onFocus,
    onBlur,
    id,
    placeholder,
    label,
    required = false,
    password,
    startIcon,
    endIcon,
    autocapitalize = false
  } = props
  const [focused, setFocused] = useState(false);

  const handleFocus = (e: any) => {
    setFocused(true)
    !!onFocus && onFocus(e)
  }

  const handleBlur = (e: any) => {
    setFocused(false);
    !!onBlur && onBlur(e)
  }


  return (
    <>
      <Root className={className}>
        <Label
          htmlFor={id}
          focused={focused}

        >
          <LabelText hideLabel={hideLabel}>
            {label} {required && <Required />}
          </LabelText>
          <InputWrapper startIcon={startIcon} endIcon={endIcon}>
            {!!props?.startIcon && <StartIcon path={props.startIcon} />}
            <StyledInput
              autocapitalize={autocapitalize}
              id={id}
              hasText={!!props.value?.length}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={onChange}
              placeholder={placeholder}
              type={type}
              password={password}
              {...props}
            />
            {!!props?.endIcon && <EndIcon path={props.endIcon} />}
          </InputWrapper>
        </Label>
      {!!error && <Error>{error}</Error>}
      </Root>
    </>
  );
}
