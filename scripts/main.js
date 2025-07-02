import { startObserver } from "./observer.js";
import { callWhenDOMReady } from "./utils.js";
import { makeMagic } from "./magic.js";

startNewSession();

function startNewSession() {
    callWhenDOMReady(makeMagic, startObserver);
}