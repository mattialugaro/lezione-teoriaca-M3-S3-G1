//src/reducers/index.js

import { combineReducers } from "redux";
import userReducer from "./userReducer";
import counterReducer from "./counterReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    cart: cartReducer,
});

export default rootReducer;