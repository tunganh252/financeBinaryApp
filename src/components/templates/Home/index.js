import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useUserLogout } from "../../../services/module/user";
import { useAsync } from "../../common/hooks/useAsyncState";

const Home = ({ navigation }) => {
  const { post: postLogoutUser } = useUserLogout();
  const { execute: postLogoutUserAsync } = useAsync(postLogoutUser);

  useEffect(() => {
    postLogoutUserAsync();
    navigation.replace("MainScreen");
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 50, marginLeft: 50 }}>
      <Text>LOGOUT --- DONE</Text>
    </View>
  );
};

export default Home;
