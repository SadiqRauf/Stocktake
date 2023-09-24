import React, { ReactNode } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { colors } from "../utils/theme";

interface props {
  children: ReactNode;
  TopAreaColor?: string;
  BottomAreaColor?: string;
}

const AppStatusBar: React.FC<any> = ({ backgroundColor, ...props }) => {
  return (
    <View style={[backgroundColor]}>
      <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

export function Screen({
  children,
  TopAreaColor,
  BottomAreaColor,
}: props) {
  return (
    <>
      <SafeAreaView
        style={[styles.topAreaView, { backgroundColor: TopAreaColor }]}
      />
      <SafeAreaView
        style={[styles.bottomAreaView, { backgroundColor: BottomAreaColor }]}
      >
        <AppStatusBar backgroundColor={TopAreaColor} barStyle="light-content" />
        {children}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  topAreaView: { flex: 0, backgroundColor: colors.primary },
  bottomAreaView: { flex: 1, backgroundColor: colors.white },
});
