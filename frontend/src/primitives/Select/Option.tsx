import { FC } from "react";

interface OptionProps {
  children?: any;
  value: any;
}

export const Option: FC<OptionProps> = (props) => {
  const { children, value } = props;

  return (
    <option value={value}>
      {children || props.value}
    </option>
  );
}
