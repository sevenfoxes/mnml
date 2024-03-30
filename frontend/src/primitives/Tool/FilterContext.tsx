import { Dispatch, SetStateAction, createContext } from "react";

export interface FilterContextInterface {
  group: string;
  id: string;
  setCurrentTitle: Dispatch<SetStateAction<string>>;
}

export const FilterContext = createContext<FilterContextInterface>({
  group: '',
  id: '',
  setCurrentTitle: () => { }
});
