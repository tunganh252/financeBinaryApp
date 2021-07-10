import React from 'react'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import { View, Text, TouchableOpacity } from 'react-native'

import { COLORS, SIZES } from '../../../constant'

import { styles } from './styles'

import { dataTabNavigation } from './constant'

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
  const _loopRenderTab = (data) => {
    if (!data || data.length < 0) return
    return data.map((item, index) => {
      const { icon: Icon, component: Component } = item
      return (
        <Tab.Screen
          key={index}
          name={item.name}
          component={Component}
          options={{
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    color: focused ? COLORS.primary : COLORS.gray,
                    ...styles.tabBarLabel__text,
                  }}
                >
                  {item.name}
                </Text>
              )
            },
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ marginTop: SIZES.padding2 }}>
                  <Icon width={16.5} height={16.5} color={focused ? COLORS.primary : COLORS.gray} />
                </View>
              )
            },
            tabBarButton: (props) => <TabBarCustomButton {...props} item={item} />,
            tabBarButton: ({
              // accessibilityLabel,
              accessibilityState,
              children,
              onPress,
            }) => {
              let isSelected = accessibilityState.selected
              if (isSelected) {
                return (
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
                  </View>
                )
              } else {
                return (
                  <TouchableOpacity
                    style={[styles.touch__btn, { opacity: item.disable ? 0.5 : 1 }]}
                    activeOpacity={1}
                    onPress={() => {
                      if (!item.disable) onPress()
                    }}
                  >
                    {children}
                  </TouchableOpacity>
                )
              }
            },
          }}
        />
      )
    })
  }

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBarOptions={{
        showLabel: true,
        style: {
          ...styles.tabBarOptions,
          ...styles.shadow,
        },
      }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      {_loopRenderTab(dataTabNavigation)}
    </Tab.Navigator>
  )
}

export default BottomTabNavigation
