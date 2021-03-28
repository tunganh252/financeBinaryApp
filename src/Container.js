import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupAndLogin from './pages/SignupAndLogin';
import MainPage from './pages/MainPage';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

export default function Container() {
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
                initialRouteName={'MainPage'}
            >
                <Stack.Screen name="MainPage" component={MainPage} />
                <Stack.Screen name="SignupAndLogin" component={SignupAndLogin} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

