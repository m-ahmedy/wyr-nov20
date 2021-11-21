export const LOAD_USERS = 'users/load'

export function loadUsers(users) {
    return {
        type: LOAD_USERS,
        payload: { users }
    }
}
