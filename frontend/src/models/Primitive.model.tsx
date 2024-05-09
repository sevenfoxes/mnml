import { StylableProps } from "./Stylable.model";

export interface StatelessPrimitiveProps extends StylableProps {
  id?: string;
}

export interface StatefulPrimitiveProps extends StylableProps {
  id: string;
}
