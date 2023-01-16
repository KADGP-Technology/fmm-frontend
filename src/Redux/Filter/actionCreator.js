import { APPLY_FILTER } from "./action";

export function applyfilter(obj) {
    return {
        type: APPLY_FILTER,
        payload:obj
    }
}