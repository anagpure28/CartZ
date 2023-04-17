import { combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as mobileReducer } from "./mobileReducer/reducer";
import { reducer as laptopReducer } from "./laptopReducer/reducer";

const rootReducer = combineReducers({
    authReducer,
    mobileReducer,
    laptopReducer
})

export const store = legacy_createStore(rootReducer)