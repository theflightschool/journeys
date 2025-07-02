import { makeMagic } from './magic.js';
import { callWhenDOMReady } from './utils.js';

export function startObserver() {

    let timeout;

    const observer = new MutationObserver( mutations => {

        for(let mutation of mutations) {
            for(let node of mutation.addedNodes) {
                if( node.tagName?.toLowerCase() == 'main' ) {
                    clearTimeout(timeout);
                    timeout = setTimeout( () => {
                        callWhenDOMReady(makeMagic);
                    }, 500);
                }
            }
        }

    });

    observer.observe(document.querySelector('.super-content-wrapper'), {
        childList: true
    });

}