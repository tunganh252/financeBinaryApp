import React, { useState } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

import { Picker } from '@react-native-community/picker'
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
  const { style, placeholder, onChange = () => {} } = props
  return (
    <View style={[ListStyle.wrap, style]}>
      <Picker selectedValue="java" onValueChange={onChange} placeholder={placeholder}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  )
}

export default FieldPassword
