import React, { useState } from "react";
import Authenticate from "../../common/Authenticate";
import Wallet from "../../templates/Wallet";

const WalletAuthen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(false);

  const _handleCheckIsLogin = (isLogin) => {
    setIsLogin(isLogin);
  };

  return (
    <>
      {isLogin ? (
        <Wallet navigation={navigation} />
      ) : (
        <Authenticate
          navigation={navigation}
          handleIsLogin={_handleCheckIsLogin}
        />
      )}
    </>
  );
};

export default WalletAuthen;
