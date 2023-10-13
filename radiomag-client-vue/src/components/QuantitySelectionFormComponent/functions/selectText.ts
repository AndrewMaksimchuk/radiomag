import { isHTMLElement } from "./isHTMLElement";

export const selectText = (event: MouseEvent) => {
  if (event.target && isHTMLElement(event.target)) {
    event.target.select();
  }
};
