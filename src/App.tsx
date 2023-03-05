import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@emotion/react";

import * as theme from "./theme";
import { Header } from "./primitives/Header";

export const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Header>
          hi
        </Header>
      </ThemeProvider>
    </RecoilRoot>
  );
};
