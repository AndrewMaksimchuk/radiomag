import { RadiomagEventEmitter } from "./emitter.js";
import type { RadiomagEventName } from "./names.js";

export const radiomagEventEmit = (eventName: RadiomagEventName) => {
  RadiomagEventEmitter.emit(eventName);
};
