import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { COLORS } from '../../../constant/themes'
import { useNavigation } from '@react-navigation/native'
import ButtonLink from '../LinkButton/index'

const CardVertical = (props) => {
  const { text, description = 'Nội dung cơ bản', icon, to } = props

  const Content = () => (
    <React.Fragment>
      <View style={style.wrap}>
        <View>
          <Text style={{ color: 'white', fontFamily: 'RobotoBold', opacity: 0.9, fontSize: 16 }}> {text} </Text>
          <Text style={{ color: 'white', fontFamily: 'RobotoMedium', marginTop: 6, fontSize: 10, opacity: 0.5 }}>
            {description}
          </Text>
        </View>
        <View>
          <SvgXml width={26} height={26} xml={icon} style={{ marginRight: 10 }} />
        </View>
      </View>
    </React.Fragment>
  )
  if (to)
    return (
      <ButtonLink style={style.card} to={to}>
        <Content />
      </ButtonLink>
    )
  else
    return (
      <TouchableOpacity style={style.card} to={to}>
        <Content />
      </TouchableOpacity>
    )
}

const style = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
    width: '48%',
    marginBottom: 16,
  },
  wrap: {
    backgroundColor: COLORS.blueDark,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    borderRadius: 6,
    overflow: 'hidden',
    borderColor: 'rgba(158, 150, 150, .6)',
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default CardVertical
