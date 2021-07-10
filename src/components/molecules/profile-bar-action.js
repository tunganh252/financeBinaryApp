import React from "react";
import { View, Text, Image } from "react-native";
import Card from "../atoms/Card/horizontal";
import OrdersIcon from "../../assets/icons/bookshelf.svg";
import PNLIcon from "../../assets/icons/card.svg";
import FeesIcon from "../../assets/icons/fees.svg";
import SupportIcon from "../../assets/icons/supports.svg";

const ProfileBarAction = (props) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <Card icon={OrdersIcon} text="Orders" />
      <Card icon={PNLIcon} text="PNL" />
      <Card icon={FeesIcon} text="Fees" />
      <Card icon={SupportIcon} text="Supports" />
    </View>
  );
};

export default ProfileBarAction;
