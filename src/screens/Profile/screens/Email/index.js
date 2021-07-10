import React, { useState } from 'react'
import { View, Alert } from 'react-native'
import TabView from 'templates/TabView'
import TagDirection from 'components/atoms/TagSelection/basic'
import BigTitle from 'components/atoms/Title/bigtitle.js'
import Toggle from 'components/atoms/TagSelection/toggle'
import TextSmall from 'components/atoms/Body/small.js'
import Button from 'components/atoms/Button'

const Email = () => {
  return (
    <TabView>
      <BigTitle style={{ color: 'white', opacity: 0.8 }}>Email</BigTitle>
      <TagDirection text="newbie***@gmail.com" noIcon style={{ marginTop: 20 }}>
        Email
      </TagDirection>
      <Toggle text="Toggle" noIcon style={{ marginTop: 20 }}>
        Email Verification Code
      </Toggle>
    </TabView>
  )
}

export default Email
