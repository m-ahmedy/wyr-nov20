export const SET_LOADING = "loading/set";
export const CLEAR_LOADING = "loading/clear";

export function setLoading() {
    return {
        type: SET_LOADING,
    };
}

export function clearLoading() {
    return {
        type: CLEAR_LOADING,
    };
}

