import React from "react";
import { Text, View, StyleSheet } from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAwsome from "react-native-vector-icons/FontAwesome";
import IconIonicons from "react-native-vector-icons/Ionicons";
import theme from "../../theme";

export default function ActionsLikes() {
  return (
    <View style={ActionsStyles.content}>
      <View style={{ display: "flex", flexDirection: "row", width: "50%" }}>
        <IconAnt
          name="hearto"
          size={25}
          color={theme.colors.black}
          style={{ paddingRight: 15 }}
        />
        <IconAwsome
          name="comment-o"
          size={25}
          color={theme.colors.black}
          style={{ paddingRight: 15 }}
        />
        <IconIonicons
          name="paper-plane-outline"
          size={25}
          color={theme.colors.black}
          style={{ paddingRight: 15 }}
        />
      </View>
      <View>
        <IconIonicons
          name="bookmark-outline"
          size={25}
          color={theme.colors.black}
          style={{ paddingRight: 15 }}
        />
      </View>
    </View>
  );
}

const ActionsStyles = StyleSheet.create({
  content: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
