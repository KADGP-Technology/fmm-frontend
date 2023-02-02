import { APPLY_FILTER } from "./action";

const initialstate = {
    "page": 1,
    "limit": 10,
    "partyMakeup": false,
    "bridalMakeup": false,
    "bodyFaceArt": false,
    "cinematicMakeup": false,
    "highFashionMakeup": false,
    "priceRange": {
        "min": '',
        "max": ''
    },
    "experience": [],
    "certifiedOnly": false,
    "verifiedOnly": 0,
    "travelToVenue": 0,
    "offerHairStyling": false,
    "offerInStudioService": false
}


export function applyfilterreducer(state = initialstate, action) {
    switch (action.type) {
        case APPLY_FILTER:
            return action.payload;

        default:
            return state;
    }

}