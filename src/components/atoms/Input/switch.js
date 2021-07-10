import React, { useState, useRef } from 'react'
import { Animated, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from 'constant/themes'

const Toggle = (props) => {
  const { onChange = () => {}, enabled } = props
  const animated = useRef(new Animated.Value(0)).current // Initial value for opacity: 0

  const [isEnabled, setIsEnabled] = useState(enabled || false)
  const toggleSwitch = () => {
    Animated.timing(animated, {
      toValue: isEnabled ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
    onChange(!isEnabled)
    setIsEnabled(!isEnabled)
  }

  const interpolate = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 26],
  })

  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <React.Fragment>
        <Animated.View style={listStyle.switch}></Animated.View>
        <Animated.View
          style={[
            listStyle.dot,
            {
              backgroundColor: isEnabled ? COLORS.blueLight : COLORS.grayTransparent,
              transform: [{ translateX: interpolate }],
            },
          ]}
        ></Animated.View>
      </React.Fragment>
    </TouchableOpacity>
  )
}

export default Toggle

const listStyle = StyleSheet.create({
  switch: {
    overflow: 'hidden',
    borderRadius: 100,
    height: 20,
    width: 50,
    backgroundColor: COLORS.gray,
    position: 'relative',
  },
  dot: {
    width: 24,
    height: 24,
    borderRadius: 100,
    overflow: 'hidden',
    position: 'absolute',
    top: -2,
    left: 0,
  },
})
