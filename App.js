import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppLoading, Asset } from "expo";

import { Block } from "./components/Block";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ready for Launch!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
