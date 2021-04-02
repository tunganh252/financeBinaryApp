import { combineReducers } from "redux";
import user from "./user";


/**
 * @typedef {object} RootState
 */
const rootReducer = combineReducers({
    user: user.reducer
})

export default rootReducer;