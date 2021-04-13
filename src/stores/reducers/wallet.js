import { createSlice } from "@reduxjs/toolkit";
import * as walletActions from "../actions/wallet";


export default createSlice({
    name: "wallet",
    initialState: {
        trading: {
            data: [],
            detail: {},
            type: ""
        },
        investment: {
            data: [],
            detail: {},
            type: ""
        },
        partner: {
            data: [],
            detail: {},
            type: ""
        }
    },
    reducers: {},
    extraReducers: {
        [walletActions.actionGetAllTrading]: (state, action) => {
            if (!action || !action.payload) return;
            return {
                ...state,
                trading: {
                    ...state.trading,
                    data: action.payload,
                    type: action.type
                }
            }
        },
        [walletActions.actionGetDetailTrading]: (state, action) => {
            if (!action || !action.payload) return;
            return {
                ...state,
                trading: {
                    ...state.trading,
                    detail: action.payload,
                    type: action.type
                }
            }
        },
        [walletActions.actionGetAllInvestment]: (state, action) => {
            if (!action || !action.payload) return;
            return {
                ...state,
                investment: {
                    ...state.investment,
                    data: action.payload,
                    type: action.type
                }
            }
        },
        [walletActions.actionGetDetailInvestment]: (state, action) => {
            if (!action || !action.payload) return;
            return {
                ...state,
                investment: {
                    ...state.investment,
                    detail: action.payload,
                    type: action.type
                }
            }
        },
        [walletActions.actionGetAllPartner]: (state, action) => {
            if (!action || !action.payload) return;
            return {
                ...state,
                partner: {
                    ...state.partner,
                    data: action.payload,
                    type: action.type
                }
            }
        },
        [walletActions.actionGetDetailPartner]: (state, action) => {
            if (!action || !action.payload) return;
            return {
                ...state,
                partner: {
                    ...state.partner,
                    detail: action.payload,
                    type: action.type
                }
            }
        },
    }
})