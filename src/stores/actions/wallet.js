import { createAction } from "@reduxjs/toolkit";

export const actionGetAllTrading = createAction("@wallet/get-all-trading")
export const actionGetDetailTrading = createAction("@wallet/get-detail-trading")

export const actionGetAllInvestment = createAction("@wallet/get-all-investment")
export const actionGetDetailInvestment = createAction("@wallet/get-detail-investment")

export const actionGetAllPartner = createAction("@wallet/get-all-partner")
export const actionGetDetailPartner = createAction("@wallet/get-detail-partner")

