import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";
import { useDispatch } from "react-redux";
import IconBack from "../../assets/icons/fontAwesome/IconBack";
import IconEyePass from "../../assets/icons/fontAwesome/IconEyePass";
import logo from "../../assets/icons/logo_default.png";
import { useAsync } from "../../components/common/hooks/useAsyncState";
import { COLORS, FONTS, SIZES } from "../../constant";
import { useUserSetting } from "../../services/module/user";

import { styles } from "./styles";

const tabLogin = {
  EMAIL: {
    name: "Email Login",
    key: "email",
  },
  PHONE: {
    name: "Phone Login",
    key: "phone",
  },
};

const valInputState = {
  email: "",
  phone: "",
  password: "",
  isSetPassword: true,
};

export const LoginScreen = ({ navigation }) => {
  const { state: userReducer, post: postLoginUser } = useUserSetting();
  const { execute: postLoginUserAsync, status: postLoginUserStatus } = useAsync(
    postLoginUser
  );

  const dispatcher = useDispatch();
  const lineRef = useRef();

  const [valInput, setValInput] = useState({
    email: "",
    phone: "",
    password: "",
    isSetPassword: true,
  });
  const [tab, setTab] = useState(tabLogin["EMAIL"]);

  const _onChangeValInput = (text, key) => {
    setValInput((prevState) => ({
      ...prevState,
      [key]: text,
    }));
  };

  const _handleSetTab = (key) => {
    setTab(tabLogin[key]);
    setValInput(valInputState);
  };

  useEffect(() => {
    lineRef.current.animateNextTransition();

    setTimeout(() => {
      // let userLocal = localStorage.getItem("test");
      // if (!!userRducer && Object.keys(userLocal).length > 0) return false;

      let username = "tunganh2521999@gmail.com";
      let password = "tunganh2521999";
      postLoginUserAsync({ username, password });
    }, 3000);
  }, []);

  useEffect(() => {
    if (!!userReducer && Object.keys(userReducer).length > 0) {
      // localStorage.setItem("test", userRducer);
    }
  }, [userReducer]);

  console.log(postLoginUserStatus);
  console.log("data-___: ", userReducer);

  return (
    <SafeAreaView style={styles.container}>
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

      <Transitioning.View
        ref={lineRef}
        // transition={_transitionLineRun}
        style={styles.viewTabHeader}
      >
        <View style={{ position: "relative", flex: 1 }}>
          <Text
            style={{
              ...styles.tabHeader__text,
              color: tab.key === "email" ? COLORS.primary : COLORS.gray,
            }}
            onPress={() => _handleSetTab("EMAIL")}
          >
            Email Login
          </Text>

          {tab.key === "email" && (
            <View style={styles.viewLine}>
              <Text style={styles.viewLine__text} />
            </View>
          )}
        </View>

        <View style={{ position: "relative", flex: 1 }}>
          <Text
            style={{
              ...styles.tabHeader__text,
              color: tab.key === "phone" ? COLORS.primary : COLORS.gray,
            }}
            onPress={() => _handleSetTab("PHONE")}
          >
            Phone Login
          </Text>

          {tab.key === "phone" && (
            <View style={styles.viewLine}>
              <Text style={styles.viewLine__text} />
            </View>
          )}
        </View>
      </Transitioning.View>

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
            _onChangeValInput(text, tab.key === "email" ? "email" : "phone")
          }
          value={tab.key === "email" ? valInput.email : valInput.phone}
          placeholder={tab.key === "email" ? "Email" : "Phone number"}
          keyboardType={tab.key === "phone" ? "numeric" : "default"}
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
          <TouchableOpacity
            style={styles.touch__login}
            onPress={() => {
              console.log("login");
            }}
          >
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
