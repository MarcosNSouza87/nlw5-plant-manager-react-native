import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../styles/colors";
import userImg from "../assets/avatar-01.png";
import fonts from "../styles/fonts";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Marcos</Text>
      </View>
      <Image source={userImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 40,
  },
});
