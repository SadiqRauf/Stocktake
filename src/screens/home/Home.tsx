import React, { FC } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Card from "../../components/Card";
import Layout from "../../layout/Layout";
import { colors } from "../../utils/theme";

const Home: FC<any> = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={"transparent"}
        translucent={true}
        barStyle="light-content"
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>{"DASHBOARD"}</Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 40,
          borderTopEndRadius: 40,
          padding: 20,
          paddingTop: 50,
          flex: 0.8,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Stucktake")}>
          <Card style={styles.card}>
            <View style={{ height: 48, width: "100%" }}>
              <Image
                source={require("../../assets/icons/track.png")}
                style={styles.cardImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.cardText}>Continue Stocktake</Text>
          </Card>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 13,
          }}
        >
          <Card style={styles.iconCard}>
            <MaterialCommunityIcons
              name="email-outline"
              color={colors.white}
              size={40}
            />
            <Text style={styles.text}>Email</Text>
          </Card>
          <Card style={styles.iconCard}>
            <TouchableOpacity
              style={styles.press}
              onPress={() => navigation.navigate("ViewAllStock")}
            >
              <View style={{ height: 41, width: 38 }}>
                <Image
                  source={require("../../assets/icons/visualisation.png")}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>Views</Text>
            </TouchableOpacity>
          </Card>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 13,
          }}
        >
          <Card style={styles.iconCard}>
            <View style={{ height: 40, width: 35 }}>
              <Image
                source={require("../../assets/icons/mail_setting.png")}
                style={styles.cardImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.text}>Email Setting</Text>
          </Card>
          <Card style={styles.iconCard}>
            <MaterialCommunityIcons
              name="share-variant-outline"
              color={colors.white}
              size={38}
            />
            <Text style={styles.text}>Share</Text>
          </Card>
        </View>
        <View style={styles.bottomButtonsContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Layout style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>Contact Us</Text>
            </Layout>
            <Layout style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>How to</Text>
            </Layout>
            <Layout style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>Must Read</Text>
            </Layout>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <Layout style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>More Apps</Text>
            </Layout>
            <Layout style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>About</Text>
            </Layout>
            <Layout style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>Exit</Text>
            </Layout>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.primary + 50,
          height: 400,
          width: 500,
          borderRadius: 150,
          position: "absolute",
          bottom: -200,
          right: -150,
        }}
      />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    // height: 60,
    flex: 0.2,
    // backgroundColor: colors.primary,
  },
  headerText: {
    color: colors.white,
    fontFamily: "Inter-ExtraBold",
    lineHeight: 22,
    letterSpacing: 0.5,
    fontSize: 18,
  },
  card: {
    // backgroundColor: colors.primary,
    borderRadius: 25,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    height: 45,
    width: "100%",
    tintColor: colors.white,
  },
  cardText: {
    color: colors.white,
    fontFamily: "Inter-SemiBold",
    lineHeight: 18,
    fontSize: 16,
    marginTop: 5,
  },
  text: {
    color: colors.white,
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
    marginTop: 5,
  },
  iconCard: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    flex: 0.48,
  },
  bottomButtonsContainer: {
    marginTop: 50,
    // position: "absolute",
    // bottom: 5,
    // paddingHorizontal: 12,
    // right: 0,
    // left: 0,
  },
  bottomButton: {
    flex: 0.3,
    backgroundColor: colors.primary,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 25,
  },
  bottomButtonText: {
    fontFamily: "Inter-Medium",
    color: colors.white,
    fontSize: 12,
  },
  press:{
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
});
