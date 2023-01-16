import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ARTIST_LOGIN, ARTIST_TOKEN } from "./action";


const initialState = {
    token: '',
    username: '',
    usertype: null
}
const configPersisit = {
    storage,
    key: 'token',
    serializableCheck: false
}

export const artistloginReducer = persistReducer(configPersisit, (state = initialState, action) => {
    switch (action.type) {
        case ARTIST_LOGIN:

            return {
                ...state,
                usertype: action.payload.usertype
            };

        case ARTIST_TOKEN:

            return {
                ...state,
                token: action.payload.token,
                usertype: action.payload.usertype
            }


        default:
            return state;
            break;
    }

}) 