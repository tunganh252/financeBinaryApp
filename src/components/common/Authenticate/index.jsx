import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { EXTONS_USER_LOCAL } from "../../../constant/data";
import LoginScreen from "../../../screens/LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * @typedef {Object} ConditionProps
 * @property {{ condition: boolean, component: React.Component }} If
 * @property {Array<{ cond: boolean, component: React.Component }>} ElseIf
 * @property {React.Component} Else
 */

/**
 * @param {ConditionProps} props
 */

const Authenticate = ({ navigation, componentRender, isPassLogin = false }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!!isPassLogin) {
      setIsLogin(true);
      return true;
    }

    async function getUserIsLogin() {
      const dataUserIsLogin = await AsyncStorage.getItem(EXTONS_USER_LOCAL);
      if (!dataUserIsLogin && !!dataUserIsLogin?.accessToken) {
        setIsLogin(false);
      } else setIsLogin(true);
    }

    getUserIsLogin();
  }, []);

  //   useEffect(() => {
  //     if (!isLogin) {
  //       navigation.navigate("LoginScreen");
  //     }
  //   }, [isLogin]);

  return <>{isLogin ? componentRender : LoginScreen}</>;
};

Authenticate.propTypes = {
  navigation: PropTypes.any,
  componentRender: PropTypes.any,
  isPassLogin: PropTypes.bool,
};

export default Authenticate;
