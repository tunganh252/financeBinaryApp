import React, { useState, useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import { useFonts } from 'expo-font';
import Hello from './screens/Hello';

const Stack = createStackNavigator();


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

export default function Container() {

    // const { state: userReducer} = useUserSetting();


    const [isLogin, setIsLogin] = useState(false)


    const [loaded] = useFonts({
        RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
        RobotoBlack: require('./assets/fonts/Roboto-Black.ttf'),
        RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }


    // useEffect(() => {
    //     async function getDataLocal() {
    //         const dataUserLocal = await AsyncStorage.getItem(EXTONS_USER_LOCAL);
    //         if (!dataUserLocal) {
    //             console.log("Chưa login");
    //             return false;
    //         }

    //         console.log("Đã Login");
    //         setIsLogin(true)
    //         console.log(dataUserLocal);
    //     }

    //     getDataLocal();
    // }, []);

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={"MainScreen"}
            >

                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="Hello" component={Hello} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

