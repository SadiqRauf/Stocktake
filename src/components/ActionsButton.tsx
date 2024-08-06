import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { colors } from '../utils/theme'

const ActionButtons:FC<any> = ({navigation, deleteRow}) => {
  return (
    <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 11,
      padding: 4,
    }}
  >
    <TouchableOpacity onPress={() => navigation.navigate("ViewAllStock")}>
      <Text
        style={{
          fontFamily: "Inter-SemiBold",
          fontSize: 13,
          color: colors.primary,
        }}
      >
        View All
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={deleteRow}>
      <Text
        style={{
          fontFamily: "Inter-SemiBold",
          fontSize: 13,
          color: colors.error,
        }}
      >
        Delete Row
      </Text>
    </TouchableOpacity>
  </View>
  )
}

export default ActionButtons

const styles = StyleSheet.create({})