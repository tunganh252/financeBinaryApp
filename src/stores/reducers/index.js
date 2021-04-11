import { combineReducers } from "redux";
import user from "./user";
import wallet from "./wallet";
import market from "./market";


/**
 * @typedef {object} RootState
 */
const rootReducer = combineReducers({
    user: user.reducer,
    wallet: wallet.reducer,
    market: market.reducer,
})

export default rootReducer;