import apiService from "../../api";

const WalletServices = {};


WalletServices.GET_ALL_TRADINGS = async () => {
    return await apiService.GET(`/v1/wallet/tradings`, { isPrivate: true });
}
WalletServices.GET_DETAIL_TRADINGS = async (coin) => {
    return await apiService.GET(`/v1/wallet/${coin}/tradings`, { isPrivate: true });
}

WalletServices.GET_ALL_INVESTMENTS = async () => {
    return await apiService.GET(`/v1/wallet/investments`, { isPrivate: true });
}
WalletServices.GET_DETAIL_INVESTMENTS = async (coin) => {
    return await apiService.GET(`/v1/wallet/${coin}/investments`, { isPrivate: true });
}

WalletServices.GET_ALL_PARTNERS = async () => {
    return await apiService.GET(`/v1/wallet/partners`, { isPrivate: true });
}
WalletServices.GET_DETAIL_PARTNERS = async (coin) => {
    return await apiService.GET(`/v1/wallet/${coin}/partners`, { isPrivate: true });
}



export default WalletServices;