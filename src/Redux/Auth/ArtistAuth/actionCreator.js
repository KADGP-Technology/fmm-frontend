import { ARTIST_LOGIN } from "./action";
import { ARTIST_TOKEN } from "./action";

export function artistlogin(data) {
    return {
        type: ARTIST_LOGIN,
        payload: data
    }
}
export function artisttokenset(data) {
    return {
        type: ARTIST_TOKEN,
        payload: data
    }
}