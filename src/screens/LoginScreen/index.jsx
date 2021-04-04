import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import IconBack from "../../assets/icons/fontAwesome/IconBack";
import IconEyePass from "../../assets/icons/fontAwesome/IconEyePass";
import logo from "../../assets/icons/logo_default.png";
import { useAsync } from "../../components/common/hooks/useAsyncState";
import { COLORS } from "../../constant";
import { useUserSetting } from "../../services/module/user";

import Loop from "../../components/common/Loop";

import { styles } from "./styles";
import { EXTONS_USER_LOCAL } from "../../constant/data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

import ModalTest from "react-native-modal";

const dataTabLogin = [
  {
    name: "Email Login",
    key: "EMAIL",
  },
  {
    name: "Phone Login",
    key: "PHONE",
  },
];

const valInputState = {
  email: "",
  phone: "",
  password: "",
  isSetPassword: true,
};

export const LoginScreen = ({ navigation }) => {
  // ====== Stores ====== //

  const { state: userReducer, post: postLoginUser } = useUserSetting();
  const { execute: postLoginUserAsync, status: postLoginUserStatus } = useAsync(
    postLoginUser
  );

  const stateReducer = useSelector((state) => state);

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
    console.log(valInput);
    const { email, phone, password } = valInput;

    if (tab.key === "EMAIL" && (!email || !password)) {
      createAlert("Warning", "Please fill in full data A !!!");
      return false;
    } else if (tab.key === "PHONE" && (!phone || !password)) {
      createAlert("Warning", "Please fill in full data B !!!");
      return false;
    }

    switch (tab.key) {
      case "EMAIL": {
        if (tab.key === "EMAIL" && (!email || !password)) {
          createAlert("Warning", "Please fill in full data A !!!");
          return false;
        }
        postLoginUserAsync({ email, password });
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
    Alert.alert(title, msg, [
      // {
      //   text: "Cancel",
      //   onPress: () => console.log("Cancel Pressed"),
      //   style: "cancel",
      // },
      { text: "OK", style: "cancel" },
    ]);

  //======== Effect - lifeCycle =========//

  useEffect(() => {
    async function getDataLocal() {
      const dataUserLocal = await AsyncStorage.getItem(EXTONS_USER_LOCAL);
      if (!dataUserLocal) return console.log("Chưa login");

      console.log("Đã Login");
    }

    getDataLocal();
  }, []);

  // useEffect(() => {
  //   if (!userReducer.accessToken || !userReducer.refreshToken) return;
  //   const jsonValue = JSON.stringify(userReducer);
  //   AsyncStorage.setItem(EXTONS_USER_LOCAL, jsonValue);
  // }, [userReducer]);

  console.log(stateReducer);

  return (
    <SafeAreaView style={styles.container}>
      {postLoginUserStatus === "loading" && (
        <View>
          <Text>Loading</Text>
          <Text>Loading</Text>
          <Text>Loading</Text>
          <Text>Loading</Text>
          <Text>Loading</Text>
        </View>
      )}

      <View style={styles.viewBlockHeader}>
        <TouchableOpacity
          style={{ width: 50, justifyContent: "center" }}
          onPress={() => navigation.navigate("MainScreen")}
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
        <TextInput
          style={styles.viewForm__input}
          onChangeText={(text) =>
            _onChangeValInput(text, tab.key === "EMAIL" ? "email" : "phone")
          }
          value={tab.key === "EMAIL" ? valInput.email : valInput.phone}
          placeholder={tab.key === "EMAIL" ? "Email" : "Phone number"}
          keyboardType={tab.key === "PHONE" ? "numeric" : "default"}
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
