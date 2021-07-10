import { COLORS, FONTS } from 'constant'
import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blueBlack,
  },
  wrapHeader: {
    width: '100%',
    marginHorizontal: 15,
    marginTop: Platform.OS === 'ios' ? 10 : 40,
  },
  textNameCoin: {
    marginTop: 17,
    color: COLORS.white,
    ...FONTS.h1,
  },
  viewHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blockCoin: {
    paddingVertical: 10,
    marginHorizontal: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.blueDark,
    marginTop: 25,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCoin: {
    color: COLORS.white,
    fontSize: 16,
    marginRight: 15,
  },
  textFullName: {
    color: COLORS.grayTransparent,
    fontSize: 16,
  },
  blockChainName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 15,
  },
  wrapChainItem: {
    width: 80,
    marginRight: 15,
  },
  blockQRCode: {
    backgroundColor: COLORS.blueDark,
    marginTop: 25,
    marginHorizontal: 15,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btnSaveQrCode: {
    marginTop: 20,
    marginBottom: 10,
    width: 130,
    backgroundColor: COLORS.blueBlack,
    borderWidth: 0.3,
    borderColor: COLORS.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 10,
    fontSize: 15,
  },
  textAddressCode: {
    color: COLORS.white,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  btnCopyAddress: {
    marginTop: 20,
    width: 100,
    backgroundColor: COLORS.lightGrey,
    borderRadius: 5,
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  textCopyAddress: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 11,
    opacity: 0.8,
  },
})