import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";

export default function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occured</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  message: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
