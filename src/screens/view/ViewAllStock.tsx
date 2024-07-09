import { useFocusEffect } from "@react-navigation/native";
import React, { FC, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Row, Table } from "react-native-table-component";
import Header from "../../components/Header";
import Layout from "../../layout/Layout";
import AsyncStorageService from "../../services/AsyncStorageService";
import { colors } from "../../utils/theme";

const ViewAllStock:FC<any> = ({ navigation }) => {
  const [items, setItems] = useState<any>([]);

  const [state] = useState({
    tableHead: ["Location", "Barcode", "Quantity", "Date", "Time"],
    widthArr: [200, 200, 80, 120, 100],
  });

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorageService.getItem("ITEMS").then((data) => {
        if (data?.value?.length !== undefined) {
          setItems(data?.value);
        }
      });
    }, [navigation])
  );


  return (
    <Layout style={{ flex: 1 }}>
      <Header title={"All Stock"} navigation={navigation} />
      <View style={styles.mainContainer}>
        <ScrollView horizontal={true} style={{ marginTop: 20 }}>
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
                    items?.map((rowData, index) => (
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
