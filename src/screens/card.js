import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Card = () => {
  return <View style={styles.Card}>
    <TextInput
    placeholder="0.00"
    
    />
    {/* <Text style={{justifyContent:'center',alignItems:'center'}}>0.00</Text> */}
  </View>;
};

export default Card;

const styles = StyleSheet.create({
  Card: {
    height: 35,
    width: 68,
    backgroundColor: "#D3D3D3",
    borderRadius: 4,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,

  },
});
