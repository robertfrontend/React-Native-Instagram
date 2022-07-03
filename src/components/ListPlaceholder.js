import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Alert,
  FlatList,
  Image,
} from "react-native";
import theme from "../theme";
import Card from "./Post/Card";
import StyledText from "./StyledText";

const ListPlaceholder = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getApiPlaceHolder();
  }, []);

  const getApiPlaceHolder = () => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <FlatList
      data={Data}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: repo }) => <Card data={repo} />}
    />
  );
};

const NavbarStyles = StyleSheet.create({
  card: {
    padding: 10,
  },
});

export default ListPlaceholder;
