import React from "react";
import TabView from "templates/TabView";
import BigTitle from "components/atoms/Title/bigtitle.js";
import TagDirection from "components/atoms/TagSelection/basic";
import Line from "components/atoms/Line";

const Language = () => {
  return (
    <TabView>
      <BigTitle style={{ color: "white", opacity: 0.8, marginBottom: 20 }}>Language</BigTitle>
      <TagDirection type="info" text="English">
        Language
      </TagDirection>
      <Line />
      <TagDirection type="info" text="VND">
        Currency
      </TagDirection>
      <Line />
      <TagDirection type="info" text="Green up and red down">
        Color
      </TagDirection>
      <Line />
      <TagDirection type="info">
        Network test
      </TagDirection>
      <Line />
    </TabView>
  );
};

export default Language;
