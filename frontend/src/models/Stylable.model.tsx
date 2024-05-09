import { SerializedStyles } from "@emotion/react";
import { ElementType } from "react";

export enum Variants {
  unstyled = 'unstyled',
  filled = 'filled',
  rounded = 'rounded',
  sharp = 'sharp',
  outlined = 'outlined',
  text = 'text',
  default = 'default',
}

export enum Position {
  before = 'before',
  after = 'after',
  above = 'above',
  below = 'below'
}

export enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export type Sx = SerializedStyles & { [k: string | number]: any }

export interface StylableProps {
  unstyle?: boolean;
  as?: ElementType<any>;
  className?: string;
  position?: Position;
  sx?: Sx;
  variant?: Variants;
}
