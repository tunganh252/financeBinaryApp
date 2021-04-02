import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";
import { useDispatch } from "react-redux";
import IconBack from "../../assets/icons/fontAwesome/IconBack";
import IconEyePass from "../../assets/icons/fontAwesome/IconEyePass";
import logo from "../../assets/icons/logo_default.png";
import { COLORS, FONTS, SIZES } from "../../constant";
import { loginUser } from "../../stores/actions/user";

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

  const _transitionLineRun = () => {
    return (
      <Transition.Together>
        <Transition.In
          type="slide-right"
          durationMs={1500}
          interpolation="easeInOut"
        />
        <Transition.In type="fade" />
      </Transition.Together>
    );
  };

  useEffect(() => {
    lineRef.current.animateNextTransition();

    setTimeout(() => {
      let email = "tunganh2521999@gmail.com";
      let pass = "tunganh252";
      dispatcher(loginUser({ email, pass }));
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        <TouchableOpacity
          style={{ width: 50, justifyContent: "center" }}
          onPress={() => navigation.navigate("MainScreen")}
        >
          <IconBack width={18} height={18} />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            marginRight: SIZES.padding * 5,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={logo}
              resizeMode="contain"
              style={{ width: 40, height: 40 }}
            />
            <Text
              style={{
                fontFamily: "RobotoBlack",
                fontSize: 24,
                marginLeft: SIZES.padding / 2,
              }}
            >
              EXTONS
            </Text>
          </View>
        </View>
      </View>

      <Transitioning.View
        ref={lineRef}
        // transition={_transitionLineRun}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 45,
        }}
      >
        <View style={{ position: "relative", flex: 1 }}>
          <Text
            style={{
              ...FONTS.body3,
              textAlign: "center",
              paddingBottom: 15,
              color: tab.key === "email" ? COLORS.primary : COLORS.gray,
            }}
            onPress={() => _handleSetTab("EMAIL")}
          >
            Email Login
          </Text>

          {tab.key === "email" && (
            <View
              style={{
                flex: 1,
                maxHeight: 0.7,
                backgroundColor: COLORS.primary,
                color: COLORS.primary,
              }}
            >
              <Text
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.primary,
                  width: "100%",
                  height: 0.7,
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                }}
              />
            </View>
          )}
        </View>

        <View style={{ position: "relative", flex: 1 }}>
          <Text
            style={{
              ...FONTS.body3,
              textAlign: "center",
              paddingBottom: 15,
              color: tab.key === "phone" ? COLORS.primary : COLORS.gray,
            }}
            onPress={() => _handleSetTab("PHONE")}
          >
            Phone Login
          </Text>

          {tab.key === "phone" && (
            <View
              style={{
                flex: 1,
                maxHeight: 0.7,
                backgroundColor: COLORS.primary,
                color: COLORS.primary,
              }}
            >
              <Text
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.primary,
                  width: "100%",
                  height: 0.7,
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                }}
              />
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

      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding2 * 2,
          paddingLeft: SIZES.padding2 * 3.5,
          paddingRight: SIZES.padding2 * 3.5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            _onChangeValInput(text, tab.key === "email" ? "email" : "phone")
          }
          value={tab.key === "email" ? valInput.email : valInput.phone}
          placeholder={tab.key === "email" ? "Email" : "Phone number"}
          keyboardType={tab.key === "phone" ? "numeric" : "default"}
        />
        <View style={{ marginTop: 40, position: "relative" }}>
          <TextInput
            style={{ ...styles.input }}
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

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: 35,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log("Forgot password?");
            }}
          >
            <Text
              style={{
                color: COLORS.primary,
              }}
            >
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            alignContent: "center",
            marginTop: 35,
            maxHeight: 40,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.primary,
              color: COLORS.primary,
              borderRadius: 20,
            }}
            onPress={() => {
              console.log("login");
            }}
          >
            <Text style={{ color: COLORS.white }}>Login</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: COLORS.gray }}>Do you have an account?</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignContent: "center",
            marginTop: 25,
            maxHeight: 40,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: COLORS.primary,
              borderWidth: 1,
              borderColor: COLORS.gray,
              borderRadius: 20,
            }}
            onPress={() => {
              console.log("Create an account?");
            }}
          >
            <Text style={{ color: COLORS.black }}>Create an account?</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: 50,
          }}
        >
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: COLORS.lightGray,
  },
  input: {
    height: 40,
    // margin: 12,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
});

export default LoginScreen;
