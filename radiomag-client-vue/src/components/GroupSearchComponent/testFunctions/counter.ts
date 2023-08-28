import { inputText, attrsMaxlength } from "./constants";
import { getCounter, getInput } from "./buildWrapper";

export const testCounter = async () => {
  const counter = getCounter();
  expect(counter.isVisible()).toEqual(true);
  expect(counter.text()).toContain(attrsMaxlength);
  await getInput().setValue(inputText);
  expect(counter.text()).toContain(inputText.length);
};
