import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import IconRight from 'fontAwesome/IconRight'
import { styles } from './styles'
import { COLORS, SIZES } from 'constant'
import LinkButton from 'atoms/LinkButton'

const TagSelection = (props) => {
  const Icon = props.icon
  const { onPress = () => {} } = props

  const Content = () => (
    <React.Fragment>
      <View style={styles.wrapText}>
        {props.icon && <Icon width={16} height={24} style={styles.icon} color={COLORS.lightGray} />}
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <IconRight width={6} height={12} color={COLORS.lightGray} />
    </React.Fragment>
  )

  if (props.to) {
    return (
      <LinkButton to={props.to} style={styles.group}>
        <Content />
      </LinkButton>
    )
  }

  return (
    <TouchableOpacity style={styles.group} onPress={onPress}>
      <Content />
    </TouchableOpacity>
  )
}

export default TagSelection
