import React, { useState, useEffect } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, View, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'

import * as Styles from './styles'
import { COLORS } from 'constant/themes'

const InputGroup = (props) => {
  const { labelText, placeholder, type, handleGetValue, defaultValue, disable = false, desctiption } = props
  const [value, setValue] = useState('')

  useEffect(() => {
    if (handleGetValue) handleGetValue(value)
  }, [value])

  useEffect(() => {
    if (!!defaultValue) {
      setValue(defaultValue)
    }
  }, [defaultValue])

  return (
    <Styles.BoundContainer>
      <Styles.LabelText {...props}>{labelText}</Styles.LabelText>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Styles.TextInputValue
              placeholderTextColor={COLORS.grayTransparent}
              placeholder={placeholder}
              keyboardType={type}
              autoCapitalize="none"
              onChangeText={(val) => {
                setValue(val)
              }}
              value={value}
              editable={disable ? false : true}
              {...props}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Styles.TextDesctiption>{desctiption}</Styles.TextDesctiption>
    </Styles.BoundContainer>
  )
}

InputGroup.propTypes = {
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.oneOf([
    'email-address',
    'default',
    'number-pad',
    'decimal-pad',
    'numeric',
    'email-address',
    'phone-pad',
  ]),
  handleGetValue: PropTypes.func,
  paddingTextInput: PropTypes.string,
  fzLabel: PropTypes.string,
  fzInput: PropTypes.string,
  disable: PropTypes.bool,
  desctiption: PropTypes.string,
}

InputGroup.defaultProps = {
  labelText: 'labelText',
  placeholder: 'placeholder',
  type: 'default',
  handleGetValue: (value = '') => {
  },
  paddingTextInput: '5px 0',
  fzLabel: '12px',
  fzInput: '15px',
  disable: false,
}

export default InputGroup
