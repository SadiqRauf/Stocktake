import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Home from "../screens/home/Home";
import StockTake from "../screens/stocktake/Stocktake";
import { colors } from "../utils/theme";
import ViewAllStock from "../screens/view/ViewAllStock";


const Stack = createNativeStackNavigator();


const AppNavigation: React.FC = () => {

  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Stucktake"
        component={StockTake}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewAllStock"
        component={ViewAllStock}
        options={{ headerShown: false }}
      />
   
      
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  tabContainer: {
    borderBottomWidth: 1.5,
    paddingBottom: 5,
  },
  tabIcon: {
    height: 21,
    width: 21,
  },
  tabIcon1: {
    height: 24,
    width: 24,
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Inter-Bold",
    color: colors.black,
    letterSpacing: 0.3,
    marginLeft: 10,
    fontSize: 14,
  },
});
