import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import IconBack from "../../assets/icons/fontAwesome/IconBack";
import IconEyePass from "../../assets/icons/fontAwesome/IconEyePass";
import IconHome from "../../assets/icons/fontAwesome/IconHome";
import logo from "../../assets/icons/logo_default.png";
import { COLORS, FONTS, SIZES } from "../../constant";

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

export const LoginScreen = ({ navigation }) => {
  const [text, onChangeText] = useState("Useless Text");
  const [valInput, setValInput] = useState({
    email: "",
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

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: 20,
          paddingRight: 20,
          // backgroundColor: "rgba(0, 0, 0, 0.189)",
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
            // backgroundColor: "rgba(131, 17, 17, 0.189)",
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
                ...FONTS.h1,
                fontFamily: "RobotoBlack",
                fontSize: 26,
                marginLeft: SIZES.padding / 2,
              }}
            >
              EXTONS
            </Text>
          </View>
        </View>
      </View>

      <View
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
            onPress={() => setTab(tabLogin["EMAIL"])}
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
            onPress={() => setTab(tabLogin["PHONE"])}
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
      </View>

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
          paddingLeft: 25,
          paddingRight: 25,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextInput
          style={styles.input}
          onChangeText={(text) => _onChangeValInput(text, "email")}
          value={valInput.email}
          placeholder="Email"
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
              width={18}
              height={18}
              active={valInput.isSetPassword}
            />
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
