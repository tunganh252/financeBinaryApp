import Condition from 'components/common/Condition'
import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS } from '../../../constant'
import { convertNumToMoney } from '../../../constant/helpers/function'
import { useMarketGetListCoins } from '../../../services/module/market'
import { useWalletInvestmentGetAllSetting } from '../../../services/module/wallet'
import { useAsync } from '../../common/hooks/useAsyncState'
import Loop from '../../common/Loop'

import { styles } from './styles'

const Wallet_Investment = ({ navigation, isShowEyes, setLoadingPage }) => {
  /**
   * Stores
   */
  const { state: walletInvestmentReducer, get: getAllWalletInvestment } = useWalletInvestmentGetAllSetting()
  const { execute: getAllWalletInvestmentAsync, status: getAllWalletInvestmentStatus } = useAsync(
    getAllWalletInvestment,
  )

  const { state: listCoinsReducer, get: getAllListCoins } = useMarketGetListCoins()

  const { execute: getAllListCoinsAsync, status: getAllListCoinsStatus } = useAsync(getAllListCoins)

  /**
   * State
   */

  /**
   * Function
   */

  /**
   * Effect
   */
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAllWalletInvestmentAsync()
      getAllListCoinsAsync()
    })
    return unsubscribe
  }, [navigation])

  useEffect(() => {
    getAllWalletInvestmentAsync()
    getAllListCoinsAsync()
  }, [])

  useEffect(() => {
    if (getAllWalletInvestmentStatus === 'loading' || getAllListCoinsStatus === 'loading') setLoadingPage(true)
    else setLoadingPage(false)
  }, [getAllWalletInvestmentStatus, getAllListCoinsStatus])

  return (
    <ScrollView>
      <Text style={styles.textBalance}>Wallet Investment Balances (BTC)</Text>
      <View style={styles.viewMoney}>
        <Text style={{ color: COLORS.white, fontSize: 13, fontWeight: '700' }}>
          {isShowEyes ? '****' : convertNumToMoney(0, '.', '', false)}
        </Text>
        <Text style={{ color: COLORS.gray, fontSize: 9 }}>
          &asymp; {isShowEyes ? '****' : convertNumToMoney(0, '.', '', false)} {'USD'}
        </Text>
      </View>

      <View style={styles.viewFilter}>
        <Text style={{ color: COLORS.gray, fontSize: 9 }}>Hide small balances</Text>
        <Text style={{ color: COLORS.gray, fontSize: 9 }}>Search</Text>
      </View>

      <View>
        <Condition
          If={{
            condition:
              !!walletInvestmentReducer.data &&
              !!listCoinsReducer &&
              walletInvestmentReducer.data.length > 0 &&
              listCoinsReducer.length > 0,
            component: (
              <Loop
                dataSet={walletInvestmentReducer?.data}
                onRender={(item, index) => {
                  let estimatedUSD = '-'

                  if (!!listCoinsReducer[index] && listCoinsReducer[index]?.currentPrice) {
                    estimatedUSD = Number(listCoinsReducer[index]?.currentPrice) * 1
                    // Number(item.availableBalance);
                  }

                  return (
                    <TouchableOpacity
                      key={item.name}
                      onPress={() => navigation.navigate('wallet', { ...item, route: 'investmentDetail' })}
                    >
                      <View>
                        <Text style={styles.textLineItemTrading} />

                        <Text style={styles.textItemCoin}>{item.coin}</Text>
                        <View style={styles.viewItemTrading}>
                          <View style={{ flex: 1 }}>
                            <Text style={styles.textItemAvailable}>Available</Text>
                            <Text style={{ color: COLORS.white }}>
                              {isShowEyes ? '****' : convertNumToMoney(item.availableBalance, '.', '')}
                            </Text>
                          </View>
                          <View style={{ flex: 1 }}>
                            <Text style={styles.textItemOnOrder}>On orders</Text>
                            <Text style={{ color: COLORS.white }}>
                              {isShowEyes ? '****' : convertNumToMoney(item.freeze, '.', '')}
                            </Text>
                          </View>
                          <View style={styles.viewEstimated}>
                            <Text style={styles.textItemEstimated}>Estimated(USD)</Text>
                            <Text style={styles.textItemValueEstimated}>{isShowEyes ? '****' : estimatedUSD}</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )
                }}
              />
            ),
          }}
        />
      </View>
    </ScrollView>
  )
}

export default Wallet_Investment
