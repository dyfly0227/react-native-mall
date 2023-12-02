import React, {useState} from "react";
import {StyleSheet, View} from "react-native";

export default function TabTwoScreen() {
  const [shadowOffsetWidth, setShadowOffsetWidth] = useState(10);
  const [shadowOffsetHeight, setShadowOffsetHeight] = useState(10);
  const [shadowRadius, setShadowRadius] = useState(0);
  const [shadowOpacity, setShadowOpacity] = useState(1);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.square,
          {
            shadowOffset: {
              width: shadowOffsetWidth,
              height: shadowOffsetHeight
            },
            shadowOpacity,
            shadowRadius
          }
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  square: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 4,
    height: 150,
    shadowColor: "black",
    width: 150
  },
  controls: {
    paddingHorizontal: 12
  }
});
