import { createAction } from "@reduxjs/toolkit";

export const actionLoginUser = createAction("@user/login");
export const actionSendRegisterCode = createAction("@user/sendRegisterCode");
export const actionSignupUser = createAction("@user/signup");
export const actionLogout = createAction("@user/logout");
export const actionCheckTokenToRefresh = createAction("@user/check-token-to-refresh")
export const actionCheckTokenToSave = createAction("@user/check-token-to-save")