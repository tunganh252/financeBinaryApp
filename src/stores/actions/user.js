import { createAction } from "@reduxjs/toolkit";

export const actionLoginUser = createAction("@user/login");
export const actionSendRegisterCode = createAction("@user/sendRegisterCode");
export const actionSignupUser = createAction("@user/signup");
export const actionLogout = createAction("@user/logout");