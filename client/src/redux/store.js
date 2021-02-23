import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cityReducer from "./reducers/cityReducers";

export const store = createStore(cityReducer, applyMiddleware(thunk));