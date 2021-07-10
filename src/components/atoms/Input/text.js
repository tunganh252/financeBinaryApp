import React from "react";
import { TextInput } from "react-native";
import { COLORS } from "constant";

const ListStyle = StyleSheet.create({});

const FieldPassword = (props) => {
  return <TextInput secureTextEntry={true} style={{ borderWidth: 1 }} />;
};

export default FieldPassword;
