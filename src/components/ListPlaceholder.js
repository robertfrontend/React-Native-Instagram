import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Alert,
  FlatList,
} from "react-native";
import theme from "../theme";
import StyledText from "./StyledText";

const Item = ({ repo }) => {
  return (
    <View key={repo.id} style={{ padding: 10 }}>
      <StyledText
        color="black"
        fontSize="title1"
      >
        {repo.title}
      </StyledText>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={{ paddingRight: 10 }}>
          <StyledText color="violet" fontSize="subtitle1">
            Usuario:
          </StyledText>
        </View>
        <View>
          <StyledText color="primary" fontSize="subtitle1">
            {repo.userId}
          </StyledText>
        </View>
      </View>
    </View>
  );
};

const ListPlaceholder = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getApiPlaceHolder();
  }, []);

  const getApiPlaceHolder = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
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
      renderItem={({ item: repo }) => <Item repo={repo} />}
    />
  );
};

const NavbarStyles = StyleSheet.create({
  card: {
    padding: 10,
  },
});

export default ListPlaceholder;
