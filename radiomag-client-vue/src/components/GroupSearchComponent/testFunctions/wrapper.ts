import { wrapper } from "./buildWrapper";

export const testWrapper = () => {
  expect(wrapper.isVisible()).toBe(true);
};
