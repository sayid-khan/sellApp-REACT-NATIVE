import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("./assets/pics/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    top: 18,
    left: 5,
  },
  deleteIcon: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "green",
    top: 18,
    right: 5,
  },
});
