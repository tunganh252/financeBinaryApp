import { StyleSheet, Platform } from 'react-native'
import { COLORS, SIZES, STYLES, FONTS } from 'constant'

export const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.blueBlack,
    height: '100%',
    maxWidth: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  wrapAvatar: {
    width: 37,
    aspectRatio: 1 / 1,
    marginRight: SIZES.padding2,
    position: 'relative',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  wrapSearch: {
    flexDirection: 'row',
    position: 'relative',
    width: '80%',
    paddingRight: 20,
  },
  iconSearch: {
    color: COLORS.lightGray,
    position: 'absolute',
    top: 10,
    left: 15,
    zIndex: 1,
  },
  inputSearch: {
    paddingLeft: 45,
    width: '100%',
    color: COLORS.lightGray,
    fontSize: SIZES.font,
    fontWeight: 'bold',
    backgroundColor: COLORS.blueBlack,
    paddingTop: Platform.OS === 'android' ? 5 : 10,
    paddingBottom: Platform.OS === 'android' ? 5 : 10,
    paddingRight: 10,
    borderRadius: 50,
  },
  wrapNotify: {
    position: 'relative',
  },
  countMessage: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: COLORS.red,
    fontWeight: 'bold',
    width: 20,
    height: 20,
    top: -3,
    right: -5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    color: COLORS.lightGray,
    borderWidth: 2,
    borderColor: COLORS.blueBlack,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,.2)',
    width: 20,
    height: 3,
    // bottom: 0,
  },
  activeDot: {
    backgroundColor: COLORS.primary,
    width: 20,
    height: 3,
    // bottom: 0,
  },
  notification: {
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  textNotification: {
    fontSize: 12,
    color: COLORS.lightGray,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  touchBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 44,
  },
  market: {
    backgroundColor: COLORS.blueBlack,
    paddingBottom: 15,
  },
  wrapMarket: {
    backgroundColor: COLORS.blueDark,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  itemMarket: {
    marginRight: 15,
    marginBottom: 15,
  },
  wrapName: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  nameMarket: {
    color: COLORS.lightGray,
    marginRight: 3,
    ...FONTS.h6,
  },
  changeMarket: {
    ...FONTS.h6,
  },
  priceMarket: {
    fontFamily: 'RobotoMedium',
    fontSize: SIZES.h3,
    marginBottom: 5,
  },
  totalPriceMarket: {
    color: 'rgba(255,255,255,.5)',
    ...FONTS.body4,
    fontFamily: 'RobotoMedium',
  },
  wrapCard: {
    backgroundColor: COLORS.blueDark,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
  },
  card: {
    width: '20%',
    alignItems: 'center',
  },
  wrapImageCard: {
    position: 'relative',
  },
  imageCard: {
    width: 30,
    height: 30,
  },
  noteCard: {
    borderRadius: 20,
    width: 35,
    position: 'absolute',
    bottom: -8,
    left: 0,
    borderWidth: 2,
    borderColor: COLORS.blueDark,
  },
  textNote: {
    fontSize: 12,
    fontFamily: 'RobotoBold',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textCard: {
    flex: 1,
    fontFamily: 'RobotoMedium',
    color: COLORS.lightGray,
    marginTop: 10,
    fontSize: 12,
  },
})