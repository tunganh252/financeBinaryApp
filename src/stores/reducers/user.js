import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit'
import { EXTONS_USER_LOCAL } from '../../constant/data';
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
        [userActions.actionLoginUser]: (state, action) => {
            if (!action.payload) return;

            let dataUser = {
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                expires: action.payload.expires,
            }
            const jsonValue = JSON.stringify(dataUser);
            AsyncStorage.setItem(EXTONS_USER_LOCAL, jsonValue);

            return {
                ...state,
                ...dataUser,
                type: action.type,
            };
        },

        [userActions.actionSendRegisterCode]: (state, action) => {
            return { ...state, type: action.type }
        },

        [userActions.actionSignupUser]: (state, action) => {
            return { ...state, type: action.type }
        },

        [userActions.actionLogout]: (state, action) => {
            AsyncStorage.removeItem(EXTONS_USER_LOCAL)
            console.log("Logout thành công...");
            return {
                ...state,
                accessToken: "",
                refreshToken: "",
                expires: "",
                type: action.type
            }
        },

        [userActions.actionCheckTokenToSave]: (state, action) => {
            return {
                ...state,
                ...action.payload,
                type: action.type
            }
        }
    }
})