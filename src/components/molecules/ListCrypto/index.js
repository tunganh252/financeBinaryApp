import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import IconSort from 'assets/icons/fontAwesome/IconSort'
import { COLORS } from 'constant/index'
import { convertNumToMoney } from 'constant/helpers/function'
import { useMarketGetListCoins, useMarketGetMakePairsCoin } from '../../../services/module/market'
import { useAsync } from '../../common/hooks/useAsyncState'
import Loop from '../../common/Loop'
import { listCoinParent } from './constant'

import { styles } from './styles'

const ListViewHome = ({ listMarket }) => {
  /**
   * Stores
   */
  const [tabParent, setTabParent] = useState({ value: 'TOP Gainers', code: 'USDT' })
  const _handleSetTabCoin = (tabParent) => {
    setTabParent(tabParent)
  }

  return (
    <View style={styles.viewContainer}>
      <ScrollView
        style={{ marginVertical: 10 }}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.viewTabHeader}>
          {true && (
            <Loop
              dataSet={listCoinParent}
              onRender={(item, index) => {
                return (
                  <View key={item.code} style={{ marginRight: 20 }}>
                    <Text
                      style={{
                        ...styles.tabHeader__text,
                        color: tabParent.code === item.code ? COLORS.primary : COLORS.gray,
                      }}
                      numberOfLines={2}
                      onPress={() => _handleSetTabCoin(item)}
                    >
                      {item.value}
                    </Text>
                    {tabParent.code === item.code && <View style={styles.viewLine__text} />}
                  </View>
                )
              }}
            />
          )}
        </View>
      </ScrollView>

      <View style={styles.viewCoinContainer}>
        <View style={{ flex: 2 }}>
          <View style={styles.viewFlexRowJustifyStart}>
            <TouchableOpacity style={styles.viewFlexRowJustifyStart}>
              <Text style={styles.textFilterCoin}>Name &nbsp;</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ ...styles.viewLastFilterCoin, flex: 1 }}>
          <TouchableOpacity style={styles.viewFlexRowJustifyStart}>
            <Text style={styles.textFilterCoin}>Price (USD)</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewLastFilterCoin}>
          <TouchableOpacity style={[styles.viewFlexRowJustifyStart]}>
            <Text style={{ ...styles.textFilterCoin, fontSize: 11 }}>24h Vol (USD)</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Loop
        dataSet={tabParent.code === 'USDT' ? listMarket : listMarket}
        onRender={tabParent.code === 'USDT' ? TopRender : VolComponent}
      />
    </View>
  )
}

const TopRender = (item) => {
  return (
    <View key={item.code} style={{ ...styles.viewCoinContainer, marginTop: 15 }}>
      <View style={{ flex: 2 }}>
        <View style={[styles.viewFlexRowJustifyStart, { alignItems: 'center' }]}>
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
              opacity: 0.4,
              fontWeight: '600',
            }}
          >
            &nbsp; /{item.symbolSecond}
          </Text>
        </View>
        <View flexDirection="row">
          <Text
            style={{
              ...styles.textFilterCoin,
              fontSize: 8,
              padding: 3,
              backgroundColor: COLORS.darkGreen,
              color: COLORS.baseGreen,
            }}
          >
            X3 Long
          </Text>
        </View>
      </View>
      <View
        style={{
          ...styles.viewLastFilterCoin,
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>{convertNumToMoney(item.currentPrice, '', '')}</Text>
      </View>
      <View style={{ ...styles.viewLastFilterCoin, alignItems: 'center' }}>
        <Text
          style={{
            ...styles.textBtnPercent,
            backgroundColor: item.change > 0 ? COLORS.baseGreen : COLORS.red,
          }}
        >
          {item.change}%
        </Text>
      </View>
    </View>
  )
}

const VolComponent = (item) => {
  return (
    <View key={item.code} style={{ ...styles.viewCoinContainer, marginTop: 15, minHeight: 33 }}>
      <View style={{ flex: 2 }}>
        <View style={[styles.viewFlexRowJustifyStart, { alignItems: 'center' }]}>
          <Text
            style={{
              color: COLORS.white,
              fontWeight: '700',
              textTransform: 'uppercase',
            }}
          >
            {item.symbolFirst}
          </Text>
        </View>
      </View>
      <View
        style={{
          ...styles.viewLastFilterCoin,
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: COLORS.white, fontWeight: '700' }}>{convertNumToMoney(item.currentPrice, '', '')}</Text>
      </View>
      <View style={{ ...styles.viewLastFilterCoin, alignItems: 'center' }}>
        <Text
          style={{
            ...styles.textBtnPercent,
            backgroundColor: COLORS.blueLight,
            color: '#142946',
            textAlign: 'center',
          }}
        >
          {item.VOL}
        </Text>
      </View>
    </View>
  )
}

export default ListViewHome
