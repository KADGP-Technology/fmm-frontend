import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { USER_SIGNUP, USER_TOKEN } from "./action";


const initialState = {
    usertoken: '',
    username: '',
    usertype: null
}
const configPersisit = {
    storage,
    key: 'user_token',

}

export const usersignupreducer = persistReducer(configPersisit, (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNUP:

            return {
                ...state,
                username: action.payload.username
            };

        case USER_TOKEN:

            return {
                ...state,
                usertoken: action.payload.token,
                usertype: action.payload.usertype
            }


        default:
            return state;

    }

}) 