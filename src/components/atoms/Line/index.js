import React from 'react'
import { View } from 'react-native'
import { COLORS, SIZES } from 'constant/themes'

const Line = ({ style }) => {
  return (
    <View
      style={[
        {

          height: 0.5,
          backgroundColor: COLORS.grayTransparent,
          marginTop: SIZES.padding2,
          marginBottom: SIZES.padding2,
        },
        style,
      ]}
    />
  )
}

export default Line
