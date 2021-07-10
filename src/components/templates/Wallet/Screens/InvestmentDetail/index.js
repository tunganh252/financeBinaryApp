import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import IconBack from 'assets/icons/fontAwesome/IconBack'
import IconFilter from 'assets/icons/fontAwesome/IconFilter'
import IconRecord from 'assets/icons/fontAwesome/IconRecord'
import LoadingScreen from 'atoms/LoadingScreen'
import { useAsync } from 'common/hooks/useAsyncState'
import { COLORS } from 'constant'
import { convertNumToMoney } from 'constant/helpers/function'
import { useMarketGetDetailCoins } from 'services/module/market'
import { useWalletInvestmentGetDetailSetting } from 'services/module/wallet'
import FinanceRecord from 'components/molecules/FinanceRecords'

import { styles } from './styles'

const InvestmentDetail = ({ route, navigation }) => {
  const dataRoute = route.params

  /**
   * Stores
   */
  const { state: walletInvestmentDetailReducer, get: getDetailWalletInvestment } = useWalletInvestmentGetDetailSetting()
  const { execute: getDetailWalletInvestmentAsync, status: getDetailWalletInvestmentStatus } = useAsync(
    getDetailWalletInvestment,
  )
  const { state: marketCoinDetailReducer, get: getMarketCoinDetail } = useMarketGetDetailCoins()
  const { execute: getMarketCoinDetailAsync, status: getMarketCoinDetailStatus } = useAsync(getMarketCoinDetail)

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
    if (!!dataRoute) {
      getDetailWalletInvestmentAsync(dataRoute.coin)
      getMarketCoinDetailAsync(dataRoute.coin)
    }
  }, [dataRoute])

  return (
    <>
      {(getDetailWalletInvestmentStatus === 'loading' || getMarketCoinDetailStatus === 'loading') && <LoadingScreen />}
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.viewBlockHeader}>
            <TouchableOpacity
              style={{
                width: 50,
                justifyContent: 'center',
              }}
              onPress={() => navigation.goBack()}
            >
              <IconBack width={24} height={24} color={COLORS.white} />
            </TouchableOpacity>

            <Text style={styles.textNameCoin}>
              {walletInvestmentDetailReducer?.coin ? walletInvestmentDetailReducer?.coin.toUpperCase() : 'COIN'}
            </Text>

            <View style={styles.viewMoney}>
              <Text style={{ ...styles.textTitle, flex: 1 }}>Available</Text>
              <Text style={{ ...styles.textTitle, flex: 0.7 }}>On orders</Text>
              <Text style={{ ...styles.textTitle, flex: 1.3, textAlign: 'right' }}>Estimated(USD)</Text>
            </View>
            <View style={{ ...styles.viewMoney, marginTop: 10 }}>
              <Text style={{ ...styles.textViewMoney, flex: 1 }}>
                {convertNumToMoney(walletInvestmentDetailReducer.availableBalance)}
              </Text>
              <Text style={{ ...styles.textViewMoney, flex: 0.7 }}>
                {convertNumToMoney(walletInvestmentDetailReducer.freeze)}
              </Text>
              <Text style={{ ...styles.textTitle, flex: 1.3, textAlign: 'right' }}>
                {marketCoinDetailReducer.currentPrice}
              </Text>
            </View>

            <Text style={styles.textTrade}>Trade</Text>

            <View style={styles.viewBlockPrice}>
              <View style={styles.viewNameCoin}>
                <Text style={{ color: '#9194937a', fontWeight: '900' }}>
                  {walletInvestmentDetailReducer?.coin ? walletInvestmentDetailReducer?.coin.toUpperCase() : 'COIN'}
                </Text>
                <Text style={styles.textPriceChild}>&nbsp; /HUSD</Text>
              </View>
              <View style={styles.viewPriceCoin}>
                <Text style={{ color: COLORS.white }}>00000</Text>
                <Text style={{ color: COLORS.red }}>-0.4%</Text>
              </View>
            </View>
          </View>

          <View style={styles.viewBgBlack} />
          <View style={styles.viewBlockContent}>
            <View style={styles.viewTitleRecord}>
              <Text style={{ ...styles.textViewMoney, fontWeight: '700' }}>Finance Records</Text>
              <TouchableOpacity>
                <IconFilter color={COLORS.white} width={22} height={22} />
              </TouchableOpacity>
            </View>
            <FinanceRecord style={{ marginTop: 20, paddingHorizontal: 15, paddingBottom: 10 }} />
            {/* <FinanceRecord />
            <View style={styles.viewNoData}>
              <IconRecord color={COLORS.white} width={65} height={65} />
              <Text style={{ ...styles.textViewMoney, fontWeight: '700' }}>No record</Text>
            </View> */}
          </View>
        </ScrollView>

        <View style={styles.blockBtnAction}>
          {dataRoute.allowDeposit && (
            <TouchableOpacity
              style={styles.btnPrimaryColor}
              onPress={() => navigation.navigate('depositWallet', marketCoinDetailReducer)}
            >
              <Text style={styles.textBtn}>Deposit</Text>
            </TouchableOpacity>
          )}
          {dataRoute.allowWithdrawal && (
            <TouchableOpacity
              style={styles.btnBorder}
              onPress={() => navigation.navigate('withdrawWallet', marketCoinDetailReducer)}
            >
              <Text style={styles.textBtn}>Withdraw</Text>
            </TouchableOpacity>
          )}

          {dataRoute.allowTransfer && (
            <TouchableOpacity
              style={styles.btnBorder}
              onPress={() => navigation.navigate('transferWallet', marketCoinDetailReducer)}
            >
              <Text style={styles.textBtn}>Transfer</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </>
  )
}

export default InvestmentDetail
