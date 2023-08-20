import { RadiomagEventEmitter } from "../emitter";
import { eventName } from "../names.js";
import { listenerBulletin } from "./listenerBulletin.js";

RadiomagEventEmitter.on(eventName.bulletin, listenerBulletin);
