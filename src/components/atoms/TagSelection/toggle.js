import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { styles } from './styles'
import { COLORS } from 'constant'
import LinkButton from 'atoms/LinkButton'
import Switch from '../Input/switch'

const ListStyle = StyleSheet.create({
  text: {
    marginRight: 10,
    color: COLORS.white,
    fontFamily: 'RobotoMedium',
    opacity: 0.6,
  },
  warning: {
    color: COLORS.pinkBlack,
    opacity: 1,
  },
  item: {
    borderBottomColor: COLORS.gray,
    paddingTop: 10,
    paddingBottom: 10,
  },
})

const TagToggle = (props) => {
  const { children, style, onChange = () => {} } = props
  const onchange = (value) => {
  }
  return (
    <View style={[styles.group, ListStyle.item, style]}>
      <View style={styles.wrapText}>
        <Text style={styles.text}>{children}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Switch onChange={onchange} />
      </View>
    </View>
  )
}

export default TagToggle
