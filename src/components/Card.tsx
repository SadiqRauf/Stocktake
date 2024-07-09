import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

const Card: React.FC<React.PropsWithChildren<any>> = ({ children,style }) => {
  return (
    <LinearGradient
      colors={["#79F1A4", "#375E53"]}
      start={{ x: 0, y: -1.5}}
      end={{ x: 1, y: 0.5 }}
     style={style}
    >
      {children}
    </LinearGradient>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
