import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import IconSort from '../../../assets/icons/fontAwesome/IconSort'
import { COLORS } from '../../../constant'
import { convertNumToMoney } from '../../../constant/helpers/function'
import { useMarketGetListCoins, useMarketGetMakePairsCoin } from '../../../services/module/market'
import { useAsync } from '../../common/hooks/useAsyncState'
import Loop from '../../common/Loop'
import { listCoinParent, listfilter } from './constant'

import { styles } from './styles'

const Market_Exchange = ({ navigation }) => {
  /**
   * Stores
   */
  const { state: listCoinsReducer, get: getAllListCoins } = useMarketGetListCoins()

  const { execute: getAllListCoinsAsync, status: getAllListCoinsStatus } = useAsync(getAllListCoins)

  const { state: makePairsDataReducer, get: getPairsCoin } = useMarketGetMakePairsCoin()

  const { execute: getPairsCoinAsync, status: getPairsCoinStatus } = useAsync(getPairsCoin)

  /**
   * State
   */
  const [tabParent, setTabParent] = useState({})
  const [tabChildFilter, setTabChildFilter] = useState(listfilter[0])

  /**
   * Function
   */

  const _handleSetTabCoin = (tabParent) => {
    setTabParent(tabParent)
    getPairsCoinAsync(tabParent.code)
  }

  /**
   * Effect
   */

  useEffect(() => {
    getAllListCoinsAsync()
  }, [])

  useEffect(() => {
    if (!listCoinsReducer || listCoinsReducer.length <= 0) return
    setTabParent(listCoinsReducer[0])
    getPairsCoinAsync(listCoinsReducer[0].code)
  }, [JSON.stringify(listCoinsReducer)])

  return (
    <View style={styles.viewContainer}>
      {/* List các coin chính */}
      <ScrollView
        style={{ marginTop: 12 }}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.viewTabHeader}>
          {!!listCoinsReducer && listCoinsReducer.length > 0 && (
            <Loop
              dataSet={listCoinsReducer}
              onRender={(item) => {
                return (
                  <View key={item.id} style={{ marginRight: 20 }}>
                    <Text
                      style={{
                        ...styles.tabHeader__text,
                        color: tabParent.code === item.code ? COLORS.primary : COLORS.gray,
                      }}
                      numberOfLines={2}
                      onPress={() => _handleSetTabCoin(item)}
                    >
                      {item.code}
                    </Text>
                    {tabParent.code === item.code && <View style={styles.viewLine__text} />}
                  </View>
                )
              }}
            />
          )}
        </View>
      </ScrollView>

      {/* List filter trong tab co */}
      <ScrollView
        style={{ marginTop: 12 }}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Loop
          dataSet={listfilter}
          onRender={(item, index) => {
            return (
              <TouchableOpacity key={index}>
                <Text
                  style={{
                    ...styles.textFilter,
                    color: tabChildFilter.code === item.code ? COLORS.primary : COLORS.white,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )
          }}
        />
      </ScrollView>

      <View style={styles.viewLine} />

      {/* Data Coint */}
      <View style={styles.viewCoinContainer}>
        <View style={{ flex: 2 }}>
          <View style={styles.viewFlexRowJustifyStart}>
            <TouchableOpacity style={styles.viewFlexRowJustifyStart}>
              <Text style={styles.textFilterCoin}>Name &nbsp;</Text>
              <IconSort color={'#636a7757'} width={8} height={17} />
            </TouchableOpacity>
            <Text style={styles.textFilterCoin}>&nbsp;/&nbsp;</Text>
            <TouchableOpacity style={styles.viewFlexRowJustifyStart}>
              <Text style={styles.textFilterCoin}>24h &nbsp;</Text>
              <IconSort color={'#636a7757'} width={8} height={17} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ ...styles.viewLastFilterCoin, flex: 1 }}>
          <TouchableOpacity style={styles.viewFlexRowJustifyStart}>
            <Text style={styles.textFilterCoin}>Market Price &nbsp;</Text>
            <IconSort color={'#636a7757'} width={8} height={17} />
          </TouchableOpacity>
        </View>
        <View style={styles.viewLastFilterCoin}>
          <TouchableOpacity style={styles.viewFlexRowJustifyStart}>
            <Text style={{ ...styles.textFilterCoin, fontSize: 11 }}>Change % &nbsp;</Text>
            <IconSort color={'#636a7757'} width={8} height={17} />
          </TouchableOpacity>
        </View>
      </View>

      <Loop
        dataSet={makePairsDataReducer.dataCoinPairs}
        onRender={(item) => {
          return (
            <View key={item.code} style={{ ...styles.viewCoinContainer, marginTop: 15 }}>
              <View style={{ flex: 2 }}>
                <View style={styles.viewFlexRowJustifyStart}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontWeight: '700',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.symbolFirst}
                  </Text>
                  <Text
                    style={{
                      ...styles.textFilterCoin,
                      fontSize: 9,
                      paddingTop: 6,
                      opacity: 0.4,
                      fontWeight: '600',
                    }}
                  >
                    &nbsp; /{item.symbolSecond}
                  </Text>
                </View>
                <Text style={{ ...styles.textFilterCoin }}>-</Text>
              </View>
              <View
                style={{
                  ...styles.viewLastFilterCoin,
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <Text style={{ color: COLORS.white, fontWeight: '700' }}>
                  {convertNumToMoney(item.currentPrice, '', '')}
                </Text>
                <Text style={{ ...styles.textFilterCoin }}>{convertNumToMoney(item.currentPrice, '.', '$', true)}</Text>
              </View>
              <View style={{ ...styles.viewLastFilterCoin, alignItems: 'center' }}>
                <Text
                  style={{
                    ...styles.textBtnPercent,
                    backgroundColor: Math.floor(Math.random() * 11) % 2 ? COLORS.baseGreen : COLORS.red,
                  }}
                >
                  ...... %
                </Text>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

export default Market_Exchange
