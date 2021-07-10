import React, { useState } from 'react'
import { TextInput, StyleSheet, TouchableOpacity, View } from 'react-native'
import TextSmall from '../Body/small'
import IconEyes from '../../../assets/icons/fontAwesome/IconEyePass'
import { COLORS } from 'constant/themes'

const ListStyle = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: COLORS.grayTransparent,
    color: COLORS.lightGray,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 8,
    paddingBottom: 8,
    width: '100%',
    fontFamily: 'RobotoMedium',
    borderRadius: 3,
    fontSize: 16,
  },
})

const FieldPassword = (props) => {
  const { style, placeholder, onChange = () => {}, keyboardType } = props
  const [focus, setFocus] = useState(false)

  const onFocus = () => {
    setFocus(true)
  }
  const onBlur = () => {
    setFocus(false)
  }
  const styleOnFocus = focus ? { borderColor: COLORS.blueLight } : {}
  return (
    <View style={[ListStyle.wrap, style]}>
      <TextInput
        style={[ListStyle.input, styleOnFocus]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.grayTransparent}
        onChangeText={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        keyboardType={keyboardType}
        showSoftInputOnFocus={true}
      />
    </View>
  )
}

export default FieldPassword
