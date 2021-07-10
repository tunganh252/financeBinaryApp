import React from "react";
import { View, Text, Image } from "react-native";
import Card from "../atoms/Card/vertical";
import OrdersIcon from "../../assets/icons/coupon.svg";
import CardIcon from "../../assets/icons/card.svg";
import InviteIcon from "../../assets/icons/invite.svg";


const ProfileBarAction = (props) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", flexWrap: "wrap" }}>
      <Card icon={InviteIcon} des text="Invite" />
      <Card icon={OrdersIcon} text="Coupon" />
      <Card icon={CardIcon} des text="Point Card" />
    </View>
  );
};

export default ProfileBarAction;
