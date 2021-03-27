import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

// import IconTest from "../../../assets/icons/fontAwesome/test.svg";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../../constant";
import IconMarket from "../../../constant/icons/IconMarket";

const Tab = createBottomTabNavigator();

const Container = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
const TextStyle = styled.Text`
  font-size: 18px;
  color: red;
  font-weight: 500;
`;

function TestPage(params) {
  return (
    <View>
      <Text>TestPage</Text>
    </View>
  );
}

const CustomTabBar = (props) => {
  return <BottomTabBar {...props.props} />;
};

const BottomTabNavigation = ({ navigation }) => {
  return (
    <Container>
      <TextStyle>asdasdasdadaddasdaddasdaddas</TextStyle>
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
        <Tab.Screen
          name="Home"
          component={TestPage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <IconMarket />

                // <Image
                //   source={IconMarket}
                //   resizeMode="contain"
                //   style={{
                //     width: 25,
                //     height: 25,
                //     //   tintColor: focused ? COLORS.white : COLORS.secondary,
                //   }}
                // />

                // <IconMarket/>
              );
            },
            // tabBarButton: (props) => <TabBarCustomButton {...props} />,
          }}
        />
        {/* <Tab.Screen
                    name="Scan"
                    component={Scan}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={icons.scan}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.white : COLORS.secondary
                                }}
                            />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }}
                /> */}
        {/* <Tab.Screen
          name="User"
          component={SignUp}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.user}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.white : COLORS.secondary,
                }}
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />,
          }}
        /> */}
      </Tab.Navigator>
    </Container>
  );
};

export default BottomTabNavigation;
