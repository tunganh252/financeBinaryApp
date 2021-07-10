import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { COLORS, SIZES } from '../../../constant'

const LoadingScreen = ({ color = COLORS.primary }) => (
  <View style={[styles.container, styles.horizontal]}>
    <View style={{display: "flex", justifyContent: "center", alignItems: "center", height: SIZES.height}}>
      <ActivityIndicator size="large" color={color} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: SIZES.width,
    height: '100%',
    backgroundColor: '#000000b8',
    zIndex: 9999999,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  sizeLoading: {
    width: 50,
    height: 50,
  },
})

export default LoadingScreen
