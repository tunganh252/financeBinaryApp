import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  bigtitle: {
    fontFamily: 'RobotoMedium',
    fontSize: 16,
    color: 'white',
    fontWeight: "600"
  },
})
const Medium = (props) => {
  const { style } = props
  return <Text style={[styles.bigtitle, style]}>{props.children}</Text>
}

export default Medium
