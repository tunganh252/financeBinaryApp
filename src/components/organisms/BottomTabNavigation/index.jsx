import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

// import IconTest from "../../../assets/icons/fontAwesome/test.svg";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { COLORS } from "../../../constant";
import IconMarket from "../../../assets/icons/fontAwesome/IconMarket";
import IconHome from "../../../assets/icons/fontAwesome/IconHome";
import IconTrade from "../../../assets/icons/fontAwesome/IconTrade";
import IconInvestment from "../../../assets/icons/fontAwesome/IconInvestment";
import IconFund from "../../../assets/icons/fontAwesome/IconFund";
import logo from "../../../assets/icons/logo_default.png";
import TestApp from "../../atoms/TestApp";

const Tab = createBottomTabNavigator();

export const dataTabNavigation = [
  {
    name: "Market",
    component: TestPage2,
    icon: ({ width, color }) => {
      return <IconMarket width={width} color={color} />;
    },
  },
  {
    name: "Trade",
    component: TestPage1,
    icon: ({ width, color }) => {
      return <IconTrade width={width} color={color} />;
    },
  },
  {
    name: "Home",
    component: TestApp,
    icon: ({ width, color }) => {
      return <IconHome width={width} color={color} />;
    },
  },
  {
    name: "Investment",
    component: TestPage2,
    icon: ({ width, color }) => {
      return <IconInvestment width={width} color={color} />;
    },
  },
  {
    name: "Fund",
    component: TestPage1,
    icon: ({ width, color }) => {
      return <IconFund width={width} color={color} />;
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

const CustomTabBar = (props) => {
  return <BottomTabBar {...props.props} />;
};

const BottomTabNavigation = ({ navigation }) => {
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
                    fontSize: 12,
                  }}
                >
                  {item.name}
                </Text>
              );
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  width="15px"
                  color={focused ? COLORS.yellow : COLORS.gray}
                />
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
                      // width: 50,
                      // height: 50,
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
          backgroundColor: COLORS.white,
          elevation: 0,
        },
      }}
      tabBar={(props) => <CustomTabBar props={props} />}
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
