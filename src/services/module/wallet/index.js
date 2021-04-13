import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WalletServices from "./service"
import { actionGetAllInvestment, actionGetAllPartner, actionGetAllTrading, actionGetDetailInvestment, actionGetDetailPartner, actionGetDetailTrading } from '../../../stores/actions/wallet';


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

export const useWalletTradingGetAllSetting = () => {
    const state = useSelector(state => (state?.wallet?.trading));
    const dispatcher = useDispatch();

    const get = async (coin) => {
        return await WalletServices.GET_DETAIL_TRADINGS(coin)
            .then(async (response) => {
                if (!response || !response.data) return;
                dispatcher(actionGetDetailTrading(response.data))
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

export const useWalletInvestmentGetAllSetting = () => {
    const state = useSelector(state => (state?.wallet?.trading));
    const dispatcher = useDispatch();

    const get = async (data) => {
        return await WalletServices.GET_ALL_INVESTMENTS(data)
            .then(async (response) => {
                if (!response || !response.data) return;
                dispatcher(actionGetAllInvestment(response.data))
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

export const useWalletInvestmentGetAllSetting = () => {
    const state = useSelector(state => (state?.wallet?.trading));
    const dispatcher = useDispatch();

    const get = async (coin) => {
        return await WalletServices.GET_DETAIL_INVESTMENTS(coin)
            .then(async (response) => {
                if (!response || !response.data) return;
                dispatcher(actionGetDetailInvestment(response.data))
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


export const useWalletPartnerGetAllSetting = () => {
    const state = useSelector(state => (state?.wallet?.trading));
    const dispatcher = useDispatch();

    const get = async (data) => {
        return await WalletServices.GET_ALL_PARTNERS(data)
            .then(async (response) => {
                if (!response || !response.data) return;
                dispatcher(actionGetAllPartner(response.data))
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

export const useWalletPartnerGetAllSetting = () => {
    const state = useSelector(state => (state?.wallet?.trading));
    const dispatcher = useDispatch();

    const get = async (coin) => {
        return await WalletServices.GET_DETAIL_PARTNERS(coin)
            .then(async (response) => {
                if (!response || !response.data) return;
                dispatcher(actionGetDetailPartner(response.data))
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

