import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Platform,
  ToastAndroid,
  KeyboardAvoidingView,
  AlertIOS,
  ScrollView,
  Linking,
} from "react-native";

import IconBack from "../../assets/icons/fontAwesome/IconBack";
import IconEyePass from "../../assets/icons/fontAwesome/IconEyePass";
import logo from "../../assets/icons/logo_default.png";

import { COLORS, FONTS } from "../../constant";
import { styles } from "./styles";

import { useAsync } from "../../components/common/hooks/useAsyncState";
import { useUserLoginSetting } from "../../services/module/user";

import LoadingScreen from "../../components/atoms/LoadingScreen";

export const LoginScreen = ({ navigation }) => {
  // ====== Stores ====== //

  const { state: userReducer, post: postLoginUser } = useUserLoginSetting();
  const { execute: postLoginUserAsync, status: postLoginUserStatus } = useAsync(
    postLoginUser
  );

  // ====== State ====== //
  const [valInput, setValInput] = useState({
    email: "",
    password: "",
    // email: "tunganh2521999@gmail.com",
    // password: "tunganh252",
    isHidePassword: true,
  });

  // ====== Function ====== //

  const _handleLogin = () => {
    const { email, password } = valInput;
    if (!email || !password) {
      createAlert("Warning", "Please complete all information!");
      return;
    }
    postLoginUserAsync({ username: email.trim(), password: password.trim() });
  };

  const createAlert = (title, msg) =>
    Alert.alert(title, msg, [{ text: "OK", style: "cancel" }]);

  const notifyMessage = (msg = "") => {
    if (Platform.OS === "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      // AlertIOS.alert("",msg);
      // AlertIOS.alert(
      //   'Sync Complete',
      //   'All your data are belong to us.'
      //  );
    }
    console.log(AlertIOS);
  };

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    // return <Button title={children} onPress={handlePress} />;
    return (
      <TouchableOpacity onPress={handlePress}>
        <Text
          style={{ color: COLORS.primary, fontWeight: "600", fontSize: 11 }}
        >
          {children}
        </Text>
      </TouchableOpacity>
    );
  };

  //======== Effect - lifeCycle =========//
  useEffect(() => {
    if (!!userReducer.error && userReducer.type === "@user/login-error") {
      createAlert("Login failed", userReducer.error);
      return;
    }

    if (!userReducer.accessToken || !userReducer.refreshToken) return;
    notifyMessage("Login successfull");
    navigation.replace("MainScreen");
  }, [JSON.stringify(userReducer)]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEnabled={false}>
        {postLoginUserStatus === "loading" && <LoadingScreen />}
        <View style={styles.viewBlockHeader}>
          <TouchableOpacity
            style={{ width: 50, justifyContent: "center" }}
            onPress={() => navigation.replace("MainScreen")}
          >
            <IconBack width={18} height={18} color={COLORS.white} />
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

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.viewForm}>
              <View>
                <TextInput
                  style={styles.viewForm__input}
                  placeholder={"Email"}
                  placeholderTextColor={COLORS.white}
                  keyboardType={"email-address"}
                  autoCapitalize="none"
                  onChangeText={(value) => {
                    setValInput((prevState) => ({
                      ...prevState,
                      email: value,
                    }));
                  }}
                  value={valInput.email}
                />

                <View style={{ marginTop: 40, position: "relative" }}>
                  <TextInput
                    style={styles.viewForm__input}
                    onChangeText={(value) => {
                      setValInput((prevState) => ({
                        ...prevState,
                        password: value,
                      }));
                    }}
                    value={valInput.password}
                    autoCapitalize="none"
                    placeholder="Password"
                    placeholderTextColor={COLORS.white}
                    secureTextEntry={valInput.isHidePassword}
                  />
                  <TouchableOpacity
                    style={{ position: "absolute", top: 0, right: 0 }}
                    onPress={() =>
                      setValInput((prevState) => ({
                        ...prevState,
                        isHidePassword: !valInput.isHidePassword,
                      }))
                    }
                  >
                    <IconEyePass
                      width={25}
                      height={25}
                      color={COLORS.white}
                      active={valInput.isHidePassword}
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
                  <Text style={{ color: COLORS.primary }}>
                    Forgot password?
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.viewBtnLogin}>
                <TouchableOpacity
                  style={styles.touch__login}
                  onPress={_handleLogin}
                >
                  <Text style={{ color: COLORS.white }}>Login</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.viewHaveAccount}>
                <Text style={{ color: COLORS.gray }}>
                  Do you have an account?
                </Text>
              </View>

              <View style={styles.viewCreateAccount}>
                <TouchableOpacity
                  style={styles.touch__createAccount}
                  onPress={() => {
                    console.log("Create an account?");
                    navigation.navigate("SignupScreen");
                  }}
                >
                  <Text style={{ color: COLORS.white }}>
                    Create an account?
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewJuridical}>
                <Text style={styles.textJuridical}>
                  Continue the registration if you agree to
                </Text>
                <OpenURLButton url={"https://thisoption.com/terms"}>
                  Term of Use.
                </OpenURLButton>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
