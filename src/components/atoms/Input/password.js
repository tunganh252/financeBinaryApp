import React, { useState } from 'react'
import { TextInput, StyleSheet, TouchableOpacity, View } from 'react-native'
import TextSmall from '../Body/small'
import IconEyes from '../../../assets/icons/fontAwesome/IconEyePass'
import { COLORS } from 'constant/themes'

const ListStyle = StyleSheet.create({
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.lightGray,
    color: COLORS.lightGray,
    paddingBottom: 6,
    paddingTop: 6,
    width: '90%',
    fontFamily: 'RobotoMedium',
  },
  wrap: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 10,
    height: '100%',
    justifyContent: 'center',
  },
  messageError: {
    height: 12,
    color: COLORS.pinkBlack,
    fontSize: 12,
    lineHeight: 12,
    fontFamily: 'RobotoRegular',
    marginTop: 6,
  },
})

const FieldPassword = (props) => {
  const { style, placeholder, messageError, onChange = () => {} } = props
  const [view, setView] = useState(true)
  const [focus, setFocus] = useState(false)

  const onFocus = () => {
    setFocus(true)
  }
  const onBlur = () => {
    setFocus(false)
  }
  const changeView = () => {
    setView((view) => !view)
  }

  const styleOnFocus = focus ? { borderBottomColor: COLORS.blueLight } : {}
  return (
    <View style={[ListStyle.wrap, style]}>
      <TextInput
        secureTextEntry={view}
        style={[ListStyle.input, styleOnFocus]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.grayTransparent}
        onChangeText={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <TouchableOpacity style={ListStyle.icon} onPress={changeView}>
        <IconEyes width="16" height="16" color={view ? COLORS.lightGray : COLORS.blueLight} active={view} />
      </TouchableOpacity>
      <TextSmall style={ListStyle.messageError}>{messageError}</TextSmall>
    </View>
  )
}

export default FieldPassword
