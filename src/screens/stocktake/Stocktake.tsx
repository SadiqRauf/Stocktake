import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import { Screen } from "../../layout/Screen";
import { colors } from "../../utils/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Card from "../../components/Card";
import Layout from "../../layout/Layout";
import { commonStyle } from "../../utils/CommonStyles";
import { Table, Row, Rows } from "react-native-table-component";
import moment from "moment";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorageService from "../../services/AsyncStorageService";
import Header from "../../components/Header";
const StockTake: FC<any> = ({ navigation }) => {
  const [location, setLocation] = useState<string>("");
  const [itemNo, setItemNo] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [scanned, setScanned] = useState(false);
  const [items, setItems] = useState<any>([]);
  const [id, setId] = useState(0);
  const [scanning, setScanning] = React.useState(false);

  const [state] = useState({
    tableHead: ["Location", "Barcode", "Quantity", "Date", "Time"],
    widthArr: [200, 200, 80, 120, 100],
  });

  const onBarCodeRead = (barCode: { data: any }) => {
    if (!scanned) {
      setScanned(true);
      console.log(barCode.data);
    }
  };

  useEffect(() => {
    setScanned(false);
  }, [scanned]);
  const tableData = [...items.reverse()];
  const saveItem = () => {
    const Item = [
      location,
      itemNo,
      quantity,
      moment().format("DD-MM-YYYY"),
      moment().format("HH:mm A"),
    ];

    setItems([...tableData, Item]);
    AsyncStorageService.setItem("ITEMS", {
      value: [...tableData, Item],
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorageService.getItem("ITEMS").then((data) => {
        console.log(";;;;;;", data);

        if (data?.value?.length !== undefined) {
          setItems(data?.value);
        }
      });
    }, [navigation])
  );

  return (
    <Layout style={{ flex: 1 }}>
      <Header title={"Stock"} navigation={navigation} />
      <View style={styles.mainContainer}>
        <Text style={{ ...styles.label }}>Enter Location/Bin or Ref.No</Text>

        <View style={styles.inputContainer}>
          <TextInput
            value={location}
            style={styles.input}
            onChangeText={(text) => setLocation(text)}
          />
          <TouchableOpacity style={styles.scanner}>
            <MaterialCommunityIcons
              name="barcode-scan"
              color={colors.white}
              size={25}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ ...styles.label, marginTop: 20 }}>
          Enter Item Number or Barcode
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={itemNo}
            style={styles.input}
            onChangeText={(text) => setItemNo(text)}
          />
          <TouchableOpacity style={styles.scanner}>
            <MaterialCommunityIcons
              name="barcode-scan"
              color={colors.white}
              size={25}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ flex: 0.8, paddingRight: 10 }}>
            <View
              style={{
                marginTop: 15,
                width: "80%",
              }}
            >
              <Text style={styles.label}>Total Available Quantity</Text>
              <View style={styles.subInputContainer}>
                <TextInput
                  style={{
                    height: 50,
                    fontFamily: "Inter-Regular",
                  }}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 15,
                width: "80%",
              }}
            >
              <Text style={styles.label}>Total Quantity in above LOC</Text>
              <View style={styles.subInputContainer}>
                <TextInput
                  style={{
                    height: 50,
                    fontFamily: "Inter-Regular",
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.outerView}>
            <View style={styles.innerView}>
              <TouchableOpacity
                onPress={() => setQuantity(() => +quantity - 1)}
                style={styles.decrement}
              >
                <Text style={{ color: colors.white }}>-</Text>
              </TouchableOpacity>
              <TextInput
                value={JSON.stringify(quantity)}
                style={{
                  fontFamily: "Inter-SemiBold",
                  fontSize: 16,
                  color: colors.black,
                  marginVertical: 12,
                }}
                keyboardType="numeric"
                onChangeText={(text) => {
                  const numericValue = parseFloat(text); // or parseInt(text) if you want integers only
                  if (numericValue > 0) {
                    setQuantity(numericValue);
                  } else {
                    setQuantity(0);
                  }
                }}
              />
              <TouchableOpacity
                onPress={() => setQuantity(() => +quantity + 1)}
                style={styles.decrement}
              >
                <Text style={{ color: colors.white }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={saveItem}>
          <Layout style={styles.btnView}>
            <Text style={styles.btnText}>Save</Text>
          </Layout>
        </TouchableOpacity>

        <ScrollView horizontal={true} style={{ marginTop: 20 }}>
          {tableData?.length > 0 && (
            <View>
              <Table
                borderStyle={{ borderWidth: 1, borderColor: colors.black + 20 }}
              >
                <Row
                  data={state?.tableHead}
                  widthArr={state?.widthArr}
                  style={styles.header}
                  textStyle={styles.headerText}
                />
              </Table>
              <ScrollView style={styles.dataWrapper}>
                <Table
                  borderStyle={{
                    borderWidth: 1,
                    borderColor: colors.black + 20,
                  }}
                >
                  {/* <Rows data={items} widthArr={state?.widthArr} style={styles.row} textStyle={styles.text}/> */}
                  {tableData?.length > 0 &&
                    tableData?.slice(0, 5)?.map((rowData, index) => (
                      <Row
                        key={index}
                        data={rowData}
                        widthArr={state?.widthArr}
                        style={[
                          styles.row,
                          index % 2 && { backgroundColor: colors.primary + 40 },
                        ]}
                        textStyle={styles.text}
                      />
                    ))}
                </Table>
              </ScrollView>
            </View>
          )}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default StockTake;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    padding: 20,
    backgroundColor: colors.white,
  },
  decrement: {
    height: 35,
    width: 60,
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    height: 55,
    borderRadius: 8,
    // borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 6,
    backgroundColor: colors.white,
    ...commonStyle.shadow,
  },
  subInputContainer: {
    height: 50,
    borderRadius: 8,
    // borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: "space-between",
    paddingHorizontal: 6,
    backgroundColor: colors.white,
    ...commonStyle.shadow,
  },
  input: {
    width: "80%",
    fontFamily: "Inter-Regular",
    color: colors.black,
    fontSize: 14,
    height: 55,
  },
  scanner: {
    height: 40,
    width: 40,
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  outerView: {
    flex: 0.2,
    marginTop: 15,
    alignItems: "center",
    // borderWidth: 1,
    paddingHorizontal: 12,
    justifyContent: "flex-end",
  },
  innerView: {
    alignItems: "center",
    // borderWidth: 1,
    borderColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.white,
    justifyContent: "flex-end",
    ...commonStyle.shadow,
  },
  label: {
    fontFamily: "Inter-SemiBold",
    fontSize: 13,
    marginBottom: 7,
    marginLeft: 3,
    color: colors.black + 90,
  },
  btnView: {
    height: 50,
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  btnText: {
    color: colors.white,
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: colors.white,
  },
  header: { height: 50, backgroundColor: colors.primary },
  headerText: {
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
    color: colors.white,
  },
  text: {
    textAlign: "center",
    fontFamily: "Inter-Regular",
    color: colors.black,
  },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: colors.halfWhite },
});
