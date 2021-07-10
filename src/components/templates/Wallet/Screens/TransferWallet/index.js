import IconBack from 'assets/icons/fontAwesome/IconBack'
import IconHistoryRecord from 'assets/icons/fontAwesome/IconHistoryRecord'
import InputGroup from 'components/molecules/InputGroup'
import SwitchWalletTransfer from 'components/molecules/SwitchWalletTransfer'
import { COLORS } from 'constant/themes'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { styles, TouchAbleBtnWithdraw } from './styles'

const TransferWallet = ({ route, navigation }) => {
  const dataRoute = route.params

  const [state, setState] = useState({
    disableBTA: true,
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapHeader}>
          <View style={styles.viewHeader}>
            <TouchableOpacity
              style={{
                width: 50,
                justifyContent: 'center',
              }}
              onPress={() => navigation.goBack()}
            >
              <IconBack width={24} height={24} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 50,
                justifyContent: 'center',
              }}
            >
              <IconHistoryRecord width={20} height={20} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles.textTitle}>Transfer</Text>
        </View>

        <View style={styles.wrapSwitchWallet}>
          <SwitchWalletTransfer />
        </View>

        <Text style={{ color: COLORS.white, marginTop: 30, marginLeft: 15 }}>Coin</Text>

        <View style={styles.wrapCoin}>
          <Text style={styles.textCoin}>{dataRoute.code}</Text>
        </View>

        <View style={styles.wrapInputGroup}>
          <InputGroup
            labelText="Transfer amount"
            placeholder="Enter transfer amount"
            type="number-pad"
            paddingTextInput="5px 100px 5px 0"
            handleGetValue={(val) => {
            }}
            desctiption={`Available 0.00000 ${dataRoute.code}`}
          />
          <View style={styles.wrapActionInput}>
            <Text style={{ color: COLORS.grayTransparent }}>{dataRoute.code}</Text>
            <Text style={styles.line} />
            <TouchableOpacity>
              <Text style={{ color: COLORS.white }}>All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.wrapAlert}>
          <Text style={{ color: COLORS.grayTransparent }}>
            You can only trade on assets are transferred to the corresponding account. Transfers between accounts are
            free of charge.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.blockAction}>
        <TouchAbleBtnWithdraw disabled={state.disableBTA} >
          <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 20 }}>Transfer</Text>
        </TouchAbleBtnWithdraw>
      </View>
    </SafeAreaView>
  )
}

export default TransferWallet
