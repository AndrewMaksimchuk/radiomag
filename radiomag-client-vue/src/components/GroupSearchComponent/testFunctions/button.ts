import { inputText } from "./constants";
import { getButton, getInput, wrapper } from "./buildWrapper";

export const testButton = async () => {
  const button = getButton();

  expect(button.isVisible()).toEqual(true);
  expect(button.text()).toEqual("groupSearch.button");
  expect(button.attributes()["disabled"]).toEqual("");

  await getInput().setValue(inputText);
  expect(button.attributes()["disabled"]).toBeUndefined();

  await button.trigger("click");
  expect(wrapper.emitted()["search"].length).toBeGreaterThan(0);
};
