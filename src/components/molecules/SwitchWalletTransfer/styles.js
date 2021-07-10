import { COLORS, FONTS } from 'constant/themes'
import { Platform, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLORS.grayTransparent,
  },
  blockWallet: {
    height: '100%',
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  wrapIndicator: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 5,
    paddingVertical: 7,
  },
  wrapFromTo: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  line: {
    width: '100%',
    backgroundColor: COLORS.grayTransparent,
    height: 0.5,
    opacity: 0.7,
  },
  touchAction: {
    width: '20%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blueDark,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  circleView: {
    width: 44,
    height: 44,
    backgroundColor: COLORS.blueBlack,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  wrapFlexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const OvalColor = styled.View`
  width: ${(props) => (props.size ? props.size : '10px')};
  height: ${(props) => (props.size ? props.size : '10px')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : COLORS.primary)};
  border-radius: 50px;
`
