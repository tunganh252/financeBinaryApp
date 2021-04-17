import React, { useState, useEffect } from "react";
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
} from "react-native";

import IconBack from "../../assets/icons/fontAwesome/IconBack";
import IconEyePass from "../../assets/icons/fontAwesome/IconEyePass";
import logo from "../../assets/icons/logo_default.png";

import { COLORS } from "../../constant";
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
    // email: "",
    // password: "",
    email: "tunganh2521999@gmail.com",
    password: "tunganh252",
    isSetPassword: true,
  });

  const [email, setEmail] = useState('')


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
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
      // AlertIOS.alert("",msg);
    }
    console.log(AlertIOS);
  }

  //======== Effect - lifeCycle =========//
  useEffect(() => {
    if (!userReducer.accessToken || !userReducer.refreshToken) return;
    notifyMessage("Login successfull")
    navigation.replace("MainScreen");
  }, [JSON.stringify(userReducer)]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
                    setValInput(prevState => ({ ...prevState, email: value }))
                  }}
                  value={valInput.email}
                />

                <View style={{ marginTop: 40, position: "relative" }}>
                  <TextInput
                    style={styles.viewForm__input}
                    onChangeText={(value) => {
                      setValInput(prevState => ({ ...prevState, password: value }))
                    }}
                    value={valInput.password}
                    autoCapitalize="none"
                    placeholder="Password"
                    placeholderTextColor={COLORS.white}
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
                      color={COLORS.white}
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
                    navigation.navigate("SignupScreen");
                  }}
                >
                  <Text style={{ color: COLORS.white }}>Create an account?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>

    </SafeAreaView>
  );
};

export default LoginScreen;
