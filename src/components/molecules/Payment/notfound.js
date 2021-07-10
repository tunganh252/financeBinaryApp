import React from 'react'
import { icons, COLORS } from '../../../constant/index'
import { View, Image, StyleSheet } from 'react-native'
import TextMedium from '../../atoms/Body/medium'
import Button from '../../atoms/Button'


const NotFound = () => {
  return (
    <View style={listStyle.notfound}>
      <Image source={icons.payment} style={listStyle.image} />
      <TextMedium style={listStyle.text}>Please make sure that you're using your own account</TextMedium>
      <Button style={listStyle.button}>
        <TextMedium style={{ color: COLORS.blueLight }}>Add</TextMedium>
      </Button>
    </View>
  )
}

const listStyle = StyleSheet.create({
  notfound: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    opacity: 0.2,
    marginTop: 100,
  },
  button: {
    marginTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    opacity: 1,
    backgroundColor: COLORS.blueDark,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.5,
  },
})

export default NotFound
