import React from "react";
import { url } from './config';
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Verificationpending ({navigation}) {
  const handleCompleteProfile = () => {
    console.log("Navigate to complete profile page");
    // Add navigation logic here
  };
  const handleLinkClick = () => {
    console.log("Opening webpage...");
    Linking.openURL('https://www.google.com');
  };


  const handleGoToLogin = () => {
    console.log("Navigate to login page");
    navigation.navigate('LoginPage')
    // Add navigation logic here
  };

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.container}>
        {/* Background Gradient */}
        <LinearGradient
          colors={["#A7F57A", "#BDE6D9"]}
          style={styles.background}
        >
          

          {/* Centered Text */}
          <View style={styles.centeredTextContainer}>
            <Text style={styles.centeredText}>
              Your Account Verification is pending
              <Text style={styles.differentColorText}>
                {" "}
                After Verification We Will inform you
              </Text>
            </Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleLinkClick}
            >
              <Text style={styles.buttonText}>Click here</Text>
              <Text style={styles.buttonText}>(for more info)</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp("100%"),
  },
  background: {
    flex: 1,
  },
  topRightImage: {
    position: "absolute",
    top: 0,
    right: 0,
    width: wp("90%"),
    height: hp("39%"),
  },
  bottomLeftImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: wp("80%"),
    height: hp("45%"),
  },
  centeredTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: hp("2%"),
  },
  centeredText: {
    textAlign: "center",
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
    // fontFamily: "Times New Roman",
  },
  differentColorText: {
    color: "white",
  },
  buttonContainer: {
    position: "absolute",
    bottom: hp("5%"),
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    width: wp("80%"),
    height: hp("6%"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("2%"),
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    // fontFamily: "Times New Roman",
  },
});

