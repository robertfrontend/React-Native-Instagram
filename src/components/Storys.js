import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  ScrollView,
} from "react-native";

export default function Storys() {
  const is = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <View style={StoryStyles.content}>
      <ScrollView horizontal={true}>
        {is.map((item, index) => (
          <View style={StoryStyles.item} key={index}>
            <Image
              style={{ width: 75, height: 75, borderRadius: 100 }}
              source={{ uri: "https://picsum.photos/200/300" }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const StoryStyles = StyleSheet.create({
  content: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  item: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: 100,
    borderColor: "#f09433",
    borderWidth: 3,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
