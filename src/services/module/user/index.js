import { useMemo } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';


import UserServices from './service';
import { actionLoginUser, actionLogout, actionSignupUser, actionSendRegisterCode } from '../../../stores/actions/user';


// Connect state
const userSettingSelector = createSelector(
    state => state?.user,
    (userState) => {
        return { ...userState }
    }
)


// hook connect api --> redux
export const useUserLoginSetting = () => {
    const state = useSelector(userSettingSelector);
    const dispatcher = useDispatch();
    const post = async (data) => {
        return await UserServices.POST_LOGIN_USER(data)
            .then(async (response) => {
                if (!response || !response.data) return;
                dispatcher(actionLoginUser(response.data));
            }).catch(err => {
                console.log("err: ", err);
            })
    }

    return useMemo(() => {
        return {
            state,
            post
        }
    }, [state]);
}

export const useUserSignupSetting = () => {
    const state = useSelector(userSettingSelector);
    const dispatcher = useDispatch();
    const post = async (data) => {
        return await UserServices.POST_SIGNUP_USER(data)
            .then(async (response) => {
                if (!response || !response.data) return;
                dispatcher(actionSignupUser(response.data));
            }).catch(err => {
                console.log("err: ", err);
            })
    }

    return useMemo(() => {
        return {
            state,
            post
        }
    }, [state]);
}
export const useUserSendRegisterCodeSetting = () => {
    const state = useSelector(userSettingSelector);
    const dispatcher = useDispatch();
    const post = async (data) => {
        return await UserServices.POST_SEND_RIGSTER_CODE(data)
            .then(async (response) => {
                if (!response || !response.data) return;
                dispatcher(actionSendRegisterCode(response.data));
            }).catch(err => {
                console.log("err: ", err);
            })
    }

    return useMemo(() => {
        return {
            state,
            post
        }
    }, [state]);
}


export const useUserLogout = () => {
    const state = useSelector(userSettingSelector);
    const dispatcher = useDispatch();
    const post = async (data) => {
        return await UserServices.POST_LOGOUT_USER(data)
            .then(async (response) => {
                console.log(response);
                dispatcher(actionLogout());
            }).catch(err => {
                dispatcher(actionLogout());
                console.log("err: ", err);
            })
    }

    return useMemo(() => {
        return {
            state,
            post
        }
    }, [state]);
}