import { useMemo } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';


import UserServices from './service';
import { loginUser } from '../../../stores/actions/user';


// Connect state
const userSettingSelector = createSelector(
    state => state?.user,
    (userState) => {
        return { ...userState }
    }
)


// hook connect api --> redux
export const useUserSetting = () => {
    const state = useSelector(userSettingSelector);
    const dispatcher = useDispatch();
    const post = async (data) => {
        return await UserServices.POST_LOGIN_USER(data)
            .then(async (response) => {
                if (!response || !response.data) return;
                dispatcher(loginUser(response.data));
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