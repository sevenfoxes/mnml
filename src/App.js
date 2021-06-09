import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "react-jss";

import * as theme from "./theme";

export const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <div>testing 123</div>
      </ThemeProvider>
    </RecoilRoot>
  );
};
