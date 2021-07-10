import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
// import * as LocalAuthentication from 'expo-local-authentication'

const BiometricAuthen = () => {
  // wherever the useState is located
  // const [isBiometricSupported, setIsBiometricSupported] = useState(false)

  // const handleBiometricAuth = async () => {
  //   const savedBiometrics = await LocalAuthentication.isEnrolledAsync()
  //   if (!savedBiometrics)
  //     return alert('Biometric record not found', 'Please verify your identity with your password', 'OK', () => {
  //       console.log('k thanh cong')
  //     })
  //   else return alert(`savedBiometrics: ${savedBiometrics}`)
  // }

  // const handleBiometricAuth1 = async () => {
  //   const biometricAuth = await LocalAuthentication.authenticateAsync({
  //     promptMessage: 'Login with Biometrics',
  //     disableDeviceFallback: true,
  //   })

  //   alert(JSON.stringify(biometricAuth))
  // }

  // // const handleBiometricAuth = async () => {
  // //   const biometricAuth = await LocalAuthentication.authenticateAsync({
  // //     promptMessage: 'Login with Biometrics',
  // //     disableDeviceFallback: true,
  // //   })

  // //   console.log(biometricAuth)
  // // }

  // useEffect(() => {
  //   ;(async () => {
  //     const compatible = await LocalAuthentication.hasHardwareAsync()
  //     setIsBiometricSupported(compatible)
  //   })()
  // })

  return (
    <View>
      {/* <TouchableHighlight onPress={handleBiometricAuth1}>
        <Text>sdfsdfssfsfff</Text>
      </TouchableHighlight>
      <Text>
        {isBiometricSupported
          ? 'Your device is compatible with Biometrics'
          : 'Face or Fingerprint scanner is available on this device'}
      </Text> */}
    </View>
  )
}

export default BiometricAuthen

const styles = StyleSheet.create({})
