import { inputText, attrsMaxlength } from "./constants";
import { getInput, wrapper } from "./buildWrapper";

export const testInput = async () => {
  const input = getInput();
  const attrs = input.attributes();

  expect(input.isVisible()).toEqual(true);
  expect(attrs["maxlength"]).toEqual(attrsMaxlength);
  expect(attrs["placeholder"]).toEqual("groupSearch.placeholder");

  await getInput().setValue(inputText);
  await input.trigger("keyup", {
    key: "enter",
  });
  expect(wrapper.emitted()["search"].length).toBeGreaterThan(0);

  await input.trigger("keydown", {
    key: "escape",
  });
  expect(wrapper.emitted()["reset"]).not.toBeUndefined();
};
