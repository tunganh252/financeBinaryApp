import React, { useState } from "react";
import Authenticate from "../../common/Authenticate";
import Fund from "../../templates/Fund";

const FundAuthen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(false);

  const _handleCheckIsLogin = (isLogin) => {
    setIsLogin(isLogin);
  };

  return (
    <>
      {isLogin ? (
        <Fund />
      ) : (
        <Authenticate
          navigation={navigation}
          handleIsLogin={_handleCheckIsLogin}
        />
      )}
    </>
  );
};

export default FundAuthen;
