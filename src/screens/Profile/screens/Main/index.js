import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useNavigation, Link } from '@react-navigation/native'
import IconBack from 'fontAwesome/IconBack'
import IconRight from 'fontAwesome/IconRight'
import IconCopy from 'fontAwesome/IconCopy'
import { COLORS } from 'constant'
import { styles } from './styles'
import ProfileBarAction from 'components/molecules/profile-bar-action'
import ProfileBarLink from 'components/molecules/profile-bar-link'
import TagSelection from 'atoms/TagSelection'
import IconShield from 'fontAwesome/IconShield'
import IconShare from 'fontAwesome/IconShare'
import IconInfoCircle from 'fontAwesome/IconInfoCircle'
import IconCog from 'fontAwesome/IconCog'
import Logout from 'fontAwesome/IconLogout'
import { useUserLogout, useGetProfile } from 'services/module/user'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoadingScreen from 'atoms/LoadingScreen'

const infomation = { email: 'newbie.dev.js@gmail.com' }

const Profile = () => {
  const { post: logoutAction } = useUserLogout()
  const navigation = useNavigation()
  const { get: getProfile, state: user } = useGetProfile()

  const handleLogout = () => {
    logoutAction()
    navigation.replace('MainScreen')
  }

  if (!user.profile) {
    getProfile()
    return <LoadingScreen />
  }

  const formatEmail = user.profile.email.slice(0, 3) + '****@gmail.com'

  return (
    <View
      style={{
        backgroundColor: COLORS.blueDark,
        height: '100%',
        maxWidth: '100%',
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.iconBack}>
          <TouchableOpacity style={{ justifyContent: 'flex-start' }} onPress={() => navigation.goBack()}>
            <IconBack width={18} height={18} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.main}>
          <View style={styles.infomation}>
            <View style={styles.wrapAvatar}>
              <Image
                style={styles.avatar}
                source={{
                  uri: 'https://cdn-extons.tons.network/uploads/avatars//img/noavatar.png?w=70=&h=70',
                }}
              />
            </View>
            <View style={styles.wrapInfo}>
              <Text style={styles.title} numberOfLines={1}>
                Hi, {formatEmail}
              </Text>
              <TouchableOpacity style={styles.wrapUid}>
                <Text style={styles.uid}>UID:{user.profile.accountNumber}</Text>
                <IconCopy width={12} height={12} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.levels} onPress={() => navigation.goBack()}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://www.pngarts.com/files/3/VIP-PNG-Transparent-Image.png',
              }}
            />
            <Text style={styles.textlevels}>VIP levels and privileges</Text>
            <View
              style={{
                marginLeft: 'auto',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <IconRight
                color="#bc9a67"
                width={8}
                height={16}
                style={{ display: 'flex', alignItems: 'center', fontSize: 14 }}
              />
            </View>
          </TouchableOpacity>
          <View style={{ marginTop: 20 }}>
            <ProfileBarAction />
          </View>
          <View style={{ marginTop: 20 }}>
            <ProfileBarLink />
          </View>
          <View style={{ marginTop: 20, paddingBottom: 50 }}>
            <TagSelection icon={IconShield} text="Security" to="/profile/security" />
            <TagSelection icon={IconCog} text="General" to="/profile/general" />
            <View style={styles.hr} />
            <TagSelection icon={IconInfoCircle} text="About" />
            <TagSelection icon={IconShare} text="Share the app" />
            <TagSelection icon={Logout} text="Logout" onPress={handleLogout} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Profile
