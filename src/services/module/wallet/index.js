import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import WalletServices from './service'
import {
  actionAssetTransfer,
  actionDepositCoin,
  actionGetAddressWallet,
  actionGetAllCoins,
  actionGetDetailChains,
  actionGetDetailCoins,
  actionPostWithdrawl,
  actionWithDrawalCoin,
} from '../../../stores/actions/wallet'

let TYPE_TRADING = 0
let TYPE_INVESTMENT = 1
let TYPE_PARTNER = 2

let TYPE_DEPOSIT = 3
let TYPE_WITHDRAW = 4

export const useWalletTradingGetAllSetting = () => {
  const state = useSelector((state) => state?.wallet?.coins)
  const dispatcher = useDispatch()

  const get = async () => {
    return await WalletServices.GET_ALL_COINS_WALLET(TYPE_TRADING)
      .then(async (response) => {
        if (!response || !response.data) return
        dispatcher(actionGetAllCoins(response.data))
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  return useMemo(() => {
    return {
      state,
      get,
    }
  }, [state])
}

export const useWalletTradingGetDetailSetting = () => {
  const state = useSelector((state) => state?.wallet?.coins?.detail)
  const dispatcher = useDispatch()

  const get = async (coin) => {
    return await WalletServices.GET_DETAIL_COINS_WALLET(coin, TYPE_TRADING)
      .then(async (response) => {
        if (!response || !response.data) return
        dispatcher(actionGetDetailCoins(response.data))
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  return useMemo(() => {
    return {
      state,
      get,
    }
  }, [state])
}

export const useWalletInvestmentGetAllSetting = () => {
  const state = useSelector((state) => state?.wallet?.coins)
  const dispatcher = useDispatch()

  const get = async () => {
    return await WalletServices.GET_ALL_COINS_WALLET(TYPE_INVESTMENT)
      .then(async (response) => {
        if (!response || !response.data) return
        dispatcher(actionGetAllCoins(response.data))
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  return useMemo(() => {
    return {
      state,
      get,
    }
  }, [state])
}

export const useWalletInvestmentGetDetailSetting = () => {
  const state = useSelector((state) => state?.wallet?.coins?.detail)
  const dispatcher = useDispatch()

  const get = async (coin) => {
    return await WalletServices.GET_DETAIL_COINS_WALLET(coin, TYPE_INVESTMENT)
      .then(async (response) => {
        if (!response || !response.data) return
        dispatcher(actionGetDetailCoins(response.data))
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  return useMemo(() => {
    return {
      state,
      get,
    }
  }, [state])
}

export const useWalletPartnerGetAllSetting = () => {
  const state = useSelector((state) => state?.wallet?.coins)
  const dispatcher = useDispatch()

  const get = async () => {
    return await WalletServices.GET_ALL_COINS_WALLET(TYPE_PARTNER)
      .then(async (response) => {
        if (!response || !response.data) return
        dispatcher(actionGetAllCoins(response.data))
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  return useMemo(() => {
    return {
      state,
      get,
    }
  }, [state])
}

export const useWalletPartnerGetDetailSetting = () => {
  const state = useSelector((state) => state?.wallet?.coins?.detail)
  const dispatcher = useDispatch()

  const get = async (coin) => {
    return await WalletServices.GET_DETAIL_COINS_WALLET(coin, TYPE_PARTNER)
      .then(async (response) => {
        if (!response || !response.data) return
        dispatcher(actionGetDetailCoins(response.data))
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  return useMemo(() => {
    return {
      state,
      get,
    }
  }, [state])
}

export const useWalletDepositCoinSetting = () => {
  const state = useSelector((state) => state?.wallet)
  const dispatcher = useDispatch()

  const get = async () => {
    return await WalletServices.POST_DEPOSIT_COIN()
      .then(async (response) => {
        if (!response || !response.data) return
        dispatcher(actionDepositCoin(response.data))
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  return useMemo(() => {
    return {
      state,
      get,
    }
  }, [state])
}
export const useWalletWithDrawalSetting = () => {
  const state = useSelector((state) => state?.wallet)
  const dispatcher = useDispatch()

  const get = async () => {
    return await WalletServices.POST_WITHDRAWAL_COIN()
      .then(async (response) => {
        if (!response || !response.data) return
        dispatcher(actionWithDrawalCoin(response.data))
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  return useMemo(() => {
    return {
      state,
      get,
    }
  }, [state])
}

export const useWalletAssetTransferSetting = () => {
  const state = useSelector((state) => state?.wallet)
  const dispatcher = useDispatch()

  const get = async () => {
    return await WalletServices.POST_ASSET_TRANSFER()
      .then(async (response) => {
        if (!response || !response.data) return
        dispatcher(actionAssetTransfer(response.data))
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  return useMemo(() => {
    return {
      state,
      get,
    }
  }, [state])
}

export const useGetDepositChains = () => {
  const state = useSelector((state) => state?.wallet?.chains)
  const dispatcher = useDispatch()

  const get = async (coin) => {
    return await WalletServices.GET_DETAIL_CHAIN(coin, TYPE_DEPOSIT)
      .then(async (response) => {
        if (!response || !response.data) return
        dispatcher(actionGetDetailChains(response.data))
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  return useMemo(() => {
    return {
      state,
      get,
    }
  }, [state])
}

export const useGetWithDrawChains = () => {
  const state = useSelector((state) => state?.wallet?.chains)
  const dispatcher = useDispatch()

  const get = async (coin) => {
    return await WalletServices.GET_DETAIL_CHAIN(coin, TYPE_WITHDRAW)
      .then(async (response) => {
        if (!response || !response.data) return
        dispatcher(actionGetDetailChains(response.data))
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  return useMemo(() => {
    return {
      state,
      get,
    }
  }, [state])
}

export const useGetAddressDeposit = () => {
  const state = useSelector((state) => state?.wallet?.address)
  const dispatcher = useDispatch()

  const get = async (coin, chain) => {
    return await WalletServices.GET_ADDRESS_WALLET(coin, chain, TYPE_DEPOSIT)
      .then(async (response) => {
        if (!response || !response.data) return
        dispatcher(actionGetAddressWallet(response.data))
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  return useMemo(() => {
    return {
      state,
      get,
    }
  }, [state])
}

export const useCreateWithdrawal = () => {
  const state = useSelector((state) => state?.wallet?.address)
  const dispatcher = useDispatch()

  /**
   * @param {data} data data request post create withdrawal
   * @typedef {Object} data
   * @property {*string} coin // "tons"
   * @property {*string} chain // "trc20"
   * @property {*string} address // scan qr code deposit
   * @property {*string} emailOtpCode // email login
   * @property {*string} googleOtpCode //
   * @property {number} amount //
   */

  const post = async (data) => {
    return await WalletServices.POST_CREATE_WITHDRAW(data)
      .then(async (response) => {
        if (!response || !response.data) return
        dispatcher(actionPostWithdrawl(response.data))
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  return useMemo(() => {
    return {
      state,
      post,
    }
  }, [state])
}
