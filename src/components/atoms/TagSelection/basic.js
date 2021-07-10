import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IconRight from 'fontAwesome/IconRight'
import { useLinkProps } from '@react-navigation/native'
import { styles } from './styles'
import { COLORS } from 'constant'
import LinkButton from 'atoms/LinkButton'

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

const TagSelection = (props) => {
  const { text, children, type = 'info', style, to, noIcon } = props
  const classWarning = type === 'warning' ? ListStyle.warning : []
  const Content = () => (
    <React.Fragment>
      <View style={styles.wrapText}>
        <Text style={styles.text}>{children}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {text && <Text style={[ListStyle.text, classWarning]}>{text}</Text>}
        {!noIcon && <IconRight width={6} height={12} color={COLORS.lightGray} />}
      </View>
    </React.Fragment>
  )

  if (to)
    return (
      <LinkButton style={[styles.group, ListStyle.item, style]} to={to}>
        <Content />
      </LinkButton>
    )
  else
    return (
      <View style={[styles.group, ListStyle.item, style]}>
        <Content />
      </View>
    )
}

export default TagSelection
