import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import TextMedium from '../Body/medium'
import { COLORS } from 'constant/themes'

const ListStyle = StyleSheet.create({
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: COLORS.blueDark,
    borderRadius: 5,
    overflow: 'hidden',
    opacity: 0.5,
    alignItems: 'center',
  },
})

const Button = (props) => {
  const { style, children, onPress, colorText } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[ListStyle.button, style]}>
        <TextMedium style={{ color: colorText ? colorText : COLORS.white }}>{children}</TextMedium>
      </View>
    </TouchableOpacity>
  )
}

export default Button
