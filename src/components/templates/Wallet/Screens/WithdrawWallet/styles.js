import { COLORS, FONTS } from 'constant/themes'
import { Platform, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

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
  wrapInputGroup: {
    marginTop: 40,
    marginLeft: 15,
    position: 'relative',
  },
  wrapActionInput: {
    position: 'absolute',
    right: 15,
    bottom: 35,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: 2,
    height: ' 100%',
    backgroundColor: COLORS.grayTransparent,
    marginHorizontal: 15,
    opacity: 0.5,
  },
  blockAction: {
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  wrapInfoAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export const TouchAbleBtnWithdraw = styled.TouchableOpacity`
  margin-top: 15px;
  background-color: ${(props) => (props.disabled ? COLORS.grayTransparent : COLORS.primary)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border-radius: 5px;
`
