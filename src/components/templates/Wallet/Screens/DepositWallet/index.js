import React, { useState, useEffect } from 'react'
import Clipboard from 'expo-clipboard'
import IconBack from 'assets/icons/fontAwesome/IconBack'
import IconHistoryRecord from 'assets/icons/fontAwesome/IconHistoryRecord'
import ChainName from 'components/atoms/ChainName'
import TagQrCode from 'components/atoms/TagQrCode'
import Loop from 'components/common/Loop'
import { createCode } from 'constant/helpers/function'
import { COLORS } from 'constant/themes'

import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { dataChainName } from './constant'

import { styles } from './styles'

import { captureScreen } from 'react-native-view-shot'
import * as MediaLibrary from 'expo-media-library'
import { useGetAddressDeposit, useGetDepositChains } from 'services/module/wallet'
import { useAsync } from 'components/common/hooks/useAsyncState'
import Condition from 'components/common/Condition'

const DepositWallet = ({ route, navigation }) => {
  const dataRoute = route.params

  /**
   * Stores
   */
  const { state: depositChainReducer, get: getDepositChain } = useGetDepositChains()
  const { execute: getDepositChainAsync } = useAsync(getDepositChain)

  const { state: depositAddressReducer, get: getDepositAddress } = useGetAddressDeposit()
  const { execute: getDepositAddressAsync } = useAsync(getDepositAddress)

  /**
   * State
   */

  const [chainSelected, setChainSelected] = useState({})
  const [addressCode, setAddressCode] = useState('')

  /**
   * Function
   */

  const _handleCopyAddress = () => {
    Clipboard.setString(addressCode)
    alert('Copied Address')
  }

  const _handleSaveQrCode = async () => {
    // To capture Screenshot
    captureScreen({
      // Either png or jpg (or webm Android Only), Defaults: png
      format: 'jpg',
      // Quality 0.0 - 1.0 (only available for jpg)
      quality: 0.8,
    }).then(
      //callback function to get the result URL of the screnshot
      async (uri) => {
        alert('Saved QR Code')
        await MediaLibrary.createAssetAsync(uri)
      },
      (error) => console.error('Oops, Something Went Wrong', error),
    )
  }
  /**
   * Effect
   */

  useEffect(() => {
    if (dataRoute.code) {
      getDepositChainAsync(dataRoute?.code)
    }
  }, [dataRoute])

  useEffect(() => {
    if (!!depositChainReducer && depositChainReducer.length > 0) {
      setChainSelected(depositChainReducer[0])
    }
  }, [depositChainReducer])

  useEffect(() => {
    getDepositAddressAsync(chainSelected.coin, chainSelected.chain)
  }, [JSON.stringify(chainSelected)])

  useEffect(() => {
    if (depositAddressReducer?.chain === chainSelected.chain) {
      setAddressCode(depositAddressReducer?.address)
    }
  }, [depositAddressReducer])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapHeader}>
          <View style={styles.viewHeader}>
            <TouchableOpacity
              style={{
                width: 50,
                justifyContent: 'center',
                padding: 20,
                marginTop: -20,
                marginLeft: -20,
              }}
              onPress={() => navigation.goBack()}
            >
              <IconBack width={24} height={24} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('listFinance')}
              style={{
                width: 50,
                justifyContent: 'center',
                padding: 20,
                marginTop: -20,
                marginRight: 20,
              }}
            >
              <IconHistoryRecord width={20} height={20} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles.textNameCoin}>Deposit</Text>
        </View>
        <View style={styles.blockCoin}>
          <Text style={styles.textCoin}>{dataRoute.code}</Text>
          <Text style={styles.textFullName}>{dataRoute.name}</Text>
        </View>
        <Text style={{ color: COLORS.white, marginTop: 20, marginLeft: 15 }}>Chain name</Text>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <View style={styles.blockChainName}>
            <Condition
              If={{
                condition: !!depositChainReducer && depositChainReducer.length > 0,
                component: (
                  <Loop
                    dataSet={depositChainReducer}
                    onRender={(item) => {
                      return (
                        <View key={item.chain} style={styles.wrapChainItem}>
                          <TouchableOpacity
                            onPress={() => {
                              setChainSelected(item)
                            }}
                          >
                            <ChainName
                              textName={item.chain.toUpperCase()}
                              data={item}
                              selected={item.chain === chainSelected.chain ? true : false}
                            />
                          </TouchableOpacity>
                        </View>
                      )
                    }}
                  />
                ),
              }}
            />
          </View>
        </ScrollView>

        <View style={styles.blockQRCode}>
          <View style={{ width: 200, height: 200, marginTop: 20 }}>
            {!!addressCode && <TagQrCode valueQrCode={addressCode} size={200} backgroundColor={COLORS.darkgray} />}
          </View>
          <TouchableOpacity style={styles.btnSaveQrCode} onPress={_handleSaveQrCode}>
            <Text style={{ color: COLORS.primary, fontWeight: '700' }}>Save QR Code</Text>
          </TouchableOpacity>
          <Text style={{ color: COLORS.grayTransparent, fontWeight: '600' }}>Address</Text>
          <Text style={styles.textAddressCode}>{addressCode}</Text>

          <TouchableOpacity style={styles.btnCopyAddress} onPress={_handleCopyAddress}>
            <Text style={styles.textCopyAddress}>Copy Address</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DepositWallet
