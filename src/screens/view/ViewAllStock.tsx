import { useFocusEffect } from "@react-navigation/native";
import React, { FC, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Row, Table } from "react-native-table-component";
import Header from "../../components/Header";
import Layout from "../../layout/Layout";
import AsyncStorageService from "../../services/AsyncStorageService";
import { colors } from "../../utils/theme";
import ActionButtons from "../../components/ActionsButton";
import { Text } from "react-native-paper";

const ViewAllStock: FC<any> = ({ navigation }) => {
  const [items, setItems] = useState<any>([]);
  const [selectedRow, setSelectedRow] = useState(-1);

  const [state] = useState({
    tableHead: ["Location", "Barcode", "Quantity", "Date", "Time"],
    widthArr: [200, 200, 80, 120, 100],
  });

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorageService.getItem("ITEMS").then((data) => {
        if (data?.value?.length !== undefined) {
          console.log("...",data?.value);
          
          setItems(data?.value);
        }
      });
    }, [navigation])
  );

  const DeleteRow = () => {
    const newData = items?.filter((_: any, i: number) => i !== selectedRow);
    setItems(newData);
    AsyncStorageService.setItem("ITEMS", {
      value: newData,
    });
  };
  return (
    <Layout style={{ flex: 1 }}>
      <Header title={"All Stock"} navigation={navigation} />
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={{ paddingHorizontal: 10, marginTop: 10 }}
          onPress={() =>
            selectedRow > 0
              ? DeleteRow()
              : Alert.alert("Warning!", "Please select a row ")
          }
        >
          <Text style={styles.deleteText}>Delete Row</Text>
        </TouchableOpacity>
        <ScrollView horizontal={true} style={{ marginTop: 10 }}>
          {items?.length > 0 && (
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
                  {items?.length > 0 &&
                    items?.map((rowData: any, index: number) => {
                      const selected = selectedRow === index;
                      return (
                        <Row
                          key={index}
                          data={rowData}
                          widthArr={state?.widthArr}
                          style={[
                            styles.row,

                            {
                              backgroundColor: selected
                                ? colors.primaryBlue
                                : colors.primary + 40,
                            },
                          ]}
                          textStyle={{
                            ...styles.text,
                            color: selected ? colors.white : colors.black,
                          }}
                          onPress={() => {
                            if (selected) {
                              setSelectedRow(-1);
                            } else {
                              setSelectedRow(index);
                            }
                          }}
                        />
                      );
                    })}
                </Table>
              </ScrollView>
            </View>
          )}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default ViewAllStock;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    padding: 20,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: colors.white,
  },
  header: {
    height: 50,
    backgroundColor: colors.primary,
  },
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
  row: {
    height: 40,
    backgroundColor: colors.halfWhite,
  },
  deleteText: {
    fontFamily: "Inter-SemiBold",
    fontSize: 13,
    color: colors.error,
    textAlign: "right",
  },
});
