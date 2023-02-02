import { ARTIST_DATA } from "./action";

export function artistdata(data) {
    return {
        type: ARTIST_DATA,
        payload:data
    }
}