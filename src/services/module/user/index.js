import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserServices from "./service";
import {
  actionLoginUser,
  actionLogout,
  actionSignupUser,
  actionClearDataUser,
  actionSendRegisterCode,
  actionCheckTokenToSave,
  actionCheckLoginError,
  actionRefreshState,
  actionCheckSignUpError,
} from "../../../stores/actions/user";
import { EXTONS_USER_LOCAL } from "../../../constant/data";
import AsyncStorage from "@react-native-async-storage/async-storage";

// hook connect api --> redux
export const useUserLoginSetting = () => {
  const state = useSelector((state) => state?.user);
  const dispatcher = useDispatch();
  const post = async (data) => {
    dispatcher(actionRefreshState());
    return await UserServices.POST_LOGIN_USER(data)
      .then(async (response) => {
        if (!response || !response.data) return;
        dispatcher(actionLoginUser(response.data));
      })
      .catch((err) => {
        let msg = err?.error?.data?.message || "Invalid credentials.";
        dispatcher(actionCheckLoginError(msg));
      });
  };

  return useMemo(() => {
    return {
      state,
      post,
    };
  }, [state]);
};

export const useUserSignupSetting = () => {
  const state = useSelector((state) => state?.user);
  const dispatcher = useDispatch();
  const post = async (data) => {
    dispatcher(actionRefreshState());
    return await UserServices.POST_SIGNUP_USER(data)
      .then(async (response) => {
        if (!response || !response.data) return;
        if (!response.data?.success && response.data?.errors) {
          let msgError = "";
          msgError = response.data?.errors[0] || "Invalid credentials.";
          dispatcher(actionCheckSignUpError(msgError));
          return;
        }

        dispatcher(actionSignupUser(response.data));
      })
      .catch((err) => {
        let msg = err?.error?.data?.message || "Invalid credentials.";
        dispatcher(actionCheckSignUpError(msg));
      });
  };

  return useMemo(() => {
    return {
      state,
      post,
    };
  }, [state]);
};
export const useUserSendRegisterCodeSetting = () => {
  const state = useSelector((state) => state?.user);
  const dispatcher = useDispatch();
  const post = async (data) => {
    dispatcher(actionRefreshState());
    return await UserServices.POST_SEND_RIGSTER_CODE(data)
      .then(async (response) => {
        if (!response || !response.data) return;
        dispatcher(actionSendRegisterCode(response.data));
      })
      .catch((err) => {
        let msg = err?.error?.data?.message || "Invalid credentials.";
        dispatcher(actionCheckSignUpError(msg));
      });
  };

  return useMemo(() => {
    return {
      state,
      post,
    };
  }, [state]);
};

export const useUserLogout = () => {
  const state = useSelector((state) => state?.user);
  const dispatcher = useDispatch();
  const post = async (data) => {
    return await UserServices.POST_LOGOUT_USER(data)
      .then(async (response) => {
        console.log(response);
        dispatcher(actionLogout());
      })
      .catch((err) => {
        dispatcher(actionLogout());
        console.log("err: ", err);
      });
  };

  return useMemo(() => {
    return {
      state,
      post,
    };
  }, [state]);
};

export const useUserCheckToken = () => {
  const state = useSelector((state) => state?.user);
  const dispatcher = useDispatch();

  const post = async (navigation) => {
    let userLocalStorage = await AsyncStorage.getItem(EXTONS_USER_LOCAL);
    let dataCheck = JSON.parse(userLocalStorage) || {};

    // console.log("navigation: ", navigation);
    // console.log("check TOken:__ ", dataCheck);
    // console.log("xxxxx ", timeStampNow);
    // console.log("yyyyy ", dataCheck.expires);

    let timeStampNow = Math.floor(Date.now() / 1000);

    if (!!dataCheck && Object.keys(dataCheck).length <= 0) return;

    if (
      dataCheck.expires - timeStampNow <= 600 ||
      timeStampNow > dataCheck.expires
    ) {
      console.log("call API refresh token");
      AsyncStorage.removeItem(EXTONS_USER_LOCAL);
      dispatcher(actionClearDataUser());
      navigation.replace("MainScreen");

      // return await UserServices.POST_REFRESH_TOKEN(dataCheck)
      //     .then(res => {
      //         console.log(res);
      //     })
      //     .catch(err => {
      //         console.log(err);
      //     })
    }
    // else {
    //     console.log("Lưu state redux");
    //     dispatcher(actionCheckTokenToSave(dataCheck))
    // }
  };

  return useMemo(() => {
    return {
      state,
      post,
    };
  }, [state]);
};
