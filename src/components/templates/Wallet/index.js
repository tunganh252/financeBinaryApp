import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ExchangeDetail from './Screens/ExchangeDetail'
import PartnerDetail from './Screens/PartnerDetail'
import InvestmentDetail from './Screens/InvestmentDetail'
import DepositWallet from './Screens/DepositWallet'
import WithdrawWallet from './Screens/WithdrawWallet'
import TransferWallet from './Screens/TransferWallet'
import ScanWallet from './Screens/ScanWallet'
import DetailFinance from './Screens/DetailFinance'
import ConfirmWithDraw from './Screens/ConfirmWithdraw'
import ListFinance from './Screens/ListFinance'

const Stack = createStackNavigator()
const Wallet = ({ route }) => {
  const dataRoute = route.params

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  }
  const options = {
    transitionSpec: {
      open: config,
      close: config,
    },
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={dataRoute?.route}>
      <Stack.Screen  name="exchangeDetail" component={ExchangeDetail} initialParams={dataRoute} />
      <Stack.Screen name="investmentDetail" component={InvestmentDetail} initialParams={dataRoute} />
      <Stack.Screen name="partnerDetail" component={PartnerDetail} initialParams={dataRoute} />
      <Stack.Screen name="depositWallet" component={DepositWallet} />
      <Stack.Screen name="withdrawWallet" component={WithdrawWallet} />
      <Stack.Screen name="transferWallet" component={TransferWallet} />
      <Stack.Screen options={options} name="listFinance" component={ListFinance} />
      <Stack.Screen name="DetailFinance" component={DetailFinance} />
      <Stack.Screen name="ConfirmWithDraw" component={ConfirmWithDraw} />
      <Stack.Screen name="scanWallet" component={ScanWallet} />
    </Stack.Navigator>
  )
}

export default Wallet
