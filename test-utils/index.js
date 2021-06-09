import React from "react";
import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";

const Providers = ({ children }) => {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: Providers, ...options });
};

export * from "./jssSelector";
export * from "@testing-library/react";
export { customRender as render, userEvent, act };
