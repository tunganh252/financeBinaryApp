import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import IconBack from "../../assets/icons/fontAwesome/IconBack";
import logo from "../../assets/icons/logo_default.png";
import { COLORS, FONTS, SIZES } from "../../constant";

export const SignupAndLogin = ({ navigation }) => {
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
          onPress={() => navigation.navigate("MainPage")}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    backgroundColor: COLORS.lightGray,
  },
});

export default SignupAndLogin;
