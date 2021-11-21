import { CLEAR_LOADING, SET_LOADING } from "../actionCreators/loading";

const initialState = false;

export function loading(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return true;

        case CLEAR_LOADING:
            return false;

        default:
            return state;
    }
}
