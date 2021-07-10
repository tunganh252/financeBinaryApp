import React, { useEffect } from 'react'
import Swiper from 'react-native-swiper/src'
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import SafeAreaView from 'templates/SafeAreaView'
import { styles } from './style'
import { SvgXml } from 'react-native-svg'
import IconSearch from 'assets/icons/fontAwesome/IconSearch2'
import IconBell from 'assets/icons/fontAwesome/IconBell'
import IconGlobal from 'assets/icons/fontAwesome/IconGlobal'
import IconBar from 'assets/icons/fontAwesome/IconBar'
import { COLORS } from 'constant'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import ListCrypto from '../../molecules/ListCrypto'
import DiscountTag from 'assets/icons/discount-tag.svg'
import Invesment from 'assets/icons/investment.svg'
import Token from 'assets/icons/token.svg'
import CustomerService from 'assets/icons/customer-service.svg'
import Atom from 'assets/icons/atom.svg'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useGetSystemConfig } from 'services/module/system'
import { useAsync } from 'components/common/hooks/useAsyncState'

const listSlide = [
  'https://cdn-extons.tons.network/extons_ui/uploads/banners/18062020_banner-welcome-01.jpg?w=650',
  'https://cdn-extons.tons.network/extons_ui/uploads/banners/18062020_Banner_Web_Thisoption-02.png?w=650',
  'https://cdn-extons.tons.network/extons_ui/uploads/banners/18062020_Banner_Web_Thisoption-03.png?w=650',
  'https://cdn-extons.tons.network/extons_ui/uploads/banners/18062020_Banner_Web_Thisoption-04.png?w=650',
  'https://cdn-extons.tons.network/extons_ui/uploads/banners/18062020_Banner_Web_Thisoption-05.png?w=650',
]

const listMarket = [
  {
    symbolSecond: 'USDT',
    symbolFirst: 'BTC',
    currentPrice: '56,865.54',
    VOL: '20M',
    change: '-0.81',
    price: '1297325578.30',
    isUp: false,
    code: 'BTC',
  },
  {
    symbolSecond: 'USDT',
    symbolFirst: 'ETH',
    currentPrice: '3366.84',
    VOL: '10M',
    change: '+6.44',
    price: '77629254.79',
    isUp: true,
    code: 'ETH',
  },
  {
    symbolSecond: 'USDT',
    symbolFirst: 'HT',
    currentPrice: '26.0796',
    VOL: '15M',
    change: '-2.44',
    price: '601317.79',
    isUp: false,
    code: 'HT',
  },
  {
    symbolSecond: 'USDT',
    symbolFirst: 'BTC Swap',
    currentPrice: '56997.1',
    VOL: '24M',
    change: '-0.30',
    price: '230984.79',
    isUp: false,
    code: 'BTC Swap',
  },
]

const listCard = [
  {
    name: 'Rebate',
    note: {
      text: '30%',
      color: COLORS.pink,
      backgroundColor: COLORS.yellow,
    },
    image: DiscountTag,
  },
  {
    name: 'Earnings',
    image: Invesment,
  },
  {
    name: 'NFT Zone',
    image: Token,
  },
  {
    name: 'Chat',
    image: CustomerService,
  },
  {
    name: 'Polkadot ECO',
    image: Atom,
  },
  {
    name: 'HECO',
    note: {
      text: 'HOT',
      color: '#fff',
      backgroundColor: COLORS.red,
    },
    image: Invesment,
  },
  {
    name: 'Grid Bot',
    image: DiscountTag,
  },
  {
    name: 'USDT Futures',
    image: Token,
  },
  {
    name: 'ETH ECO',
    image: CustomerService,
  },
  {
    name: 'Deposit',
    image: Atom,
  },
]

const Home = ({ navigation }) => {
  const navigator = useNavigation()
  const windowWidth = Dimensions.get('window').width
  const settings = {
    autoplay: true,
    loop: true,
    horizontal: true,
    showsPagination: true,
    autoplayTimeout: 5,
    loadMinimal: true,
    loadMinimalSize: 5,
    dot: <View style={styles.dot} />,
    dotColor: 'rgba(255,255,255,.2)',
    activeDotColor: COLORS.primary,
    activeDot: <View style={styles.activeDot} />,
  }

  const { get: getSystemConfig } = useGetSystemConfig()
  const { execute: getSystemConfigAsync } = useAsync(getSystemConfig)

  useEffect(() => {
    getSystemConfigAsync()
  }, [])

  return (
    <View style={styles.main}>
      <SafeAreaView style={{ backgroundColor: COLORS.blueDark }}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.wrapAvatar}
              onPress={async () => {
                const userToken = await AsyncStorage.getItem('EXTONS_USER_LOCAL')
                if (userToken) navigator.navigate('Profile')
                else {
                  navigator.navigate('LoginScreen')
                }
              }}
            >
              <Image
                style={styles.avatar}
                source={{
                  uri: 'https://cdn-extons.tons.network/uploads/avatars//img/noavatar.png?w=70=&h=70',
                }}
              />
            </TouchableOpacity>
            <View style={styles.wrapSearch}>
              <IconSearch style={styles.iconSearch} width={18} height={18} />
              <TextInput
                placeholderTextColor={COLORS.lightGray}
                style={styles.inputSearch}
                placeholder="Search for coins"
              />
            </View>
            <View style={styles.wrapNotify}>
              <View style={styles.countMessage}>
                <Text style={{ color: COLORS.lightGray, fontWeight: 'bold', fontSize: 12 }}>12</Text>
              </View>
              <IconBell style={{ fill: 'currentColor', color: COLORS.lightGray }} width={25} height={37} />
            </View>
          </View>
          <View style={{ height: (windowWidth * 246) / 650 }}>
            <Swiper {...settings}>
              {listSlide.map((image) => (
                <View key={image} style={{ marginLeft: 20, marginRight: 20, padding: 0 }}>
                  <Image
                    style={{
                      aspectRatio: 650 / 246,
                      borderRadius: 10,
                      resizeMode: 'contain',
                      margin: 0,
                      padding: 0,
                    }}
                    source={{ uri: image }}
                  />
                </View>
              ))}
            </Swiper>
          </View>
          <View style={styles.notification}>
            <IconGlobal style={{ fill: 'currentColor', color: COLORS.lightGray }} width={14} height={14} />
            <Text numberOfLines={1} style={styles.textNotification}>
              Extons Will need BTC, ETH on July
            </Text>
            {/* <LinearGradient
              start={[0, 0]}
              end={[1, 0]}
              location={[0.4, 1]}
              colors={['rgba(27, 41, 69, .2)', COLORS.blueDark, COLORS.blueDark]}
              style={styles.touchBar}
            >
              <IconBar style={{ fill: 'currentColor', color: COLORS.lightGray }} width={15} height={15} /> */}
            {/* </LinearGradient> */}
          </View>
          <View style={styles.market}>
            <View style={styles.wrapMarket}>
              <ScrollView horizontal={true} bounces={false}>
                {listMarket.map((item) => (
                  <View key={item.name} key={item.code} style={styles.itemMarket}>
                    <View style={styles.wrapName}>
                      <Text style={styles.nameMarket}>{item.symbolFirst}/USDT</Text>
                      <Text style={[{ color: item.isUp ? COLORS.emerald : COLORS.pink }, styles.changeMarket]}>
                        {item.change}%
                      </Text>
                    </View>
                    <Text style={[{ color: item.isUp ? COLORS.emerald : COLORS.pink }, styles.priceMarket]}>
                      {item.currentPrice}
                    </Text>
                    <Text style={styles.totalPriceMarket}>₫{item.price}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={styles.market}>
            <View style={styles.wrapCard}>
              {listCard.map((item, index) => (
                <View style={[index < 5 ? { marginBottom: 20 } : {}, styles.card]} key={item.name}>
                  <View style={styles.wrapImageCard}>
                    <SvgXml
                      width={35}
                      height={35}
                      xml={item.image}
                      style={{ fill: 'currentColor', color: COLORS.lightGray }}
                    />
                    {item.note && (
                      <View style={[{ backgroundColor: item.note.backgroundColor }, styles.noteCard]}>
                        <Text style={[{ color: item.note.color }, styles.textNote]}>{item.note.text}</Text>
                      </View>
                    )}
                  </View>
                  <Text numberOfLines={1} style={styles.textCard}>
                    {item.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View style={{ backgroundColor: '#1a1e30' }}>
            <View style={{ borderRadius: 10, overflow: 'hidden', backgroundColor: '#1b2945' }}>
              <ListCrypto navigatio={navigation} listMarket={listMarket} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Home
