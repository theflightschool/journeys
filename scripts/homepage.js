export function boostPhotosQuality() {

    let profilePhotos = document.querySelectorAll('.notion-collection-card__content .notion-property__title img');

    profilePhotos.forEach( photo => {
        photo.removeAttribute('srcset');
        let newSrc = photo.src.replace(/w\=[0-9]{2},/, "w=320,");
        photo.setAttribute('src', newSrc);
    })

}