import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import MainScreen from './screens/MainScreen'
import Profile from './screens/Profile'
import { useFonts } from 'expo-font'
import Wallet from 'components/templates/Wallet'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
}

const config = {
  screens: {
    Profile: {
      path: 'profile',
      screens: {
        General: 'general',
        Security: 'security',
        ModifyPassword: 'modifypassword',
        Email: 'email',
        KYC: 'kyc',
      },
    },
    wallet: {
      path: 'wallet',
      screens: {
        DetailFinance: 'finance',
        ConfirmWithDraw: 'confirm-withdraw',
      },
    },
  },
}

const linking = {
  // prefixes: ['https://mychat.com', 'mychat://'],
  config,
}

export default function Container() {
  const [loaded] = useFonts({
    RobotoRegular: require('../src/assets/fonts/Roboto-Regular.ttf'),
    RobotoBlack: require('../src/assets/fonts/Roboto-Black.ttf'),
    RobotoMedium: require('../src/assets/fonts/Roboto-Medium.ttf'),
    RobotoBold: require('../src/assets/fonts/Roboto-Bold.ttf'),
    RobotoCondensed: require('../src/assets/fonts/RobotoCondensed-Regular.ttf'),
  })
  if (!loaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme} linking={linking}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'MainScreen'}>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="wallet" component={Wallet} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
