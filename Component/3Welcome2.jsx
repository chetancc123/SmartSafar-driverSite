import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome2({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, Bottom: hp("5%") }}>
        <LinearGradient
          colors={["#A7F57A", "#BDE6D9"]}
          style={styles.background}
        >
          <ImageBackground
            // source={require("../assets/tleft.png")}
            style={styles.image1}
          >
            <Image
              source={require("../assets/mapp.png")}
              style={styles.centerImage}
            />
            <Image
              source={require("../assets/overlap.png")}
              style={styles.centerImageOverlay}
            />
          </ImageBackground>

          <View style={styles.middleSection}>
            <Text style={styles.enterText}>Spot your Passenger like never before</Text>
            <Text style={styles.credentialsText}>We got covered spotting your Passenger accurately over the map</Text>
          </View>

          {/* <ImageBackground
            source={require("../assets/bright.png")}
            style={styles.image2}
          /> */}

          <View style={styles.bottomButtonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginPage")}>
              <Text style={styles.buttonText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Welcome3")}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>

        </LinearGradient>
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    height: hp("100%"),
    flex: 1,
  },
  enterText: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  credentialsText: {
    fontSize: 23,
    color: "white",
    textAlign: "center",
    marginTop: hp("2%"),
  },
  button: {
    backgroundColor: "#13C39C",
    borderRadius: 10,
    width: wp("80%"),
    height: hp("6%"),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp("1%"),
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  middleSection: {
    alignItems: "center",
    marginBottom: hp("5%"),
  },
  bottomButtonsContainer: {
    position: "absolute",
    bottom: hp("8%"),
    left: 0,
    right: 0,
    alignItems: "center",
  },
  image1: {
    maxHeight: hp("50%"),
    maxWidth: wp("75%"),
    position: 'relative',
  },
  image2: {
    position: "relative",
    height: hp("50"),
    bottom: hp('5%'),
  },
  centerImage: {
    alignSelf: "center",
    width: wp("100%"),
    height: hp("100%"),
    resizeMode: "contain",
    marginTop: hp("-15%"),
    marginLeft: wp("25%")
  },
  centerImageOverlay: {
    position: "absolute",
    alignSelf: "center",
    top: hp('18%'),
    right: wp('3%'),
  },
});