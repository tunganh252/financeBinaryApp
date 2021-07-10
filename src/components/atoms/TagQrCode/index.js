import React from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

const TagQrCode = ({
  valueQrCode = "qrCode",
  size,
  logo,
  color,
  backgroundColor,
}) => {
  return (
    <View style={styles.container}>
      <QRCode
        value={valueQrCode}
        size={size}
        logo={logo}
        color={color}
        backgroundColor={backgroundColor}
      />
    </View>
  );
};

export default TagQrCode;

const styles = StyleSheet.create({
  container: { width: 100 },
});
