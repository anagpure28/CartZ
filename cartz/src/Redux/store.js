import { combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as ProductReducer } from "./ProductReducer/reducer";

const rootReducer = combineReducers({
    authReducer,
    ProductReducer
})

export const store = legacy_createStore(rootReducer)