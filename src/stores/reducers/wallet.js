import { createSlice } from "@reduxjs/toolkit";
import * as walletActions from "../actions/wallet";


export default createSlice({
    name: "wallet",
    initialState: {
        trading: {
            data: [],
            detail: {},
            type: ""
        }
    },
    reducers: {},
    extraReducers: {
        [walletActions.actionGetAllTrading]: (state, action) => {

            console.log(action);
            return {
                ...state,
                trading: {
                    ...state.trading,
                    data: action.payload,
                    type: action.type
                }
            }
        }
    }
})