import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <Image
      source={require("../assets/Travel_logo.jpeg")}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 150,
    marginBottom: 8,
    marginTop: -10,
  },
});
