import { combineReducers } from "redux";
import { authedUser } from "./authedUser";
import { questions } from "./questions";
import { users } from "./users";
import { loading } from "./loading";

export const reducer = combineReducers({
    authedUser,
    users,
    questions,
    loading,
});
