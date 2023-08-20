import { EventEmitter } from "node:events";

class RadiomagEmitter extends EventEmitter {}

export const RadiomagEventEmitter = new RadiomagEmitter();
