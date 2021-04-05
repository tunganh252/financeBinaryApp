import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import IconBack from "../../assets/icons/fontAwesome/IconBack";
import IconEyePass from "../../assets/icons/fontAwesome/IconEyePass";
import logo from "../../assets/icons/logo_default.png";

import { COLORS } from "../../constant";
import { dataTabLogin, valInputState } from "./constant";
import { styles } from "./styles";

import { useAsync } from "../../components/common/hooks/useAsyncState";
import { useUserSetting } from "../../services/module/user";

import Loop from "../../components/common/Loop";

import { EXTONS_USER_LOCAL } from "../../constant/data";
import LoadingScreen from "../../components/atoms/LoadingScreen";

export const LoginScreen = ({ navigation }) => {
  // ====== Stores ====== //

  const { state: userReducer, post: postLoginUser } = useUserSetting();
  const { execute: postLoginUserAsync, status: postLoginUserStatus } = useAsync(
    postLoginUser
  );

  // ====== State ====== //
  const [tab, setTab] = useState(dataTabLogin[0]);

  const [valInput, setValInput] = useState({
    email: "",
    phone: "",
    password: "",
    isSetPassword: true,
  });

  // ====== Function ====== //

  const _onChangeValInput = (text, key) => {
    setValInput((prevState) => ({
      ...prevState,
      [key]: text,
    }));
  };

  const _handleSetTab = (dataTab) => {
    setTab(dataTab);
    setValInput(valInputState);
  };

  const _handleLogin = () => {
    const { email, phone, password } = valInput;

    switch (tab.key) {
      case "EMAIL": {
        if (tab.key === "EMAIL" && (!email || !password)) {
          createAlert("Warning", "Please fill in full data A !!!");
          return false;
        }
        postLoginUserAsync({ username: email, password });
        break;
      }
      case "PHONE": {
        if (tab.key === "PHONE" && (!phone || !password)) {
          createAlert("Warning", "Please fill in full data B !!!");
          return false;
        }
        createAlert("Login", "Login with phone...");
        break;
      }

      default:
        break;
    }
  };

  const createAlert = (title, msg) =>
    Alert.alert(title, msg, [{ text: "OK", style: "cancel" }]);

  //======== Effect - lifeCycle =========//

  useEffect(() => {
    async function getDataLocal() {
      const dataUserLocal = await AsyncStorage.getItem(EXTONS_USER_LOCAL);
      if (!dataUserLocal) {
        console.log("login screen: KHÔNG có user local");
        return false;
      }

      console.log("login screen: CÓ user local");
      console.log(dataUserLocal);
    }

    getDataLocal();
  }, []);

  useEffect(() => {
    if (!userReducer.accessToken || !userReducer.refreshToken) return;
    const jsonValue = JSON.stringify(userReducer);
    AsyncStorage.setItem(EXTONS_USER_LOCAL, jsonValue);
    createAlert("Success", "Login success...");
    navigation.replace("MainScreen");
  }, [userReducer]);


  return (
    <SafeAreaView style={styles.container}>
      {postLoginUserStatus === "loading" && <LoadingScreen />}

      <View style={styles.viewBlockHeader}>
        <TouchableOpacity
          style={{ width: 50, justifyContent: "center" }}
          onPress={() => navigation.replace("MainScreen")}
        >
          <IconBack width={18} height={18} />
        </TouchableOpacity>

        <View style={styles.viewIcon}>
          <View style={styles.viewIcon__block}>
            <Image
              source={logo}
              resizeMode="contain"
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.viewIcon__block_text}>EXTONS</Text>
          </View>
        </View>
      </View>

      <View style={styles.viewTabHeader}>
        <Loop
          dataSet={dataTabLogin}
          onRender={(item) => {
            return (
              <View style={{ position: "relative", flex: 1 }} key={item.key}>
                <Text
                  style={{
                    ...styles.tabHeader__text,
                    color: tab.key === item.key ? COLORS.primary : COLORS.gray,
                  }}
                  onPress={() => _handleSetTab(item)}
                >
                  {item.name}
                </Text>

                {tab.key === item.key && (
                  <View style={styles.viewLine}>
                    <Text style={styles.viewLine__text} />
                  </View>
                )}
              </View>
            );
          }}
        />
      </View>

      <View style={{ flex: 1, maxHeight: 3 }}>
        <Text
          style={{
            backgroundColor: COLORS.gray,
            height: 0.5,
          }}
        />
      </View>
      <View style={styles.viewForm}>
        <View>
          <TextInput
            style={styles.viewForm__input}
            onChangeText={(text) =>
              _onChangeValInput(text, tab.key === "EMAIL" ? "email" : "phone")
            }
            value={tab.key === "EMAIL" ? valInput.email : valInput.phone}
            placeholder={tab.key === "EMAIL" ? "Email" : "Phone number"}
            keyboardType={tab.key === "EMAIL" ? "email-address" : "numeric"}
          />
          <View style={{ marginTop: 40, position: "relative" }}>
            <TextInput
              style={styles.viewForm__input}
              onChangeText={(text) => _onChangeValInput(text, "password")}
              value={valInput.password}
              placeholder="Password"
              secureTextEntry={valInput.isSetPassword}
            />
            <TouchableOpacity
              style={{ position: "absolute", top: 0, right: 0 }}
              onPress={() =>
                setValInput((prevState) => ({
                  ...prevState,
                  isSetPassword: !valInput.isSetPassword,
                }))
              }
            >
              <IconEyePass
                width={25}
                height={25}
                active={valInput.isSetPassword}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.viewForgotPass}>
          <TouchableOpacity
            onPress={() => {
              console.log("Forgot password?");
            }}
          >
            <Text style={{ color: COLORS.primary }}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewBtnLogin}>
          <TouchableOpacity style={styles.touch__login} onPress={_handleLogin}>
            <Text style={{ color: COLORS.white }}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewHaveAccount}>
          <Text style={{ color: COLORS.gray }}>Do you have an account?</Text>
        </View>

        <View style={styles.viewCreateAccount}>
          <TouchableOpacity
            style={styles.touch__createAccount}
            onPress={() => {
              console.log("Create an account?");
            }}
          >
            <Text style={{ color: COLORS.black }}>Create an account?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewLanguage}>
          <TouchableOpacity
            onPress={() => {
              console.log("Language");
            }}
          >
            <Text>English</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
