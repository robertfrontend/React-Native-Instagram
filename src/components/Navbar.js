import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Alert,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import IconFeacher from "react-native-vector-icons/Feather";
import theme from "../theme";
import StyledText from "./StyledText";
import Storys from "./Storys";

const Navbar = () => {
  return (
    <>
      <View style={NavbarStyles.navbar}>
        <View style={{ width: "25%" }}>
          <Icon name="camera" size={25} color={theme.colors.black} />
        </View>
        <View style={{ width: "50%", textAlign: "right" }}>
          <StyledText
            fontSize="title1"
            color="black"
            textAlign="center"
            fontWeight="bold"
          >
            Instagram
          </StyledText>
        </View>
        <View style={{ width: "25%" }}>
          <Text style={{ textAlign: "right" }}>
            <IconFeacher name="send" size={25} color={theme.colors.black} />
          </Text>
        </View>
      </View>
      <Storys />
    </>
  );
};

const NavbarStyles = StyleSheet.create({
  navbar: {
    backgroundColor: "white",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: theme.colors.secondary,
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#f0f8ff",
    margin: 0,
  },
  navegation: {
    width: "25%",
    fontSize: 18,
    fontWeight: "bold",
    color: "#f0f8ff",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
  },
});

export default Navbar;
