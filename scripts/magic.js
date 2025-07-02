import { handleAuth } from './users.js';
import { updateSections } from "./sections.js";
import { isHomepage } from "./utils.js";
import { boostPhotosQuality } from "./homepage.js";

export function makeMagic() {

    handleAuth();

    if( isHomepage() ) {
        boostPhotosQuality();
    } else {
        updateSections();
    }

}