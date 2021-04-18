import { createAction } from "@reduxjs/toolkit";

export const actionRefreshState = createAction("@user/refresh-default");

export const actionLoginUser = createAction("@user/login");
export const actionCheckLoginError = createAction("@user/login-error");

export const actionSendRegisterCode = createAction("@user/sendRegisterCode");
export const actionCheckSignUpError = createAction("@user/signup-error");

export const actionSignupUser = createAction("@user/signup");
export const actionLogout = createAction("@user/logout");
export const actionCheckTokenToRefresh = createAction("@user/check-token-to-refresh")
export const actionCheckTokenToSave = createAction("@user/check-token-to-save")
export const actionClearDataUser= createAction("@user/clear-token-user")