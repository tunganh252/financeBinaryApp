import { createSlice } from '@reduxjs/toolkit'
import * as walletActions from '../actions/wallet'

export default createSlice({
  name: 'wallet',
  initialState: {
    coins: {
      data: [],
      detail: {},
    },
    chains: [],
    address: '',
    type: '',
  },
  reducers: {},
  extraReducers: {
    [walletActions.actionGetAllCoins]: (state, action) => {
      if (!action || !action.payload) return
      return {
        ...state,
        coins: {
          ...state.coins,
          data: action.payload,
        },
        type: action.type,
      }
    },
    [walletActions.actionGetDetailCoins]: (state, action) => {
      if (!action || !action.payload) return
      return {
        ...state,
        coins: {
          ...state.coins,
          detail: action.payload,
        },
        type: action.type,
      }
    },
    [walletActions.actionGetDetailChains]: (state, action) => {
      if (!action || !action.payload) return
      return {
        ...state,
        chains: action.payload,
        type: action.type,
      }
    },
    [walletActions.actionGetAddressWallet]: (state, action) => {
      if (!action || !action.payload) return
      return {
        ...state,
        address: action.payload,
        type: action.type,
      }
    },
    [walletActions.actionPostWithdrawl]: (state, action) => {
      return {
        ...state,
        type: action.type,
      }
    },
  },
})
