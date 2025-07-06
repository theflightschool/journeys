const headingClassMap = {
    'What am I genuinely interested in learning?': 'tfs__learningInterests',
    'Current Location': 'tfs__currentLocation',
    'What’s helped me notice my intuition?': 'tfs__intuition',
    'How can I build healthy relationships?': 'tfs__relationships',
    'Who am I without my devices?': 'tfs__technologyBreak',
    "What if my beliefs aren’t true?": 'tfs__shiftedBeliefs',
    "Who lives behind my mask?": 'tfs__authenticSelf',
    "How can I replace my inner critic with love?": 'tfs__loveLetters',
    "What kindles and dwindles an inner light?": 'tfs__kindleDwindle',
    'Magical Light-Kindling Moments': 'tfs__magicalMoments'
}

export function updateSections() {

    handleEmptySections();

    if( !document.querySelector('.notion-callout.tfs__magicalMoments') ) {
        addSectionClasses(headingClassMap);
    }

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