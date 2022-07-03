import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StyledText from "../StyledText";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import theme from "../../theme";

export default function Header() {
  return (
    <View style={HeaderStyles.content}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={{ paddingRight: 10 }}>
          <Image
            style={{ width: 35, height: 35, borderRadius: 100 }}
            source={{ uri: "https://picsum.photos/200/300" }}
          />
        </View>
        <View>
          <StyledText color="black" fontSize="subtitle2" fontWeight="bold">
            rbert.c
          </StyledText>
          <StyledText fontSize="subtitle2">
            Santo Domingo, Dominican Republic
          </StyledText>
        </View>
      </View>
      <View>
        <IconSimpleLineIcons
          name="options"
          size={16}
          color={theme.colors.black}
          style={{ paddingRight: 15 }}
        />
      </View>
    </View>
  );
}

const HeaderStyles = StyleSheet.create({
  content: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
