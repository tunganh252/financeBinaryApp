import { combineReducers } from 'redux'
import user from './user'
import wallet from './wallet'
import market from './market'
import system from './system'
/**
 * @typedef {object} RootState
 */
const rootReducer = combineReducers({
  system: system.reducer,
  user: user.reducer,
  wallet: wallet.reducer,
  market: market.reducer,
})

export default rootReducer
