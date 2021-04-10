import React, { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MainScreen from './screens/MainScreen';
import { useFonts } from 'expo-font';
import Hello from './screens/Hello';
import { useSelector } from "react-redux";
import { useUserCheckToken } from './services/module/user';
import { useAsync } from './components/common/hooks/useAsyncState';

const Stack = createStackNavigator();


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

export default function Container() {
    /**
     * Stores
     */
    const state = useSelector((state) => state);
    console.log(state);

    const { post: postCheckToken } = useUserCheckToken()
    const { execute: postCheckTokenAsync } = useAsync(postCheckToken)


    /**
     * Effect
     */

    useEffect(() => {
        postCheckTokenAsync()
    }, [])

    const [loaded] = useFonts({
        RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
        RobotoBlack: require('./assets/fonts/Roboto-Black.ttf'),
        RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={"MainScreen"}
            >

                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="Hello" component={Hello} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

