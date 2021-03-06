import React from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Alert,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import Navbar from "./Navbar";
import ListPlaceholder from "./ListPlaceholder";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  const navigation = useNavigation();
  const onPressLearnMore = () => {};
  return (
    <>
      <View style={Layout.container}>
        <Navbar />
        <Button
          onPress={() => {
            navigation.navigate("Profile");
          }}
          title="Learn More"
        />
        <SafeAreaView>
          <View style={Layout.contentApp}>
            <ListPlaceholder />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

const Layout = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    backgroundColor: "white",
  },
  contentApp: {
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  navbar: {
    backgroundColor: "#6c5ce7",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#f0f8ff",
    margin: 0,
  },
  texNavegation: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f0f8ff",
  },
  titleApp: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6c5ce7",
    textAlign: "center",
    padding: 30,
  },
});

export default Main;
