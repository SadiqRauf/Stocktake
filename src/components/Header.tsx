import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";
import { colors } from "../utils/theme";
import Ionicons from "react-native-vector-icons/Ionicons";

const statusBarHeight = StatusBar.currentHeight || 0;

const Header: FC<any> = ({ title, navigation }) => {

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="chevron-back" color={colors.white} size={30} />
      </TouchableOpacity>
      <View style={styles.titleView}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{ flex: 0.1 }} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Platform.OS === "android" ? statusBarHeight : 40,
  },
  back: { flex: 0.1, alignItems: "center", justifyContent: "center" },
  titleView: { flex: 0.6, alignItems: "center", justifyContent: "center" },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 15,
    color: colors.white,
  },
});
