import React from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import Home from "./src/screens/home/Home";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/navigation/Navigations";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    flex: 1,
  };

  return (
    <NavigationContainer>
      <View style={backgroundStyle}>
        <StatusBar
          barStyle={"light-content"}
          // backgroundColor={backgroundStyle.backgroundColor}
        />

        <AppNavigation />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
