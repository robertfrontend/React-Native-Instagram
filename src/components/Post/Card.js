import React from "react";
import { View, Image } from "react-native";
import StyledText from "../StyledText";
import ActionsLikes from "./ActionsLikes";
import Header from "./Header";

const Card = ({ data }) => {
  return (
    <View
      key={data.id}
      style={{ width: "100%", padding: 0, paddingBottom: 50 }}
    >
      <Header />
      <View>
        <Image
          style={{ width: "100%", height: 400 }}
          source={{ uri: data.url }}
        />
      </View>
      <ActionsLikes />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          width: "100%",
        }}
      >
        <View>
          <StyledText color="black" fontSize="subtitle2" fontWeight="bold">
            Usuario: <StyledText fontSize="subtitle2">{data.title}</StyledText>
          </StyledText>
        </View>
      </View>
    </View>
  );
};

export default Card;
