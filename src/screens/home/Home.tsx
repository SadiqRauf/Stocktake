import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { FC } from "react";
import { Screen } from "../../layout/Screen";
import { colors } from "../../utils/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Home: FC = () => {
  return (
    <Screen TopAreaColor={colors.primary} BottomAreaColor={colors.primary + 50}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DASHBOARD</Text>
      </View>
      <View style={{ padding: 12, flex: 1 }}>
        <View style={styles.card}>
          <View style={{ height: 48, width: "100%" }}>
            <Image
              source={require("../../assets/icons/track.png")}
              style={styles.cardImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.cardText}>Continue Stocktake</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 13 }}>
          <View style={styles.iconCard}>
            <MaterialCommunityIcons name="email-outline" color={colors.white} size={40} />
            <Text style={styles.text}>Email</Text>
          </View>
          <View style={styles.iconCard}>
          <View style={{ height: 41, width: 38 }}>
              <Image
                source={require("../../assets/icons/visualisation.png")}
                style={styles.cardImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.text}>
              Views
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 13 }}>
          <View style={styles.iconCard}>
            <View style={{ height: 40, width: 35 }}>
              <Image
                source={require("../../assets/icons/mail_setting.png")}
                style={styles.cardImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.text}>
              Email Setting
            </Text>
          </View>
          <View style={styles.iconCard}>
            <MaterialCommunityIcons name="share-variant-outline" color={colors.white} size={38} />
            <Text style={styles.text}>Share</Text>
          </View>
        </View>
        <View style={styles.bottomButtonsContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>How to</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>Must Read</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>More Apps</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: colors.primary,
  },
  headerText: {
    color: colors.white,
    fontFamily:'Inter-ExtraBold',
    lineHeight:22,
    letterSpacing:0.5,
    fontSize: 18,
  },
  card: {
    backgroundColor: colors.primary,
    borderRadius: 6,
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
    fontFamily:'Inter-SemiBold',
    fontSize:16,
    lineHeight:18,
    marginTop:5
  },
  text: {
    color: colors.white,
    fontFamily:'Inter-SemiBold',
    fontSize:14,
    marginTop:5
  },
  iconCard: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    flex: 0.48,
  },
  bottomButtonsContainer: {
    position: 'absolute',
    bottom: 5,
    paddingHorizontal: 12,
    right: 0,
    left: 0,
  },
  bottomButton: {
    flex: 0.3,
    backgroundColor: colors.primary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 25,
  },
  bottomButtonText: {
    fontFamily: "Inter-Medium",
    color: colors.white,
    fontSize: 12,
  },
});