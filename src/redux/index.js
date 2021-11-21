import { createStore } from "redux";
import { middleware } from "./middleware";
import { reducer } from "./reducers";

export const store = createStore(reducer, middleware);
