import { createAction } from "@reduxjs/toolkit";

export const actionLoginUser = createAction("@user/login");
export const actionLogout = createAction("@user/logout");