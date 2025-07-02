export function updateSections() {

    handleEmptySections();

    if( !document.querySelector('.notion-callout.tfs__magicalMoments') ) {
        let headingClassMap = prepareHeadingClassMap();
        addSectionClasses(headingClassMap);
    }

}

function prepareHeadingClassMap() {

    let obj = {};

    const h2s = document.querySelectorAll('.notion-callout h2');

    for(let h2 of h2s) {

        let h2Text = h2.innerText;
        let newClass = 'tfs__' + h2Text[0].toLowerCase() + h2Text.substring(1).replace(" ", "");

        obj[h2Text] = newClass;

    }

    return obj;

}

function addSectionClasses(headingClassMap) {

    let callouts = document.querySelectorAll('article .notion-callout');

    for(let callout of callouts) {

        let heading = callout.querySelector('h2').innerText;

        if( headingClassMap[heading] ) {
            callout.classList.add(headingClassMap[heading]);
        }

    }

}

function handleEmptySections() {

    let callouts = document.querySelectorAll('.notion-callout');

    callouts.forEach(callout => {

        let isEmpty = callout.querySelector('.notion-collection-gallery .notion-collection-card') == null;

        if( isEmpty ) {
            callout.classList.add('tfs__noUpdates');
        }

    })

}