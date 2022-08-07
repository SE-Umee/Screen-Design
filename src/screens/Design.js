import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import React from "react";
import Card from "./card";
import { FloatingAction } from "react-native-floating-action";

const Design = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.heading}>Buy Iphone</Text>
        <FontAwesome name="bell" size={24} color="black" style={styles.icon} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Card}>
          <Text style={{ fontSize: 15, color: "#094F29" }}>Total Saving</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#094F29" }}>
            $1000
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            width: 350,
            borderWidth: 0.5,
            borderColor: "gray",
            borderRadius: 6,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity style={{ marginLeft: 15, marginTop: 15 }}>
              <View style={{
                  height: 45,
                  width: 45,
                  backgroundColor: "#094F29",
                  borderRadius: 6,
                  alignItems:'center',
                  justifyContent:'center'
                }}><Ionicons name="chevron-back" size={30} color="#fff" /></View>
            </TouchableOpacity>
            <View
              style={{
                position: "absolute",
                left: 125,
                marginLeft: 15,
                marginTop: 15,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, color: "#094F29" }}>Pay Date</Text>
              <Text
                style={{ fontSize: 15, color: "#094F29", fontWeight: "bold" }}
              >
                8/2/2022
              </Text>
            </View>
            <TouchableOpacity
              style={{
                marginLeft: 15,
                marginTop: 15,
                position: "absolute",
                left: 275,
              }}
            >
              <View
                style={{
                  height: 45,
                  width: 45,
                  backgroundColor: "#094F29",
                  borderRadius: 6,
                  alignItems:'center',
                  justifyContent:'center'
                }}
              >
                <Ionicons name="chevron-forward" size={30} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              left: 220,
              top: 100,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, color: "#094F29", fontWeight: "600" }}>
              Net Income
            </Text>
            <Text
              style={{ fontSize: 15, color: "#094F29", fontWeight: "bold" }}
            >
              $40000
            </Text>
          </View>
          <View
            style={{
              width: 270,
              height: 2,
              backgroundColor: "#094F29",
              marginTop: 100,
              marginLeft: 33,
            }}
          />
          <View style={{ marginLeft: 33, marginTop: 10, flexDirection: "row" }}>
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Expenses Due
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "600", marginLeft: 120 }}>
              Amount
            </Text>
          </View>
          <View style={{ marginLeft: 33, marginTop: 20, flexDirection: "row" }}>
            <Text style={{ fontSize: 15, color: "#094F29" }}>Groceries</Text>
            <Text style={{ fontSize: 15, color: "#094F29", marginLeft: 160 }}>
              $1500
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#D3D3D3",
              width: 350,
              height: 50,
              marginTop: 30,
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "red" }}>
              Debt
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginLeft: 33,
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, color: "#094F29", marginRight: 130 }}>
              Credit Card
            </Text>
            <Card />
          </View>
          <View
            style={{
              marginLeft: 33,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, color: "#094F29", marginRight: 112 }}>
              Personal loan
            </Text>
            <Card />
          </View>
          <View
            style={{
              marginLeft: 33,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 15, color: "#094F29", marginRight: 120 }}>
              Student loan
            </Text>
            <Card />
          </View>
        </View>
        <View style={{ marginTop: 10, alignItems: "center" }}>
          <Text style={{ fontSize: 15 }}> Total Payments</Text>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>$1500</Text>
        </View>
        <View
          style={{
            width: 350,
            height: 1,
            backgroundColor: "#000",
            marginTop: 20,
            marginLeft: 10,
          }}
        />
        <View
          style={{
            marginTop: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Carry Over</Text>
            <AntDesign
              name="infocirlce"
              color="#094F29"
              size={15}
              style={{ marginLeft: 2 }}
            />
          </View>
          <Card />
        </View>
      </ScrollView>
      <FloatingAction 
      placement="right"
      icon={<Ionicons name="ios-add" size={24} color="#fff" />}
      color='#094F29'
      />
    </View>
  );
};

export default Design;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#094F29",
  },
  icon: {
    color: "#094F29",
    position: "absolute",
    left: 200,
  },
  Card: {
    marginTop: 10,
    height: 90,
    width: 350,
    backgroundColor: "#D3D3D3",
    borderRadius: 7,
    borderColor: "#094F29",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    alignSelf: "center",
  },
  btn: {
    height: 45,
    width: 45,
    backgroundColor: "#094F29",
    borderRadius: 6,
  },
});
