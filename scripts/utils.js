export function callWhenDOMReady(...callbacks) {

    let interval = setInterval( () => {

        let calloutH2s = document.querySelectorAll('.notion-callout h2');
        let homepageGallery = document.querySelector('.page__index .notion-collection-gallery div img');

        if( calloutH2s.length > 5 || homepageGallery ) {
            clearInterval(interval);
            setTimeout( () => {
                callbacks.forEach( callback => callback() );
            }, 500);
        }

    }, 300);

}

export function isHomepage() {

    let currentURL = new URL(window.location.href);

    return currentURL.pathname == '/';

}