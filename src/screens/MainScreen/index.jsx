import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAsync } from "../../components/common/hooks/useAsyncState";
import { useUserCheckToken } from "../../services/module/user";

import BottomTabNavigation from "../../components/organisms/BottomTabNavigation";

const MainScreen = ({ navigation }) => {
  /**
   * Stores
   */
  const state = useSelector((state) => state);
  console.log(
    "%c Redux__Stores:__",
    "background: #00a65a; color: #fff; font-size: 15px", state
  );

  const { post: postCheckToken } = useUserCheckToken();
  const { execute: postCheckTokenAsync } = useAsync(postCheckToken);

  /**
   * Effect
   */
  useEffect(() => {
    postCheckTokenAsync(navigation);
  }, []);

  return <BottomTabNavigation navigation={navigation} />;
};

export default MainScreen;
