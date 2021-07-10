import { StyleSheet } from 'react-native'
import { COLORS } from '../../../../../constant'

export const styles = StyleSheet.create({
  textBalance: {
    color: COLORS.gray,
    fontSize: 12,
  },
  viewMoney: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  viewFilter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  viewItemTrading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },

  viewEstimated: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
    flex: 1,
  },
  textLineItemTrading: {
    width: '100%',
    height: 1,
    backgroundColor: '#636a7757',
    marginTop: 15,
  },
  textItemCoin: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop: 15,
  },
  textItemAvailable: {
    color: COLORS.white,
    color: '#636a77',
    fontSize: 11,
  },
  textItemOnOrder: {
    color: COLORS.white,
    color: '#636a77',
    fontSize: 11,
  },
  textItemEstimated: {
    color: COLORS.white,
    color: '#636a77',
    fontSize: 11,
  },
  textItemValueEstimated: {
    color: COLORS.gray,
    fontSize: 10,
    lineHeight: 20,
  },
})
