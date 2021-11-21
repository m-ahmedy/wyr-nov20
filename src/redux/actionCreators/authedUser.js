export const SET_AUTHED_USER = 'authedUser/set'

export function setAuthedUser(authedUserId) {
    return {
        type: SET_AUTHED_USER,
        payload: { authedUserId }
    }
}
