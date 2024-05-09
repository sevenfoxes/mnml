import '@emotion/react'
import { Theme as LibTheme } from '@emotion/react'
import { Variants } from 'models/Stylable.model';

interface PrimitiveElement {
  [name: string]: any;
}

export interface PrimitiveStyles {
  [Variants.unstyled]?: PrimitiveElement;
  [Variants.default]?: PrimitiveElement;
  [Variants.filled]?: PrimitiveElement;
  [Variants.outlined]?: PrimitiveElement;
  [Variants.rounded]?: PrimitiveElement;
  [Variants.sharp]?: PrimitiveElement;
  [Variants.text]?: PrimitiveElement;
}

export interface PrimitiveVariants {
  labels: {
    [component: string]: string;
  }
  styles: PrimitiveStyles;
}

declare module '@emotion/react' {
  export interface Theme extends LibTheme {
    colors: {
      [name: string]: string;
    },
    spacing: {
      default: any;
      whole: any;
      half: any;
      quarter: any;
    },
    [component: string]: PrimitiveVariants;
  }
}
