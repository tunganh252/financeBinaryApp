import styled from 'styled-components/native'
import { StyleSheet, Platform } from 'react-native'
import { COLORS, FONTS } from 'constant/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blueBlack,
  },
  wrapHeader: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 0,
    paddingTop: Platform.OS === 'ios' ? 10 : 40,
  },
  viewHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    marginTop: 17,
    color: COLORS.white,
    ...FONTS.h1,
  },
  wrapCoin: {
    marginLeft: 15,
  },
  textCoin: {
    color: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayTransparent,
    paddingBottom: 10,
    marginTop: 20,
    fontSize: 20,
  },
  wrapSwitchWallet: {
    marginHorizontal: 15,
    marginTop: 20,
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
  wrapAlert: {
    backgroundColor: COLORS.blueDark,
    marginHorizontal: 15,
    marginTop: 30,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  blockAction: {
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 15,
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
