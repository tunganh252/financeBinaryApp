import apiService from "../../api";

const MarketServices = {};

MarketServices.GET_ALL_COINS = async () => {
    return await apiService.GET(`/v1/market/coins`)
}
MarketServices.GET_DETAIL_MAKE_PAIRS_COIN = async (cointCode) => {
    return await apiService.GET(`/v1/market/${cointCode}/pairs`)
}

export default MarketServices;