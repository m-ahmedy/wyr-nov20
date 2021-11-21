import { SET_AUTHED_USER } from "../actionCreators/authedUser";

const initialState = "";

export function authedUser(state = initialState, action) {
    switch (action.type) {
        case SET_AUTHED_USER: {
            const { authedUserId } = action.payload;
            return authedUserId;
        }

        default:
          return state
    }
}
