import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextMedium, TextLarge, TextSmall } from 'components/atoms/Body'
import Button from 'components/atoms/LinkButton'
import { SvgXml } from 'react-native-svg'
import MoreIcon from 'assets/icons/fontAwesome/more'
import { useNavigation } from '@react-navigation/core'
import { COLORS } from 'constant/themes'

const listStyle = StyleSheet.create({
  listTitle: {
    flexDirection: 'row',
    marginVertical: 10,
    opacity: 0.5,
  },
  element: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  item: {
    flex: 1,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'RobotoRegular',
  },
  content: {
    fontSize: 14,
  },
  itemFisrt: {
    flex: 1.5,
  },
  itemLast: {
    justifyContent: 'flex-end',
  },
})

const BinanceRecords = ({ style, title }) => {
  const data = [
    { price: '19.000000000', time: '16:38 05/08', status: 'Completed', unique: '123s' },
    { price: '19.000000000', time: '16:38 05/08', status: 'Completed', unique: '231243' },
    { price: '19.000000000', time: '16:38 05/08', status: 'Completed', unique: '1241321' },
  ]
  return (
    <View style={[style]}>
      <TextMedium style={{ color: 'white' }}>{title || 'General'}</TextMedium>
      <View style={listStyle.listTitle}>
        <ItemTitle key="Price" style={{ flex: 1.5, color: COLORS.lightGrey }}>
          Price
        </ItemTitle>
        <ItemTitle key="status" style={{ justifyContent: 'flex-start', color: COLORS.lightGrey }}>
          Status
        </ItemTitle>
        <ItemTitle key="time" style={{ justifyContent: 'flex-end',color: COLORS.lightGrey }}>
          Date
        </ItemTitle>
      </View>

      {data.map((element, index) => {
        return (
          <Button key={element.unique} style={[listStyle.element]} to="/wallet/finance">
            <Item key={'iasdoisuo' + index} style={listStyle.itemFisrt}>
              {element.price}
            </Item>
            <Item key={element.status + index + Math.random()}>{element.status}</Item>
            <Item key={element.time + index + Math.random()} style={listStyle.itemLast} icon>
              {element.time}
            </Item>
          </Button>
        )
      })}
    </View>
  )
}

const Item = ({ children, style, icon, bold }) => {
  return (
    <View style={[listStyle.item, style]}>
      <TextMedium style={[listStyle.content]}>{children}</TextMedium>
      <View style={{ marginLeft: 6 }}>
        {icon && <MoreIcon width={10} height={10} color={COLORS.grayTransparent} />}
      </View>
    </View>
  )
}

const ItemTitle = ({ style, children }) => {
  return (
    <View style={[listStyle.item, style]}>
      <TextLarge style={[listStyle.content, { fontSize: 12, marginRight: 16, fontFamily: 'RobotoBold' }]}>{children}</TextLarge>
    </View>
  )
}

export default BinanceRecords
