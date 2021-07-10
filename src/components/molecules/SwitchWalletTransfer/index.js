import IconSwitch from 'assets/icons/fontAwesome/IconSwitch'
import { COLORS, SIZES } from 'constant/themes'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles, OvalColor } from './styles'
import RNPickerSelect from 'react-native-picker-select'
import { walletArr } from './constant'

const switchDefault = {
  exchange: {
    label: 'Exchange',
    value: 'Exchange',
  },
  fiat: {
    label: 'Fiat',
    value: 'Fiat',
  },
}

const SwitchWalletTransfer = () => {
  const [state, setState] = useState({
    from: switchDefault['exchange'],
    to: switchDefault['fiat'],
  })
  const _handleSwitchTransfer = () => {
    let prevFrom = JSON.parse(JSON.stringify(state.from))
    let prevTo = JSON.parse(JSON.stringify(state.to))
    setState((prevState) => ({
      ...prevState,
      from: prevTo,
      to: prevFrom,
    }))
  }

  const _handleOnChangeWallet = (data) => {
    if (!data) return
    let dataFind = walletArr.find((x) => x.value === data)
    setState((prevState) => ({
      ...prevState,
      to: dataFind,
    }))
  }

  return (
    <View style={styles.container}>
      <View style={styles.blockWallet}>
        <View style={styles.wrapIndicator}>
          <OvalColor bgColor={COLORS.blueLight} size="8px" />
          <OvalColor bgColor={COLORS.grayTransparent} size="2px" />
          <OvalColor bgColor={COLORS.grayTransparent} size="2px" />
          <OvalColor bgColor={COLORS.grayTransparent} size="2px" />
          <OvalColor bgColor={COLORS.red} size="8px" />
        </View>
        <View style={styles.wrapFromTo}>
          <View style={styles.wrapFlexRow}>
            <Text style={{ color: COLORS.grayTransparent, width: 50 }}>From</Text>
            <Text style={{ color: COLORS.white }}>{state.from.label}</Text>
          </View>
          <View style={styles.line} />
          <RNPickerSelect
            onValueChange={_handleOnChangeWallet}
            items={walletArr.filter((x) => x.value !== state.from.value)}
          >
            <View style={{ ...styles.wrapFlexRow, width: '100%', justifyContent: 'flex-start' }}>
              <Text style={{ color: COLORS.grayTransparent, width: 50 }}>To</Text>
              <Text style={{ color: COLORS.white }}>{state.to.label}</Text>
            </View>
          </RNPickerSelect>
        </View>
      </View>
      <TouchableOpacity style={styles.touchAction} onPress={_handleSwitchTransfer}>
        <View style={styles.circleView}>
          <IconSwitch width={20} height={20} color={COLORS.primary} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SwitchWalletTransfer
