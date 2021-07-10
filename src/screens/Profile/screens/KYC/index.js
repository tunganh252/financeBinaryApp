import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import TabView from 'templates/TabView'
import TagDirection from 'components/atoms/TagSelection/basic'
import BigTitle from 'components/atoms/Title/bigtitle.js'
import Toggle from 'components/atoms/TagSelection/toggle'
import TextSmall from 'components/atoms/Body/small.js'
import TextLarge from 'components/atoms/Body/large'
import Button from 'components/atoms/Button'
import Input from 'components/atoms/Input/border'
// import ImagePicker from 'react-native-image-picker'

const Payment = () => {
  // const launchImageLibrary = () => {
  //   let options = {
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   }
  //   ImagePicker.launchImageLibrary(options, (response) => {
  //     console.log('Response = ', response)

  //     if (response.didCancel) {
  //       console.log('User cancelled image picker')
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error)
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton)
  //       alert(response.customButton)
  //     } else {
  //       const source = { uri: response.uri }
  //       console.log(response)
  //     }
  //   })
  // }

  return (
    <TabView>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <BigTitle style={{ color: 'white', opacity: 0.8 }}>ID Verifycation</BigTitle>
          <TextSmall style={{ opacity: 0.5, marginTop: 20 }}>Country/Region</TextSmall>
          <TextLarge style={{ opacity: 0.8, marginTop: 10 }}>Việt Nam</TextLarge>
          <TextSmall style={{ marginTop: 20, opacity: 0.8 }}>Given Name</TextSmall>
          <Input placeholder="Enter Your Given Name" style={{ marginTop: 10 }} />
          <TextSmall style={{ marginTop: 20, opacity: 0.8 }}>Surname</TextSmall>
          <Input placeholder="Enter Your Last Name" style={{ marginTop: 10 }} />
          <TextSmall style={{ marginTop: 20, opacity: 0.8 }}>Passport your ID number</TextSmall>
          <Input
            placeholder="Please enter passport or Id number"
            keyboardType="numbers-and-punctuation"
            style={{ marginTop: 10 }}
          />
          <TouchableOpacity
            onPress={() => {
              // console.log('ahsjhdjs')
            }}
          >
            <Text>alshds</Text>
          </TouchableOpacity>
        </View>

        <Button style={{ opacity: 1 }}>
          <TextSmall>Submit</TextSmall>
        </Button>
      </View>
    </TabView>
  )
}

export default Payment
