import React from 'react'
import { View, TouchableOpacity, Platform } from 'react-native'
import SafeAreaView from '../SafeAreaView'
import { useNavigation } from '@react-navigation/native'
import IconBack from 'fontAwesome/IconBack'
import { COLORS } from 'constant'
const TabView = (props) => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        backgroundColor: '#131f2f',
        height: '100%',
        maxWidth: '100%',
      }}
    >
      <SafeAreaView>
        <View style={{ padding: props.padding === 0 ? 0 : 20, position: 'relative' }}>
          <TouchableOpacity
            style={{
              padding: 10,
              position: 'absolute',
              left: 10,
            }}
            onPress={() => navigation.goBack()}
          >
            <IconBack width={18} height={18} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: props.padding === 0 ? 0 : 20, flex: 1 }}>{props.children}</View>
      </SafeAreaView>
    </View>
  )
}

export default TabView
