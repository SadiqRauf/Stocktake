import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import { Screen } from "../../layout/Screen";
import { colors } from "../../utils/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const StuckTake: FC = () => {
  const [scanned, setScanned] = useState(false);
  const [scanning, setScanning] = React.useState(false);
  const onBarCodeRead = (barCode) => {
    if (!scanned) {
      setScanned(true);
      console.log(barCode.data);
      // You can handle the scanned data here, e.g., navigate to a new screen, perform an action, etc.
    }
  };

  useEffect(() => {
    setScanned(false);
  }, [scanned]);
  return (
    <Screen TopAreaColor={colors.primary} BottomAreaColor={colors.primary + 50}>
      <View style={{ padding: 12 }}>
        <Text>Stucktake</Text>

        <View
          style={{
            flexDirection: "row",
            height: 50,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: colors.primary,
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 6,
          }}
        >
          <TextInput
            style={{
              width: "80%",
              fontFamily: "Inter-Regular",
              color: colors.black,
              fontSize: 14,
            }}
          />
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              backgroundColor: colors.primary,
              borderRadius: 8,
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <MaterialCommunityIcons name="barcode-scan" color={colors.white} size={25} />
          </TouchableOpacity>
        </View>
        <Text style={{ marginTop: 10 }}>Enter Item Number or Barcode</Text>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            height: 50,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: colors.primary,
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 6,
          }}
        >
          <TextInput
            style={{
              width: "80%",
              fontFamily: "Inter-Regular",
              color: colors.black,
              fontSize: 14,
            }}
          />
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              backgroundColor: colors.primary,
              borderRadius: 8,
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <MaterialCommunityIcons name="barcode-scan" color={colors.white} size={25} />
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              marginTop: 15,
            }}
          >
            <Text>Total Available Quantity</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: colors.primary,
                borderRadius: 8,
                height: 40,
                width: "50%",
              }}
            />
          </View>
          <View
            style={{
              marginTop: 15,
            }}
          >
            <Text>Total Quantity in above LOC</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: colors.primary,
                borderRadius: 8,
                height: 40,
                width: "50%",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              alignItems: "center",
              borderWidth:1,
              borderColor:colors.primary,
              padding:7,
              borderRadius:8,
              width: "50%",
              justifyContent:'space-between'
            }}
          >
            <TouchableOpacity style={styles.decrement}>
              <Text style={{color:colors.white}}>-</Text>
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 12 }}>12</Text>
            <TouchableOpacity style={styles.decrement}>
              <Text style={{color:colors.white}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={{
              height: 50,
              width: "100%",
              backgroundColor: colors.primary,
              borderRadius: 8,
              justifyContent:'center', 
              alignItems:'center',
              marginTop:10
            }}>
            <Text style={{color:colors.white}}>Save</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default StuckTake;

const styles = StyleSheet.create({
  decrement: {
    height: 35,
    width: 60,
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
