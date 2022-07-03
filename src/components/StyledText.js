import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.subtitle1,
    color: theme.colors.black,
    textTransform: "capitalize",
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },

  primary: {
    color: theme.colors.primary,
  },
  secondary: {
    color: theme.colors.secondary,
  },
  red: {
    color: theme.colors.red,
  },
  violet: {
    color: theme.colors.violet,
  },
  black: {
    color: theme.colors.black,
  },

  bold: {
    fontWeight: theme.fontWeights.bold,
  },

  semiBold: {
    fontWeight: theme.fontWeights.semiBold,
  },

  title1: {
    fontSize: theme.fontSizes.title1,
  },

  subtitle1: {
    fontSize: theme.fontSizes.subtitle1,
  },
  subtitle2: {
    fontSize: theme.fontSizes.subtitle2,
  },
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
});

export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  textAlign,
  ...restOfProps
}) {
  const textStyle = [
    styles.text,
    (color = styles[color]),
    (fontSize = styles[fontSize]),
    (fontWeight = styles[fontWeight]),
    (textAlign = styles[textAlign]),
  ];
  return (
    <Text style={textStyle} {...restOfProps}>
      {children}
    </Text>
  );
}
