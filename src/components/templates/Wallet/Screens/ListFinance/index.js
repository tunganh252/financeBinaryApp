import React from 'react'
import TabView from 'templates/TabView'
import BigTitle from 'components/atoms/Title/bigtitle.js'
import TagDirection from 'components/atoms/TagSelection/basic'
import Line from 'components/atoms/Line'
import { COLORS } from 'constant/index'
import { View, Text, StyleSheet } from 'react-native'
import FinanRecord from 'components/molecules/FinanceRecords'

const ListFinance = () => {
  return (
    <TabView>
      <BigTitle style={{ color: 'white' }}>Order History</BigTitle>
      <FinanRecord style={{ marginTop: 20 }} title={'Ordinary Diponsit'} />
      <Line />
    </TabView>
  )
}

export default ListFinance
