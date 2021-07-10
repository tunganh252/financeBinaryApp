import React from 'react'
import TabView from 'templates/TabView'
import BigTitle from 'components/atoms/Title/bigtitle.js'
import TagDirection from 'components/atoms/TagSelection/basic'
import Line from 'components/atoms/Line'
import { COLORS } from 'constant/index'
import { View, Text, StyleSheet } from 'react-native'
import TextMedium from 'components/atoms/Body/medium'

const General = () => {
  return (
    <TabView >
      <BigTitle style={{ color: 'white', marginBottom: 10, color: COLORS.primary }}>-19.000.000 USDT</BigTitle>
      <Line />
      <Element label="Type" value="General" />
      <Line />
      <Element label="Status" value="Completed" />
      <Line />
      <Element label="Withdraw Address" value="9012830912830128302180" />
      <Line />
      <Element label="Fee" value="1.00000000 USDT" />
      <Line />
      <Element label="TxID" value="qi87892u89as9034927394873298273987" />
      <Line />
      <Element label="Date" value="16:38:87 05/08/2021" />
      <Line />
    </TabView>
  )
}

const Element = (props) => {
  const { label, value } = props
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 }}>
      <View>
        <TextMedium style={{ opacity: 0.5, fontSize: 14 }}>{label}</TextMedium>
      </View>
      <View style={{ flex: 4, alignItems: 'flex-end', marginLeft: 30 }}>
        <TextMedium style={{ opacity: 0.8, textAlign: 'right', fontSize: 14 }}>{value}</TextMedium>
      </View>
    </View>
  )
}
export default General
