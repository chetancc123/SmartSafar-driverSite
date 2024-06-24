import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome, Ionicons, Entypo } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { SafeAreaView } from "react-native-safe-area-context";

const Uploaddoc = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#D763F4", "#FFFFFF", "#FFFFFF"]}
        style={{ height: hp("190%") }}
      >
        <View style={styles.topSection}>
          <LinearGradient
            colors={["#DC52FF", "#430970"]}
            style={styles.gradient}
          >
            <View style={styles.iconrow}>
              <TouchableOpacity style={styles.iconContainer1}>
                <FontAwesome name="arrow-left" size={wp("8%")} color="white" />
              </TouchableOpacity>
              <View style={styles.iconContainer2}>
                <TouchableOpacity>
                  <FontAwesome
                    name="bell"
                    size={wp("8%")}
                    color="white"
                    style={styles.bellicon}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome
                    name="cog"
                    size={wp("8%")}
                    color="white"
                    style={styles.cogicon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.profileSection}>
              <Image
                source={require("../assets/Ellipse 8.png")}
                style={styles.profilePic}
              />
              <View style={styles.textgroup}>
                <Text style={styles.profileText1}>Hey There,</Text>
                <Text style={styles.profileText2}>Harsh 👋</Text>
              </View>
              <TouchableOpacity style={styles.idCardIcon}>
                <FontAwesome name="id-card" size={wp("8%")} color="white" />
              </TouchableOpacity>
            </View>
          </LinearGradient>

          <LinearGradient
            colors={["#DC52FF", "#430970", "#390D5C"]}
            style={styles.bg}
          >
            <View>
              <Ionicons name="document" size={50} color="white" />
            </View>
            <View style={styles.bar}>
              <Text style={{ color: "white", fontSize: 20 }}>Driver DL</Text>
              <Text style={{ color: "white" }}>92.6 KB</Text>
              <Progress.Bar progress={0.4} width={250} animationType="timing" />
            </View>
            <TouchableOpacity>
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={["#DC52FF", "#430970", "#390D5C"]}
            style={styles.bg}
          >
            <View>
              <Ionicons name="document" size={50} color="white" />
            </View>
            <View style={styles.bar}>
              <Text style={{ color: "white", fontSize: 20 }}>Driver DL</Text>
              <Text style={{ color: "white" }}>92.6 KB</Text>
              <Progress.Bar progress={0.4} width={250} animationType="timing" />
            </View>
            <TouchableOpacity>
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={["#DC52FF", "#430970", "#390D5C"]}
            style={styles.bg}
          >
            <View>
              <Ionicons name="document" size={50} color="white" />
            </View>
            <View style={styles.bar}>
              <Text style={{ color: "white", fontSize: 20 }}>Driver DL</Text>
              <Text style={{ color: "white" }}>92.6 KB</Text>
              <Progress.Bar progress={0.4} width={250} animationType="timing" />
            </View>
            <TouchableOpacity>
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={["#DC52FF", "#430970", "#390D5C"]}
            style={styles.bg}
          >
            <View>
              <Ionicons name="document" size={50} color="white" />
            </View>
            <View style={styles.bar}>
              <Text style={{ color: "white", fontSize: 20 }}>Driver DL</Text>
              <Text style={{ color: "white" }}>92.6 KB</Text>
              <Progress.Bar progress={0.4} width={250} animationType="timing" />
            </View>
            <TouchableOpacity>
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  topRightImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: wp("75%"),
    height: hp("40%"),
  },
  bottomLeftImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: wp("75%"),
    height: hp("40%"),
  },
  topSection: {
    height: hp("35%"),
    borderBottomLeftRadius: wp("10%"),
    borderBottomRightRadius: wp("10%"),
  },
  gradient: {
    borderBottomLeftRadius: wp("10%"),
    borderBottomRightRadius: wp("10%"),
    height: hp("33%"),
  },
  iconrow: {
    flexDirection: "row",
    marginTop: hp("5%"),
    justifyContent: "center",
  },
  iconContainer1: {
    flex: 1,
    padding: wp("2%"),
    marginLeft: wp("5%"),
  },
  iconContainer2: {
    flex: 1,
    padding: wp("2%"),
    justifyContent: "flex-end",
    flexDirection: "row",
    right: wp("5%"),
  },
  bellicon: {
    padding: wp("3%"),
  },
  cogicon: {
    padding: wp("3%"),
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("1%"),
    marginBottom: hp("7%"),
    marginHorizontal: hp("3%"),
  },
  profilePic: {
    width: wp("22%"),
    height: wp("22%"),
    borderRadius: wp("7%"),
    overflow: "hidden",
    marginLeft: wp("3%"),
    justifyContent: "center",
    alignItems: "center",
  },
  idCardIcon: {
    position: "absolute",
    bottom: hp("5%"),
    right: wp("3%"),
  },
  textgroup: {
    flexDirection: "column",
    marginLeft: wp("10%"),
  },

  profileText1: {
    color: "white",
    fontSize: wp("5%"),
  },
  profileText2: {
    color: "white",
    fontSize: wp("6%"),
  },
  bg: {
    flexDirection: "row",
    marginTop: hp("5%"),
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: hp("10%"),
    borderRadius: 25,
  },
  bar: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default Uploaddoc;
