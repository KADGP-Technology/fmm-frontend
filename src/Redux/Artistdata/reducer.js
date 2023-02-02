import { ARTIST_DATA } from "./action";

const initialstate = {
    profileimage: "",
    profilePhoto: "",
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    email: "",
    bio: "",
    search: "",
    houseNumber: "",
    area: "",
    landMark: "",
    country: "",
    city: "",
    state: "",
    services: [],
    price: "",
    isCertified: false,
    uploadcertificate: "",
    experience: "",
    style: "",
    workingstate: "",
    brand: "",
    profile: "",
    photos: [],
    videos: [],
    ismobilevarified: false,
    albumName: '',
    albumCategory: ''
}

export function artistdatareducer(state = initialstate, action) {

    switch (action.type) {
        case ARTIST_DATA:
            return {
                ...state,
                ...action.payload
            }


        default:
            return state;
    }

}