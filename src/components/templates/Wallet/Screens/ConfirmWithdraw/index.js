import React, { useState } from 'react'
import TabView from 'templates/TabView'
import BigTitle from 'components/atoms/Title/bigtitle.js'
import TextLarge from 'components/atoms/Body/medium'
import Line from 'components/atoms/Line'
import { COLORS } from 'constant/index'
import { View, StyleSheet, CheckBox } from 'react-native'
import TextMedium from 'components/atoms/Body/medium'
import TextSmall from 'components/atoms/Body/small'

const General = () => {
  const [isSelected, setSelection] = useState(false)

  return (
    <TabView padding={0}>
      <View style={{ padding: 20 }}>
        <BigTitle style={{ color: 'white', marginBottom: 20, color: COLORS.blueLight }}>
          Xát nhận thông tin rút
        </BigTitle>
        <Line />
        <Element label="Các loại tiền" value="USDT TRC20" />
        <Line />
        <Element label="Địa chỉ rút tiền" value="09128309128309218302180" />
        <Line />
        <Element label="Số lượng đến tài khoản" value="19.0000000 USDT" />
      </View>
      <View>
        <Line style={{ height: 12, backgroundColor: COLORS.blueDark }} />
      </View>
      <View style={{ padding: 20 }}>
        <TextLarge style={{ color: 'white', marginBottom: 20 }}>Nhắc nhở rủi ro</TextLarge>
        <TextSmall style={{ fontFamily: 'RobotoRegular', opacity: 0.8, marginTop: 10 }}>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting industry{' '}
        </TextSmall>
        <TextSmall style={{ fontFamily: 'RobotoRegular', opacity: 0.8, marginTop: 10 }}>
          2. Lorem Ipsum is simply dummy text of the printing and typesetting industry{' '}
        </TextSmall>
        <TextSmall style={{ fontFamily: 'RobotoRegular', opacity: 0.8, marginTop: 10 }}>
          3. Lorem Ipsum is simply dummy text of the printing and typesetting industry{' '}
        </TextSmall>
      </View>
      <View style={{ padding: 20,  }}>
        <CheckBox style={{ padding: 10, alignSelf: 'center' }} value={isSelected} onValueChange={setSelection} />
      </View>
    </TabView>
  )
}

const Element = (props) => {
  const { label, value } = props
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
      <View>
        <TextMedium style={{ opacity: 0.5 }}>{label}</TextMedium>
      </View>
      <View>
        <TextMedium style={{ opacity: 0.8 }}>{value}</TextMedium>
      </View>
    </View>
  )
}

const listStyle = StyleSheet.create({})

export default General
