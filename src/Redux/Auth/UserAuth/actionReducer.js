import { USER_SIGNUP, USER_TOKEN } from "./action";

export function usersignup(data) {
    return {
        type: USER_SIGNUP,
        payload: data
    }
}
export function usertokenset(data) {
    return {
        type: USER_TOKEN,
        payload: data
    }
}