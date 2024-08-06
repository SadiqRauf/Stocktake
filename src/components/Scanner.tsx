import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { Camera, CameraType } from "react-native-camera-kit";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { colors } from "../utils/theme";
const Scanner: React.FC<any> = ({
  isVisible,
  onClose,
  setValue
}) => {
  const handleReading = (data: any) => {
   console.log("Scanned.....",data);
    setValue(data)
    if (data) {
      // setQuantity(incQuantity.toString())
      onClose();
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={{ margin: 0 }}
    >
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.close} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Scanner</Text>
          </View>
          <TouchableOpacity onPress={() => onClose()} style={styles.close}>
            <Ionicons name="close" color={colors.black} size={24} />
          </TouchableOpacity>
        </View>
        <Camera
          cameraType={CameraType.Back}
          scanBarcode={true}
          style={styles.camera}
          showFrame={true}
          flashMode={"off"}
          zoomMode={"off"}
          onReadCode={async (event: {
            nativeEvent: { codeStringValue: any };
          }) => {
            // console.log(event.nativeEvent.codeStringValue);

            handleReading(event.nativeEvent?.codeStringValue);
          }}
        />
        <View style={styles.bottom} />
      </View>
    </Modal>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white + 20,
    height: "100%",
    paddingVertical: 10,
  },
  subContainer: {
    flexDirection: "row",
    backgroundColor: colors.white,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    paddingVertical: 20,
    zIndex: 99,
  },
  close: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.black,
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    height: 140,
    backgroundColor: colors.white,
    zIndex: 99,
    right: 0,
    left: 0,
  },
});
