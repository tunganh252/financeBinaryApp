import { createSlice } from '@reduxjs/toolkit'
import * as userActions from "../actions/user";

/**
 * @typedef {object} UserReducerType
 * @property {User} info
 */

export default createSlice({
    name: 'user',
    /**
     * @type {UserReducerType}
     */
    initialState: {
        accessToken: "",
        refreshToken: "",
        expires: "",
        type: ""
    },
    reducers: {},
    extraReducers: {
        [userActions.loginUser]: (state, action) => {
            if (!action.payload) return;
            return {
                ...state,
                type: action.type,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                expires: action.payload.expires,
            };
        },
    }
})