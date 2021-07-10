import { createAction } from '@reduxjs/toolkit'

export const actionGetAllCoins = createAction('@wallet/get-all-coins')
export const actionGetDetailCoins = createAction('@wallet/get-detail-coins')

export const actionAssetTransfer = createAction('@wallet/post-asset-transfer')
export const actionDepositCoin = createAction('@wallet/post-deposit-coin')
export const actionWithDrawalCoin = createAction('@wallet/post-withdrawal-coin')

export const actionGetDetailChains = createAction('@wallet/get-detail-chains')
export const actionGetAddressWallet = createAction('@wallet/get-address-wallet')

export const actionPostWithdrawl = createAction('@wallet/post-create-withdrawal')
