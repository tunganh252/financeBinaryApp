import React from "react";
import { View } from "react-native";
import TabView from "templates/TabView";
import BigTitle from "components/atoms/Title/bigtitle.js";
import ProgressBar from "components/atoms/Progress-Bar";
import TextSmall from "components/atoms/Body/small.js";
import TextLarge from "components/atoms/Body/large.js";
import TagDirection from "components/atoms/TagSelection/basic";
import { COLORS } from "constant/themes";
import Line from "components/atoms/Line";

const Profile = () => {
  return (
    <TabView>
      <BigTitle style={{ color: "white", opacity: 0.8, marginBottom: 20 }}>Security</BigTitle>
      <TextSmall style={{ opacity: 0.5 }}>Security Level</TextSmall>
      <ProgressBar progress={25} />
      <TextSmall style={{ marginTop: 4, opacity: 1, color: COLORS.pinkBlack, fontSize: 12 }}>
        Please enable at least 2 authentications
      </TextSmall>
      <TagDirection type="warning" text="Not Linked" style={{ marginTop: 20 }}>
        Phone
      </TagDirection>
      <Line />
      <TagDirection type="info" text="inked" to="/profile/email">
        Email
      </TagDirection>
      <Line />
      <TagDirection type="warning" text="Not Linked">
        Google Authenticator
      </TagDirection>
      <Line />
      <TextLarge style={{ marginTop: 30, opacity: 0.6, fontSize: 14 }}>Fiat Settings</TextLarge>
      <Line />
      <TagDirection to="/profile/payment">Payment Method Management</TagDirection>
      <Line />
      <TagDirection text="Unset" to="/profile/modifypassword">
        Fund Password
      </TagDirection>
      <Line />
      <TextLarge style={{ marginTop: 30, opacity: 0.6, fontSize: 14 }}>Others</TextLarge>
      <Line />
      <TagDirection>Face ID Unlock</TagDirection>
      <Line />
    </TabView>
  );
};

export default Profile;
