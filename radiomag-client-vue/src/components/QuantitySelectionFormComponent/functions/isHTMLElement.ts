export const isHTMLElement = (
  element: EventTarget
): element is HTMLInputElement => {
  return element instanceof HTMLInputElement;
};
