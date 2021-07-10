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
import { useCallback } from "react";

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
    email: "",
    password: "",
    confirmPassword: "",
    invitorUid: "",
    isHidePassword: true,
    isHideConfirmPassword: true,
    registerCode: "",
  });

  const [isShowModalCode, setIsShowModalCode] = useState(false);

  // ====== Function ====== //

  const _onChangeValInput = (text, key) => {
    setValInput((prevState) => ({
      ...prevState,
      [key]: text,
    }));
  };

  const validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
    } else return true;
  };

  const _handleSendCodeRegister = () => {
    const { email, password, confirmPassword } = valInput;

    let checkValidateEmail = validateEmail(email);

    if (!checkValidateEmail) {
      createAlert("Warning", "Email is Not Correct");
      return false;
    }

    if (!email || !password || !confirmPassword) {
      createAlert("Warning", "Please complete all information!");
      return false;
    }
    if (password.trim().length < 8) {
      createAlert("Warning", "Password at least 8 characters!");
      return false;
    }
    if (password.trim() !== confirmPassword.trim()) {
      createAlert("Warning", "Confirm Password is wrong!");
      return false;
    }
    postSendRegisterCodeAsync({ email: email.trim() });
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
      email: email.trim(),
      password: password.trim(),
      confirmPassword: confirmPassword.trim(),
      registerCode: registerCode.trim(),
      invitorUid: invitorUid.trim(),
    });
  };

  const createAlert = (title, msg) =>
    Alert.alert(title, msg, [{ text: "OK", style: "cancel" }]);

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
    if (!!userReducer.error && userReducer.type === "@user/signup-error") {
      createAlert("Signup failed", userReducer.error);
      return;
    }

    if (userReducer.type === "@user/signup") {
      setIsShowModalCode(false);
      createAlert("Notification", "Sign Up Success!");
      navigation.replace("LoginScreen");
    } else if (userReducer.type === "@user/sendRegisterCode") {
      setIsShowModalCode(true);
    }
  }, [userReducer]);

  return (
    <>
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
                      onChangeText={(text) =>
                        _onChangeValInput(text, "password")
                      }
                      value={valInput.password}
                      placeholder="Password*"
                      placeholderTextColor={COLORS.white}
                      secureTextEntry={valInput.isHidePassword}
                      autoCapitalize="none"
                    />
                    <TouchableOpacity
                      style={{ position: "absolute", top: 0, right: 0, padding: 6 }}
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
                      style={{ position: "absolute", top: 0, right: 0, padding: 6 }}
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
                    onChangeText={(text) =>
                      _onChangeValInput(text, "invitorUid")
                    }
                    value={valInput.invitorUid}
                    placeholder={"Sponsor ID (option)"}
                    placeholderTextColor={COLORS.white}
                    keyboardType={"default"}
                    autoCapitalize="none"
                  />
                </View>
                <View style={styles.viewAlreadyLogin}>
                  <Text style={styles.textAlready}>
                    Already have an account?
                  </Text>
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
                    <Text style={{ color: COLORS.white }}>
                      Get Register Code
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.viewJuridical}>
                  <Text style={styles.textJuridical}>
                    By singinup, your accept
                  </Text>
                  <OpenURLButton url={"https://thisoption.com/terms"}>
                    Term of Use &nbsp;
                  </OpenURLButton>
                  <Text style={styles.textJuridical}>and</Text>
                  <OpenURLButton url={"https://thisoption.com/policies"}>
                    Privacy Policy.
                  </OpenURLButton>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isShowModalCode}
        onRequestClose={() => {
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
            <View style={styles.viewBtnModal}>
              <View style={styles.viewCreateAccount}>
                <TouchableOpacity
                  style={styles.touch__createAccount}
                  onPress={() => {
                    setIsShowModalCode(false);
                  }}
                >
                  <Text style={{ color: COLORS.white }}>Cancel</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  ...styles.viewBtnRegister,
                  flex: 1,
                  marginHorizontal: 5,
                  marginTop: 35,
                }}
              >
                <TouchableOpacity
                  style={styles.touch__register}
                  onPress={_handeSignup}
                >
                  <Text style={{ color: COLORS.white, marginHorizontal: 30 }}>
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SignupScreen;
