const rootHtml = document.documentElement;
const rootStyle = getComputedStyle(rootHtml);

export type Breakpoint =
  | "--breakpoint-mobile"
  | "--breakpoint-tablet"
  | "--breakpoint-desktop";

export const getScreenBreakpoint = (breakpoint: Breakpoint) => {
  return rootStyle.getPropertyValue(breakpoint);
};
