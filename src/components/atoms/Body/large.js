import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  bigtitle: {
    fontFamily: 'RobotoBold',
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
})
const Small = (props) => {
  const { style } = props
  return <Text style={[styles.bigtitle, style]}>{props.children}</Text>
}

export default Small
