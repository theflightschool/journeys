import { replaceLoginIcon } from './navbar.js';

export function handleAuth() {

    const currentURL = new URL(window.location.href);

    manageVisibilityClasses(currentURL);

    let user = createOrGetStorageItem(currentURL);

    replaceLoginIcon(user);
    
    manageUserClasses(currentURL, user);

    listenForFormSubmission();

}

function createOrGetStorageItem(currentURL) {

    const params = currentURL.searchParams;
    const URLEncodedJSON = params.get('json');

    if(URLEncodedJSON) {
        const b64JSON = decodeURIComponent(URLEncodedJSON);
        const stringJSON = atob(b64JSON);

        localStorage.setItem('user', stringJSON);

        return JSON.parse(stringJSON);
    } else {
        return getUser();
    }

}

export function getUser() {
    
    return JSON.parse(localStorage.getItem('user'));

}

function manageUserClasses(currentURL, user) {

    if(user) {

        document.body.classList.add('tfs__user');

        let currentSlug = currentURL.pathname.split("/")[1];

        if( user.slug == currentSlug ) {

            document.body.classList.add('tfs__user--myProfile');

            updateButtonURLs(user.fullName);

        } else {

            document.body.classList.remove('tfs__user--myProfile')
        }

    } else {
        document.body.classList.remove('tfs__user');
    }

}

function manageVisibilityClasses(currentURL) {

    if(currentURL.pathname == '/') return;

    let cards = document.querySelectorAll('.notion-collection-card');

    cards.forEach( card => {
        let visibility = card.querySelector('p.notion-property__text:last-of-type span').innerHTML;

        if( visibility?.includes('Flight School') ) {
            card.classList.add('tfs__flightSchoolOnly');
        }
    })

}

function updateButtonURLs(fullName) {

    const headerButton = document.querySelector('.notion-page__layout-property a.notion-link');
    const calloutButtons = document.querySelectorAll('.notion-callout__content p:last-child a.notion-link');

    if( headerButton && calloutButtons ) {

        const buttons = [headerButton, ...calloutButtons];

        buttons.forEach( button => {
            button.href = button.href.replace("https://form.theflightschool.org/journey-update?", "#tally-open=3EgAOl&tally-layout=modal&tally-hide-title=1&") + "&fellow=" + fullName.replace(" ", "%20");
        })

    }

}

function listenForFormSubmission() {

    window.addEventListener('message', e => {

        if( !e.origin.includes('tally.so') ) return;

        let data;
        
        try {
            data = JSON.parse(e.data);
        } catch {
            return;
        }

        if( data.event == 'Tally.FormSubmitted' && data.payload.formId == '3EgAOl' ) {
            setTimeout( () => {
                window.location.reload();
            }, 3000);
        }

    })

}