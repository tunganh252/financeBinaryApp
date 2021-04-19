import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionGetAllCoins,
  actionGetDetailCoins,
  actionGetMakePairsCoin,
} from "../../../stores/actions/market";
import MarketServices from "./service";

export const useMarketGetListCoins = () => {
  const state = useSelector((state) => state?.market?.lisCoins);
  const dispatcher = useDispatch();
  const get = async (data) => {
    return await MarketServices.GET_ALL_COINS(data)
      .then(async (response) => {
        if (!response || !response.data) return;
        dispatcher(actionGetAllCoins(response.data));
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return useMemo(() => {
    return {
      state,
      get,
    };
  }, [state]);
};

export const useMarketGetDetailCoins = () => {
  const state = useSelector((state) => state?.market?.coinDetail);
  const dispatcher = useDispatch();
  const get = async (coint) => {
    return await MarketServices.GET_DETAIL_COINS(coint)
      .then(async (response) => {
        if (!response || !response.data) return;
        dispatcher(actionGetDetailCoins(response.data));
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return useMemo(() => {
    return {
      state,
      get,
    };
  }, [state]);
};

export const useMarketGetMakePairsCoin = () => {
  const state = useSelector((state) => state?.market?.makePairs);
  const dispatcher = useDispatch();
  const get = async (data) => {
    return await MarketServices.GET_DETAIL_MAKE_PAIRS_COIN(data)
      .then(async (response) => {
        if (!response || !response.data) return;
        dispatcher(actionGetMakePairsCoin(response.data));
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return useMemo(() => {
    return {
      state,
      get,
    };
  }, [state]);
};
