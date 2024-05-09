import { StatefulPrimitiveProps } from "models/Primitive.model";
import { FormEvent } from "react";

export interface InputProps extends StatefulPrimitiveProps {
  debounce?: boolean
  disabled?: boolean;
  error?: string;
  handleErrors?: boolean;
  hideLabel?: boolean;
  isField?: boolean;
  label: string;
  onClick?: any;
  password?: boolean;
  placeholder?: string;
  readonly?: boolean;
  readonlyType?: string;
  regex?: RegExp;
  required?: boolean;
  type?: string;
  value?: any;
}

export interface InputIconProps {
  startIcon?: string;
  endIcon?: string;
  onClickStartIcon?: any;
  onClickEndIcon?: any;
}

export type ValueFirstEvent<T extends any> = (value: T, event?: FormEvent<HTMLInputElement> & any, error?: any) => void

export interface InputEventProps<T extends any> {
  onClick?: ValueFirstEvent<T>;
  onChange?: ValueFirstEvent<T>;
  onMouseIn?: ValueFirstEvent<T>;
  onKeyUp?: ValueFirstEvent<T>;
  onMouseOut?: ValueFirstEvent<T>;
  onDrag?: ValueFirstEvent<T>;
  onSubmit?: ValueFirstEvent<T>;
  onReset?: ValueFirstEvent<T>;
  onFocus?: ValueFirstEvent<T>;
  onBlur?: ValueFirstEvent<T>;
}

export type HtmlInputProps<T extends any> = InputProps & InputIconProps & InputEventProps<T>

export type StringInputProps = HtmlInputProps<string> & {
  value?: string;
  password?: boolean;
}

export type NumberInputProps = HtmlInputProps<number> & {
  value?: number;
}

export type BooleanInputProps = HtmlInputProps<boolean> & {
  value?: boolean;
  checked?: boolean;
}


