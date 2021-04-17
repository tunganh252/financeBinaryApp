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
  ScrollView,
  Linking,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

import IconBack from "../../assets/icons/fontAwesome/IconBack";
import IconEyePass from "../../assets/icons/fontAwesome/IconEyePass";
import logo from "../../assets/icons/logo_default.png";

import { COLORS } from "../../constant";
import { styles } from "./styles";

import { useAsync } from "../../components/common/hooks/useAsyncState";
import {
  useUserSendRegisterCodeSetting,
  useUserSignupSetting,
} from "../../services/module/user";

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

  const [valInput, setValInput] = useState({
    email: "tunganh2521999@gmail.com",
    password: "123",
    confirmPassword: "123",
    invitorUid: "",
    isHidePassword: false,
    isHideConfirmPassword: false,
    registerCode: "",
  });

  const [isShowModalCode, setIsShowModalCode] = useState(true);

  // ====== Function ====== //

  const _onChangeValInput = (text, key) => {
    setValInput((prevState) => ({
      ...prevState,
      [key]: text,
    }));
  };

  const _handleSendCodeRegister = () => {
    const { email, password, confirmPassword } = valInput;

    if (!email || !password || !confirmPassword) {
      createAlert("Warning", "Please complete all information!");
      return false;
    }
    if (password !== confirmPassword) {
      createAlert("Warning", "Confirm Password is wrong");
      return false;
    }
    postSendRegisterCodeAsync({ email });
  };

  const _handeSignup = () => {
    const {
      email,
      password,
      confirmPassword,
      invitorUid,
      registerCode,
    } = valInput;

    if (!registerCode) {
      createAlert("Warning", "Please enter register code!");
      return false;
    }
    setValInput((prevState) => ({ ...prevState, registerCode: "" }));
    postSignupUserAsync({
      email: email,
      password,
      confirmPassword,
      registerCode,
      invitorUid,
    });
  };

  const createAlert = (title, msg) =>
    Alert.alert(title, msg, [{ text: "OK", style: "cancel" }]);

  //======== Effect - lifeCycle =========//
  useEffect(() => {
    if (userReducer.type === "@user/signup") {
      navigation.replace("LoginScreen");
      createAlert("Notification", "Sign Up Success!");
    } else if (userReducer.type === "@user/sendRegisterCode") {
      setIsShowModalCode(true);
    }
  }, [userReducer]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEnabled={false}>
        {(postSignupUserStatus === "loading" ||
          postSendRegisterCodeStatus === "loading") && <LoadingScreen />}

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

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.viewForm}>
              <View>
                <TextInput
                  style={styles.viewForm__input}
                  onChangeText={(text) => _onChangeValInput(text, "email")}
                  value={valInput.email}
                  placeholder={"Email*"}
                  placeholderTextColor={COLORS.white}
                  keyboardType={"email-address"}
                  autoCapitalize="none"
                />
                <View style={{ marginTop: 40, position: "relative" }}>
                  <TextInput
                    style={styles.viewForm__input}
                    onChangeText={(text) => _onChangeValInput(text, "password")}
                    value={valInput.password}
                    placeholder="Password*"
                    placeholderTextColor={COLORS.white}
                    secureTextEntry={valInput.isHidePassword}
                    autoCapitalize="none"
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
                      active={valInput.isHidePassword}
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
                    placeholder="Confirm Password*"
                    placeholderTextColor={COLORS.white}
                    secureTextEntry={valInput.isHideConfirmPassword}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    style={{ position: "absolute", top: 0, right: 0 }}
                    onPress={() =>
                      setValInput((prevState) => ({
                        ...prevState,
                        isHideConfirmPassword: !valInput.isHideConfirmPassword,
                      }))
                    }
                  >
                    <IconEyePass
                      width={25}
                      height={25}
                      active={valInput.isHideConfirmPassword}
                      color={COLORS.white}
                    />
                  </TouchableOpacity>
                </View>

                <TextInput
                  style={{ ...styles.viewForm__input, marginTop: 40 }}
                  onChangeText={(text) => _onChangeValInput(text, "invitorUid")}
                  value={valInput.invitorUid}
                  placeholder={"Sponsor ID (option)"}
                  placeholderTextColor={COLORS.white}
                  keyboardType={"default"}
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.viewAlreadyLogin}>
                <Text style={styles.textAlready}>Already have an account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push("LoginScreen");
                  }}
                >
                  <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewBtnRegister}>
                <TouchableOpacity
                  style={styles.touch__register}
                  onPress={_handleSendCodeRegister}
                >
                  <Text style={{ color: COLORS.white }}>Get Register Code</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isShowModalCode}
          onRequestClose={() => {
            console.log("modal has been closed");
            setIsShowModalCode(!isShowModalCode);
          }}
        >
          <View style={styles.viewCardModal}>
            <View>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: "800",
                  top: 20,
                  right: 20,
                }}
              >
                X
              </Text>
            </View>
            <View style={[styles.viewContentModal, styles.shadow]}>
              <TextInput
                style={styles.viewForm__input}
                onChangeText={(text) => _onChangeValInput(text, "registerCode")}
                value={valInput.registerCode}
                placeholder="Register Code"
                placeholderTextColor={COLORS.white}
                autoCapitalize="none"
              />
              <View style={styles.viewBtnRegister}>
                <TouchableOpacity
                  style={styles.touch__register}
                  onPress={_handeSignup}
                >
                  <Text style={{ color: COLORS.white, marginHorizontal: 30 }}>
                    {" "}
                    Signup{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
