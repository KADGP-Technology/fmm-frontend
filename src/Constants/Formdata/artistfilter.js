function artistfilter(obj) {

    return {
        "page": 1,
        "limit": 10,
        "partyMakeup": obj.services.includes('partymakeup'),
        "bridalMakeup": obj.services.includes('bridalmakeup'),
        "bodyFaceArt": obj.services.includes('facebody'),
        "cinematicMakeup": obj.services.includes('cinematicmakeup'),
        "highFashionMakeup": obj.services.includes('highfashion'),
        "priceRange": {
            "min": obj.pricerange.min,
            "max": obj.pricerange.max
        },
        "experience": obj.experience.map((data) => Number(data)),
        "certifiedOnly": obj.iscertified[0] == 'iscertified',
        "verifiedOnly": obj.isvarified[0] == 'isvarified',
        "travelToVenue": null,
        "offerHairStyling": obj.ishairstyling[0] == 'ishairstyling',
        "offerInStudioService": obj.inStudioservice[0] == 'inStudioservice'
    }
}
export default artistfilter;