import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
})

const SafeAreaViewCustom = ({ children, style, ...rest }) => {
  return (
    <SafeAreaView style={[styles.container, style]} {...rest}>
      {children}
    </SafeAreaView>
  )
}

export default SafeAreaViewCustom
