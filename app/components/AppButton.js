import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function AppButton({ title, onPress, buttonStyle, buttonTextStyle}) {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}>
      
      <AppText style={[styles.text, buttonTextStyle]}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button,
    
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  text: {
    color: colors.buttonText,
    fontWeight: "bold",
  },
});

export default AppButton;
