import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";

const CardHorizontal = (props) => {
  const { text, icon } = props;
  return (
    <TouchableOpacity style={{ alignItems: "center", width: "25%" }}>
      <SvgXml width={30} height={30} xml={icon} />
      <Text style={{ textAlign: "center", color: "white", fontFamily: "RobotoMedium", marginTop: 8, fontSize: 12, opacity: 0.8 }}> {text} </Text>
    </TouchableOpacity>
  );
};

export default CardHorizontal;
