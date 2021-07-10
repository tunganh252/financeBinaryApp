import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { EXTONS_USER_LOCAL } from "../../../constant/data";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Authenticate = ({ navigation, handleIsLogin, isPassLogin = false }) => {
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    if (!!isPassLogin) {
      setIsLogin(true);
      return true;
    }

    async function getUserIsLogin() {
      const dataUserIsLogin = await AsyncStorage.getItem(EXTONS_USER_LOCAL);
      let dataCheck = JSON.parse(dataUserIsLogin);
      if (!dataCheck && !dataCheck?.accessToken) setIsLogin(false);
      else setIsLogin(true);
    }

    getUserIsLogin();
  }, []);

  useEffect(() => {
    if (isLogin === false) {
      navigation.replace("LoginScreen");
    } else if (isLogin === true) {
      handleIsLogin(true);
    }
  }, [isLogin]);

  return <></>;
};

Authenticate.propTypes = {
  navigation: PropTypes.any,
  handleIsLogin: PropTypes.func,
  isPassLogin: PropTypes.bool,
};

export default Authenticate;
