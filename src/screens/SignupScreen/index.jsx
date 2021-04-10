import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  Modal,
  Pressable,
} from "react-native";

import IconBack from "../../assets/icons/fontAwesome/IconBack";
import IconEyePass from "../../assets/icons/fontAwesome/IconEyePass";
import logo from "../../assets/icons/logo_default.png";

import { COLORS } from "../../constant";
import { dataTabLogin, valInputState } from "./constant";
import { styles } from "./styles";

import { useAsync } from "../../components/common/hooks/useAsyncState";
import {
  useUserSendRegisterCodeSetting,
  useUserSignupSetting,
} from "../../services/module/user";

import Loop from "../../components/common/Loop";

import LoadingScreen from "../../components/atoms/LoadingScreen";

export const SignupScreen = ({ navigation }) => {
  // ====== Stores ====== //

  const {
    state: userReducer,
    post: postSendRegisterCode,
  } = useUserSendRegisterCodeSetting();
  const { post: postSignupUser } = useUserSignupSetting();
  const {
    execute: postSignupUserAsync,
    status: postSignupUserStatus,
  } = useAsync(postSignupUser);
  const {
    execute: postSendRegisterCodeAsync,
    status: postSendRegisterCodeStatus,
  } = useAsync(postSendRegisterCode);

  // ====== State ====== //
  const [tab, setTab] = useState(dataTabLogin[0]);

  const [valInput, setValInput] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    isShowPassword: true,
    isShowConfirmPassword: true,
    registerCode: "",
  });

  const [isShowModalCode, setIsShowModalCode] = useState(false);

  console.log(isShowModalCode);

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
    const { email, phone, password, confirmPassword, registerCode } = valInput;

    switch (tab.key) {
      case "EMAIL": {
        if (tab.key === "EMAIL" && (!email || !password || !confirmPassword)) {
          createAlert("Warning", "Please fill in full data A !!!");
          return false;
        }
        if (password !== confirmPassword) {
          createAlert("Warning", "Confirm Password is wrong");
          return false;
        }

        if (!registerCode) {
          postSendRegisterCodeAsync({ email });
        } else {
          setValInput((prevState) => ({ ...prevState, registerCode: "" }));
          setIsShowModalCode(false);
          postSignupUserAsync({
            email: email,
            password,
            confirmPassword,
            registerCode,
          });
        }

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
    if (userReducer.type === "@user/signup") {
      navigation.replace("LoginScreen");
      createAlert("Notification", "Signup successfull");
    } else if (userReducer.type === "@user/sendRegisterCode") {
      setIsShowModalCode(true);
    }
  }, [userReducer]);

  return (
    <SafeAreaView style={styles.container}>
      {(postSignupUserStatus === "loading" ||
        postSendRegisterCodeStatus === "loading") && <LoadingScreen />}

      <View
        style={{
          backgroundColor: COLORS.blueDark,
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <Modal
          animationType="slide"
          transparent={false}
          visible={isShowModalCode}
          onRequestClose={() => {
            console.log("modal has been closed");
            setIsShowModalCode(!isShowModalCode);
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: COLORS.blueDark,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <TextInput
                style={styles.viewForm__input}
                onChangeText={(text) => _onChangeValInput(text, "registerCode")}
                value={valInput.registerCode}
                placeholder="Register Code"
                placeholderTextColor={COLORS.white}
              />
              <View style={styles.viewBtnLogin}>
                <TouchableOpacity
                  style={styles.touch__login}
                  onPress={_handleLogin}
                >
                  <Text style={{ color: COLORS.white, marginHorizontal: 30 }}>
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.viewBlockHeader}>
        <TouchableOpacity
          style={{ width: 50, justifyContent: "center" }}
          onPress={() => navigation.goBack()}
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
      <View style={styles.viewForm}>
        <View>
          <TextInput
            style={styles.viewForm__input}
            onChangeText={(text) =>
              _onChangeValInput(text, tab.key === "EMAIL" ? "email" : "phone")
            }
            value={tab.key === "EMAIL" ? valInput.email : valInput.phone}
            placeholder={tab.key === "EMAIL" ? "Email" : "Phone number"}
            placeholderTextColor={COLORS.white}
            keyboardType={tab.key === "EMAIL" ? "email-address" : "numeric"}
          />
          <View style={{ marginTop: 40, position: "relative" }}>
            <TextInput
              style={styles.viewForm__input}
              onChangeText={(text) => _onChangeValInput(text, "password")}
              value={valInput.password}
              placeholder="Password"
              placeholderTextColor={COLORS.white}
              secureTextEntry={valInput.isShowPassword}
            />
            <TouchableOpacity
              style={{ position: "absolute", top: 0, right: 0 }}
              onPress={() =>
                setValInput((prevState) => ({
                  ...prevState,
                  isShowPassword: !valInput.isShowPassword,
                }))
              }
            >
              <IconEyePass
                width={25}
                height={25}
                active={valInput.isShowPassword}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 40, position: "relative" }}>
            <TextInput
              style={styles.viewForm__input}
              onChangeText={(text) =>
                _onChangeValInput(text, "confirmPassword")
              }
              value={valInput.confirmPassword}
              placeholder="Confirm Password"
              placeholderTextColor={COLORS.white}
              secureTextEntry={valInput.isShowConfirmPassword}
            />
            <TouchableOpacity
              style={{ position: "absolute", top: 0, right: 0 }}
              onPress={() =>
                setValInput((prevState) => ({
                  ...prevState,
                  isShowConfirmPassword: !valInput.isShowConfirmPassword,
                }))
              }
            >
              <IconEyePass
                width={25}
                height={25}
                active={valInput.isShowConfirmPassword}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.viewBtnLogin}>
          <TouchableOpacity style={styles.touch__login} onPress={_handleLogin}>
            <Text style={{ color: COLORS.white }}>Get Register Code</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.viewBtnLogin,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 12,
              fontWeight: "800",
              marginRight: 5,
            }}
          >
            Already have an account?
          </Text>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              navigation.push("LoginScreen");
            }}
          >
            <Text
              style={{
                color: COLORS.blueLight,
                fontSize: 12,
                fontWeight: "800",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
