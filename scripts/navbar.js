export function replaceLoginIcon(user) {

    let cta = document.querySelector('.super-navbar__cta');
    let ctaLink = document.querySelector('.super-navbar__actions a');

    if( user ) {
        ctaLink.addEventListener('click', e => {
            e.preventDefault();
            e.stopImmediatePropagation();
        })
        ctaLink.style.cursor = 'default';
        cta.style.cursor = 'default';
        cta.innerHTML = `Welcome, ${user.preferredName}! <img src="https://assets.theflightschool.org/journeys/assets/icon_log-out.svg" alt="Log out" class="navbar__logOutIcon">`;
        let urlNoParams = window.location.href.replace(/\?.+/, "");
        cta.querySelector('.navbar__logOutIcon').addEventListener('click', e => {
            localStorage.removeItem('user');
            location.href = urlNoParams;
        })
    } else if( cta.innerHTML == ' ' ) {
        ctaLink.href = "#tally-open=mZg4Lv&tally-layout=modal&tally-auto-close=3000";
        cta.innerHTML = `<img src="https://assets.theflightschool.org/journeys/assets/icon_user.svg" alt="Sign in">`;
    }
    
}