import React, { useState } from "react";
import Authenticate from "common/Authenticate";
import WalletMain from "components/templates/Wallet/Screens/Main";

const Wallet_Authen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(false);

  const _handleCheckIsLogin = (isLogin) => {
    setIsLogin(isLogin);
  };

  return (
    <>
      {isLogin ? (
        <WalletMain navigation={navigation} />
      ) : (
        <Authenticate
          navigation={navigation}
          handleIsLogin={_handleCheckIsLogin}
        />
      )}
    </>
  );
};

export default Wallet_Authen;
