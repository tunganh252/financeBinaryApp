import { Platform, StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../../constant'

export const styles = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: SIZES.padding * 1.5,
  },

  viewTabHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  tabHeader__text: {
    paddingBottom: 8,
    fontSize: 13,
    color: '#7982a5',
    fontWeight: '600',
    position: 'relative',
  },
  viewLine__text: {
    backgroundColor: COLORS.primary,
    color: COLORS.primary,
    width: '100%',
    height: 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  textFilter: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#151515',
    borderRadius: 5,
    fontSize: 10,
    color: COLORS.white,
    fontWeight: '700',
    marginRight: 10,
    overflow: 'hidden',
  },

  viewLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#636a7757',
    marginTop: 15,
  },

  viewCoinContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 7,
  },

  viewFlexRowJustifyStart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  viewLastFilterCoin: {
    flex: 1.2,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  textFilterCoin: {
    color: COLORS.gray,
    fontWeight: '600',
    opacity: 0.6,
    fontSize: 12,
    textTransform: 'uppercase',
  },

  textBtnPercent: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 7,
    overflow: 'hidden',
    color: COLORS.white,
    fontWeight: 'bold',
  },
})
