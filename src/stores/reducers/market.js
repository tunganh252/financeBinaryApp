import { createSlice } from "@reduxjs/toolkit";
import * as marketActions from "../actions/market";

export default createSlice({
  name: "market",
  /**
   * @type {UserReducerType}
   */
  initialState: {
    coinDetail: {},
    listCoins: [],
    makePairs: {
      dataTotalPairs: [],
      dataCoinPairs: [],
    },
  },
  reducers: {},
  extraReducers: {
    [marketActions.actionGetAllCoins]: (state, action) => {
      if (!action || !action.payload) return;

      return { ...state, lisCoins: action.payload };
    },
    [marketActions.actionGetDetailCoins]: (state, action) => {
      if (!action || !action.payload) return;

      return { ...state, coinDetail: action.payload };
    },
    [marketActions.actionGetMakePairsCoin]: (state, action) => {
      if (!action || !action.payload) return;

      return {
        ...state,
        makePairs: {
          ...state.makePairs,
          dataCoinPairs: action.payload,
        },
      };
    },
  },
});
