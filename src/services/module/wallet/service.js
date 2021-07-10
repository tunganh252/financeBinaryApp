import apiService from '../../api'

const WalletServices = {}

let TYPE_TRADING = 0
let TYPE_INVESTMENT = 1
let TYPE_PARTNER = 2

let TYPE_DEPOSIT = 3
let TYPE_WITHDRAW = 4

/**
 *
 * @param {*number} type 0: Tradings, 1: Investments, 2: Partners
 * @returns
 */
WalletServices.GET_ALL_COINS_WALLET = async (type = 0) => {
  switch (type) {
    case TYPE_TRADING: {
      return await apiService.GET(`/v1/wallet/tradings`, { isPrivate: true })
    }
    case TYPE_INVESTMENT: {
      return await apiService.GET(`/v1/wallet/investments`, { isPrivate: true })
    }
    case TYPE_PARTNER: {
      return await apiService.GET(`/v1/wallet/partners`, { isPrivate: true })
    }

    default:
      break
  }
}

/**
 *
 * @param {*string} coin btc, tons, eth...
 * @param {*number} type 0: Tradings, 1: Investments, 2: Partners
 * @returns
 */
WalletServices.GET_DETAIL_COINS_WALLET = async (coin, type) => {
  switch (type) {
    case TYPE_TRADING: {
      return await apiService.GET(`/v1/wallet/${coin}/tradings`, {
        isPrivate: true,
      })
    }
    case TYPE_INVESTMENT: {
      return await apiService.GET(`/v1/wallet/${coin}/investments`, {
        isPrivate: true,
      })
    }
    case TYPE_PARTNER: {
      return await apiService.GET(`/v1/wallet/${coin}/partners`, {
        isPrivate: true,
      })
    }
    default:
      break
  }
}

WalletServices.POST_DEPOSIT_COIN = async (coin) => {
  return await apiService.POST(`v1/wallet/${coin}/deposit`, {
    isPrivate: true,
  })
}

WalletServices.POST_ASSET_TRANSFER = async () => {
  return await apiService.POST(`/v1/wallet/asset-transfer`, {
    isPrivate: true,
  })
}

WalletServices.POST_WITHDRAWAL_COIN = async (coin) => {
  return await apiService.POST(`/v1/wallet/${coin}/withdrawal`, {
    isPrivate: true,
  })
}

WalletServices.GET_DETAIL_CHAIN = async (coin, type) => {
  if (type === TYPE_DEPOSIT) {
    return await apiService.GET(`/v1/wallet/deposit-chains?coin=${coin}`)
  } else if (type === TYPE_WITHDRAW) {
    return await apiService.GET(`/v1/wallet/withdrawal-chains?coin=${coin}`)
  }
}

WalletServices.GET_ADDRESS_WALLET = async (coin, chain, type) => {
  if (type === TYPE_DEPOSIT) {
    return await apiService.GET(`/v1/wallet/deposit-address?coin=${coin}&chain=${chain}`, { isPrivate: true })
  } else if (type === TYPE_WITHDRAW) {
    return await apiService.GET(`/v1/wallet/withdrawal-address?coin=${coin}&chain=${chain}`, { isPrivate: true })
  }
}

WalletServices.POST_CREATE_WITHDRAW = async (data) => {
  return await apiService.POST(`/api/v1/wallet/withdrawal`, data, {
    isPrivate: true,
  })
}

export default WalletServices
