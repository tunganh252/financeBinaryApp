import apiService from "../../api";

const WalletServices = {};


WalletServices.GET_ALL_TRADINGS = async () => {
    return await apiService.GET(`/v1/wallet/tradings`, { isPrivate: true });
}

export default WalletServices;