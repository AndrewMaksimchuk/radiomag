import { getIcon } from "./buildWrapper";

export const testIcon = () => {
  const icon = getIcon();
  expect(icon.isVisible()).toEqual(true);
  expect(icon.find("svg").isVisible()).toEqual(true);
};
