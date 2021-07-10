import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Main from './screens/Main'
import Security from './screens/Security'
import General from './screens/General'
import ModifyPassword from './screens/FiatPassword'
import Email from './screens/Email'
import KYC from './screens/KYC/index'
const Stack = createStackNavigator()
const Profile = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="General" component={General} />
      <Stack.Screen name="ModifyPassword" component={ModifyPassword} />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="KYC" component={KYC} />
    </Stack.Navigator>
  )
}

export default Profile
