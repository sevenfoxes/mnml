import styled from "@emotion/styled";
import { ChangeEventHandler, FC } from "react";

interface SelectProps {
  children: any;
  label: string;
  id: string;
  value: any;
  className?: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const Root = styled('label')(({ }) => ({
  display: 'block',
  label: 'primitiveSelect'
}))

const Text = styled('span')(({ }) => ({
  display: 'block',
  fontSize: 12,
  label: 'primitiveSelectText'
}))

export const Select: FC<SelectProps> = (props) => {
  const {
    children,
    label,
    id,
    onChange,
    value,
    className
  } = props;

  return (
    <Root className={className} htmlFor={id}>
      <Text>{label}</Text>
      <select onChange={onChange} name={id} id={id} value={value}>
        {children}
      </select>
    </Root>
  );
}
