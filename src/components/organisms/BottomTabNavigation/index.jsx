import React, { useState, useEffect } from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

// import IconTest from "../../../assets/icons/fontAwesome/test.svg";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { COLORS, SIZES } from "../../../constant";
import IconMarket from "../../../assets/icons/fontAwesome/IconMarket";
import IconHome from "../../../assets/icons/fontAwesome/IconHome";
import IconTrade from "../../../assets/icons/fontAwesome/IconTrade";
import IconInvestment from "../../../assets/icons/fontAwesome/IconInvestment";
import IconFund from "../../../assets/icons/fontAwesome/IconFund";
import logo from "../../../assets/icons/logo_default.png";
import TestApp from "../../atoms/TestApp";
import SignupAndLogin from "../../../screens/SignupAndLogin";

const Tab = createBottomTabNavigator();

export const dataTabNavigation = [
  {
    name: "Market",
    component: TestPage2,
    icon: ({ width, color, height }) => {
      return <IconMarket width={width} color={color} height={height} />;
    },
  },
  {
    name: "Trade",
    component: TestPage1,
    icon: ({ width, color, height }) => {
      return <IconTrade width={width} color={color} height={height} />;
    },
  },
  {
    name: "Home",
    component: TestApp,
    icon: ({ width, color, height }) => {
      return <IconHome width={width} color={color} height={height} />;
    },
  },
  {
    name: "Investment",
    component: TestPage2,
    icon: ({ width, color, height }) => {
      return <IconInvestment width={width} color={color} height={height} />;
    },
  },
  {
    name: "Fund",
    component: SignupAndLogin,
    icon: ({ width, color, height }) => {
      return <IconFund width={width} color={color} height={height} />;
    },
  },
];

function TestPage1(params) {
  return (
    <View style={{ marginTop: 50 }}>
      <Text>TestPag1</Text>
      <Text>TestPag1</Text>
      <Text>TestPag1</Text>
      <Text>TestPag1</Text>
      <Text>TestPag1</Text>
      <Text>TestPag1</Text>
      <Text>TestPag1</Text>
    </View>
  );
}
function TestPage2(params) {
  return (
    <View style={{ marginTop: 50, marginLeft: 25 }}>
      <Image
        source={logo}
        width={50}
        height={50}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
}

const BottomTabNavigation = ({ navigation }) => {
  const [state, setState] = useState({
    isLogin: false,
  });

  // useEffect(() => {
  //   if (!state.isLogin) {
  //     setTimeout(() => {
  //       // console.log(navigation);
  //       navigation.navigate("SignupAndLogin");
  //     }, 2000);
  //   }
  // }, []);

  const _loopRenderTab = (data) => {
    if (!data || data.length < 0) return;
    return data.map((item, index) => {
      const { icon: Icon } = item;
      return (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    color: focused ? COLORS.yellow : COLORS.gray,
                    fontSize: SIZES.body5,
                    marginBottom: SIZES.padding / 2,
                  }}
                >
                  {item.name}
                </Text>
              );
            },
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ marginTop: SIZES.padding }}>
                  <Icon
                    width={16.5}
                    height={16.5}
                    color={focused ? COLORS.yellow : COLORS.gray}
                  />
                </View>
              );
            },
            tabBarButton: (props) => (
              <TabBarCustomButton {...props} item={item} />
            ),
            tabBarButton: ({
              // accessibilityLabel,
              accessibilityState,
              children,
              onPress,
            }) => {
              let isSelected = accessibilityState.selected;
              if (isSelected) {
                return (
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <TouchableOpacity onPress={onPress}>
                      {children}
                    </TouchableOpacity>
                  </View>
                );
              } else {
                return (
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    activeOpacity={1}
                    onPress={onPress}
                  >
                    {children}
                  </TouchableOpacity>
                );
              }
            },
          }}
        />
      );
    });
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          // height: 70,
          backgroundColor: COLORS.white,
          elevation: 0,
        },
      }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      {_loopRenderTab(dataTabNavigation)}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default BottomTabNavigation;
