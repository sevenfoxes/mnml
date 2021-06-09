// project specific colors
export const black = "#2b2b2b";
export const red = "#de3636";
export const blue = "#00286c";
export const orange = "#ed8b00";
export const white = "#fff";

// colors used in themed components
export const colors = {
  accept: "#3db14c",
  warn: red,
  error: red,
  warning: 'yellow',
  headerFg: white,
  headerBg: blue,
  subHeaderBg: "#bfbfbf",
  subHeaderFg: black,
  menuHoverBg: "#002a72",
  menuActiveFg: orange,
  billboardBg: blue,
  ok: blue,
};

// fonts
export const sansSerif = "sans-serif";

export const robotoFont = `'Roboto', ${sansSerif}`;

export const fonts = {
  sansSerifFont: robotoFont,
};

// style variables
export const siteMaxWidth = 1300;
export const baseMargin = "1rem";

export const variables = {
  cellPadding: ".1rem .8rem",
  siteMargin: "1rem",
  siteMaxWidth,
  baseMargin,
  wrapper: {
    display: "grid",
    margin: "0 auto",
    gridTemplateColumns: "1fr max-content",
    paddingLeft: `calc(env(safe-area-inset-left) + ${baseMargin})`,
    paddingRight: `calc(env(safe-area-inset-right) + ${baseMargin})`,
    width: "100%",
  },
};

export const toast = {
  errorColor: colors.error,
  warnColor: colors.warning,
  msgColor: colors.ok,
  delay: 2000,
  offset: 16,
};
