import React, { useState } from 'react'
import { View, Alert } from 'react-native'
import TabView from 'templates/TabView'
import BigTitle from 'components/atoms/Title/bigtitle.js'
import InputPassword from 'components/atoms/Input/password.js'
import TextSmall from 'components/atoms/Body/small.js'
import Button from 'components/atoms/Button'

const ModifyPassword = () => {
  const [form, setForm] = useState({
    oldPassword: '',
    password: '',
    confirmPassword: '',
  })
  const [message, setMessage] = useState({
    oldPassword: '',
    password: '',
    confirmPassword: '',
  })

  const onChange = (name) => {
    return (value) => {
      setForm((form) => {
        const newForm = { ...form }
        newForm[name] = value
        return newForm
      })
    }
  }

  const onSubmit = () => {
    const tempMessage = {
      oldPassword: '',
      password: '',
      confirmPassword: '',
    }

    if (form.oldPassword === '') tempMessage.oldPassword = 'Inavlid found old password'
    if (form.password === '') tempMessage.password = 'Inavlid found password'
    if (form.confirmPassword === '') tempMessage.confirmPassword = 'Two passwords do not match'
    if (form.password !== form.confirmPassword) tempMessage.confirmPassword = 'Two passwords do not match'

    setMessage(tempMessage)
    if (!tempMessage.oldPassword && !tempMessage.password && !tempMessage.password) {
      // console.log('Change success')
    }
  }

  return (
    <TabView>
      <View style={{ flex: '1', justifyContent: 'space-between' }}>
        <View>
          <BigTitle style={{ color: 'white', opacity: 0.8 }}>Fiat Settings</BigTitle>
          <TextSmall style={{ marginTop: 10, fontSize: 12 }}>Old password</TextSmall>
          <InputPassword
            style={{ marginTop: 10 }}
            messageError={message.oldPassword}
            placeholder="8 - 32 characters"
            onChange={onChange('oldPassword')}
          />
          <TextSmall style={{ marginTop: 10, fontSize: 12, opacity: 0.8 }}>Password</TextSmall>
          <InputPassword
            style={{ marginTop: 10 }}
            placeholder="8 - 32 characters. Start with a letter"
            onChange={onChange('password')}
            messageError={message.password}
          />
          <TextSmall style={{ marginTop: 10, fontSize: 12, opacity: 0.8 }}>Confirm Password</TextSmall>
          <InputPassword
            style={{ marginTop: 10 }}
            placeholder="Please confirm your found password"
            onChange={onChange('confirmPassword')}
            messageError={message.confirmPassword}
          />
        </View>
        <Button style={{ opacity: 0.5 }} onPress={onSubmit}>
          Confirm
        </Button>
      </View>
    </TabView>
  )
}

export default ModifyPassword
