import React, { useState, useEffect } from 'react'
import { Alert, Text, View, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import Constants from 'expo-constants'
import { Dimensions } from 'react-native'
import IconBracket from 'assets/icons/fontAwesome/IconBracket'
import { useNavigation } from '@react-navigation/core'

const { width } = Dimensions.get('window')
const qrSize = width * 0.7

export default ScanWallet = () => {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`)
    showAlert(data)
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  const showAlert = (value = 'empty') =>
    Alert.alert('QR Code scaned', value, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Enter address',
        onPress: () => navigation.navigate('withdrawWallet', { addressScan: value }),
        style: 'cancel',
      },
    ])

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >
        {/* <Text style={styles.description}>Scan your QR code</Text> */}
        {/* <Image style={styles.qr} source={img_qrScan} /> */}
        <IconBracket width={300} height={300} />
        <Text onPress={() => navigation.goBack()} style={styles.cancel}>
          Cancel
        </Text>
      </BarCodeScanner>
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  qr: {
    marginTop: '20%',
    marginBottom: '20%',
    width: qrSize,
    height: qrSize,
  },
  description: {
    fontSize: width * 0.09,
    marginTop: '10%',
    textAlign: 'center',
    width: '70%',
    color: 'white',
  },
  cancel: {
    fontSize: width * 0.05,
    textAlign: 'center',
    width: '70%',
    color: 'white',
    marginTop: 30,
  },
})
