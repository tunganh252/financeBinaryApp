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
        test: {}
    },
    reducers: {},
    extraReducers: {
        [userActions.loginUser]: (state, action) => {

            console.log("action: ", action);
            console.log("state: ", state);
            if (!action.payload) return;

            return state;
        },
    }
})