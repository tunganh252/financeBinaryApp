import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WalletServices from "./service"
import { actionGetAllTrading } from '../../../stores/actions/wallet';


export const useWalletTradingGetAllSetting = () => {
    const state = useSelector(state => (state?.wallet?.trading));
    const dispatcher = useDispatch();

    const get = async (data) => {
        return await WalletServices.GET_ALL_TRADINGS(data)
            .then(async (response) => {
                if (!response || !response.data) return;
                dispatcher(actionGetAllTrading(response.data))
            })
            .catch((err) => {
                console.log("err: ", err);
            })
    }

    return useMemo(() => {
        return {
            state,
            get
        }
    }, [state])
}

