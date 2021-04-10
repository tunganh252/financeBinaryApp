import { combineReducers } from "redux";
import user from "./user";
import wallet from "./wallet";


/**
 * @typedef {object} RootState
 */
const rootReducer = combineReducers({
    user: user.reducer,
    wallet: wallet.reducer,
})

export default rootReducer;