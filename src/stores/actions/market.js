import { createAction } from "@reduxjs/toolkit";

export const actionGetAllCoins = createAction("@market/get-all-coins")
export const actionGetDetailCoins = createAction("@market/get-detail-coins")
export const actionGetMakePairsCoin = createAction("@market/get-pairs-coin")