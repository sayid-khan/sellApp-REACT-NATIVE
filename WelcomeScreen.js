import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function WelcomeScreen(props) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("./assets/pics/obackground.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./assets/pics/logo-red.png")}
        />
      </View>

      <View style={styles.logoText}>
        <Text>Sell What We Don't Need</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    // height: "100%",
    // width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "orange",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "green",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  logoContainer: {
    position: "absolute",
    top: -20,
    alignItems: "center",
    flexDirection: "column",
  },
  logoText: {
    position: "absolute",
    top: 160,
    alignItems: "center",
    flexDirection: "column",
  },
});
