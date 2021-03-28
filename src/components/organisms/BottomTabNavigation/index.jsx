import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

// import IconTest from "../../../assets/icons/fontAwesome/test.svg";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../../constant";
import IconMarket from "../../../assets/icons/fontAwesome/IconMarket";
import IconHome from "../../../assets/icons/fontAwesome/IconHome";
import IconTrade from "../../../assets/icons/fontAwesome/IconTrade";
import IconInvestment from "../../../assets/icons/fontAwesome/IconInvestment";
import IconFund from "../../../assets/icons/fontAwesome/IconFund";
import Svg, { Path } from "react-native-svg";

const Tab = createBottomTabNavigator();

export const dataTabNavigation = [
  {
    name: "Home",
    component: TestPage1,
    icon: ({ width }) => {
      return <IconHome width={width} />;
    },
  },
  {
    name: "Market",
    component: TestPage2,
    icon: ({ width }) => {
      return <IconMarket width={width} />;
    },
  },
  {
    name: "Trade",
    component: TestPage1,
    icon: ({ width }) => {
      return <IconTrade width={width} />;
    },
  },
  {
    name: "Investment",
    component: TestPage2,
    icon: ({ width }) => {
      return <IconInvestment width={width} />;
    },
  },
  {
    name: "Fund",
    component: TestPage1,
    icon: ({ width }) => {
      return <IconFund width={width} />;
    },
  },
];

function TestPage1(params) {
  return (
    <View>
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
    <View>
      <Text>TestPag2</Text>
      <Text>TestPag2</Text>
      <Text>TestPag2</Text>
      <Text>TestPag2</Text>
      <Text>TestPag2</Text>
      <Text>TestPag2</Text>
      <Text>TestPag2</Text>
    </View>
  );
}

const CustomTabBar = (props) => {
  return <BottomTabBar {...props.props} />;
};

const TabBarCustomButton = ({
  accessibilityLabel,
  accessibilityState,
  children,
  onPress,
}) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 0,
          }}
        >
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
          {/* <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg> */}
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.primary,
            ...styles.shadow,
          }}
          onPress={onPress}
        >
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
          width: 50,
          height: 50,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
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
            tabBarIcon: ({ focused }) => {
              return focused ? <Icon width="50px" /> : <Icon width="100px" />;
            },
            tabBarButton: (props) => <TabBarCustomButton {...props} />,
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
          backgroundColor: "transparent",
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
