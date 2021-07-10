import IconBack from 'assets/icons/fontAwesome/IconBack'
import IconHistoryRecord from 'assets/icons/fontAwesome/IconHistoryRecord'
import ChainName from 'components/atoms/ChainName'
import { COLORS } from 'constant/themes'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import { styles, TouchAbleBtnWithdraw } from './styles'

import { dataChainName } from './constant'
import Loop from 'components/common/Loop'
import InputGroup from 'components/molecules/InputGroup'
import IconScan from 'assets/icons/fontAwesome/IconScan'
import IconLocation from 'assets/icons/fontAwesome/IconLocation'
import { useGetWithDrawChains } from 'services/module/wallet'
import Condition from 'components/common/Condition'
import { useAsync } from 'components/common/hooks/useAsyncState'

const WithdrawWallet = ({ route, navigation }) => {
  const dataRoute = route.params

  /**
   * Stores
   */

  const { state: withdrawChainReducer, get: getWithdrawChain } = useGetWithDrawChains()
  const { execute: getWithdrawChainAsync, status: getWithdrawChainStatus } = useAsync(getWithdrawChain)

  /**
   * State
   */
  const [state, setState] = useState({
    disableBTA: true,
  })
  const [chainSelected, setChainSelected] = useState(dataChainName[0])
  const [addressScan, setAddressScan] = useState('')

  /**
   * Effect
   */

  useEffect(() => {
    if (dataRoute.code) {
      getWithdrawChainAsync(dataRoute?.code)
    }
  }, [dataRoute])

  useEffect(() => {
    if (!!withdrawChainReducer && withdrawChainReducer.length > 0) {
      setChainSelected(withdrawChainReducer[0])
    }
  }, [withdrawChainReducer])

  useEffect(() => {
    if (!!dataRoute.addressScan) {
      setAddressScan(dataRoute.addressScan)
    }
  }, [dataRoute])

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
          <Text style={styles.textNameCoin}>Withdraw</Text>
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
                condition: !!withdrawChainReducer && withdrawChainReducer.length > 0,
                component: (
                  <Loop
                    dataSet={withdrawChainReducer}
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

        <View style={styles.wrapInputGroup}>
          <InputGroup
            labelText="Withdraw Address"
            placeholder="Enter or pass address"
            paddingTextInput="5px 100px 5px 0"
            handleGetValue={(val) => {}}
            defaultValue={addressScan}
          />
          <View style={styles.wrapActionInput}>
            <TouchableOpacity onPress={() => navigation.navigate('scanWallet')}>
              <IconScan color={COLORS.white} width={25} height={25} />
            </TouchableOpacity>
            <Text style={styles.line} />
            <TouchableOpacity>
              <IconLocation color={COLORS.white} width={25} height={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapInputGroup}>
          <InputGroup
            labelText="Amount"
            type="number-pad"
            placeholder="Min 10"
            paddingTextInput="5px 100px 5px 0"
            handleGetValue={(val) => {}}
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
        <View style={styles.wrapInputGroup}>
          <InputGroup
            labelText="Fee"
            placeholder="Min 10"
            paddingTextInput="5px 100px 5px 0"
            handleGetValue={(val) => {}}
            defaultValue="200000"
            disable={true}
          />
          <View style={styles.wrapActionInput}>
            <Text style={{ color: COLORS.grayTransparent }}>{dataRoute.code}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.blockAction}>
        <View style={styles.wrapInfoAction}>
          <Text style={{ color: COLORS.grayTransparent, fontSize: 18, fontWeight: 'bold' }}>Receive Amount</Text>
          <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>0.00000 {dataRoute.code}</Text>
        </View>

        <TouchAbleBtnWithdraw disabled={state.disableBTA}>
          <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 20 }}>Withdraw</Text>
        </TouchAbleBtnWithdraw>
      </View>
    </SafeAreaView>
  )
}

export default WithdrawWallet
