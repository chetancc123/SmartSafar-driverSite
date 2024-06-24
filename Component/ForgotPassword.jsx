import React, { useState } from "react";
import { url } from './config';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPassword({ navigation }) {
  const [contactDetail, setContactDetail] = useState("");
  const [loading, setLoading] = useState(false);
  const countryCode = "+91";
  const MobileNo = countryCode + contactDetail;

  const getPassword = async () => {
    try {
      const userIdResponse = await fetch(
        `http://192.168.199.212:8080/driver/get-by-driver-phoneno/${MobileNo}`,
        {
          method: "GET",
        }
      );
      
      const responseText = await userIdResponse.text();
      console.log("Raw response: ", responseText);
      
      let userId;
      try {
        userId = JSON.parse(responseText).userId;
      } catch (e) {
        throw new Error("Invalid JSON response");
      }

      if (userId) {
        handleForgotPassword(userId);
      } else {
        Alert.alert("Error", "User ID not found for this phone number.");
      }
    } catch (error) {
      console.error("Error fetching user ID:", error);
      Alert.alert("Error", "An error occurred while fetching the user ID.");
    }
  };

  const handleForgotPassword = async (userId) => {
    if (contactDetail.trim() === "") {
      alert("Please enter your phone number");
      return;
    }

    setLoading(true);

    const formdata = new FormData();
    formdata.append("phoneNo", MobileNo);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `http://192.168.199.212:8080/driver/forget-password`,
        requestOptions
      );
      const result = await response.text();

      if (response.ok) {
        console.log(result);
        navigation.navigate("resetVerify", { userId: userId });
      } else {
        alert("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#FFFFFF", "#FFFFFF"]}
        style={styles.background}
      />

      <View style={styles.header}>
        <Text style={styles.headerText}>Forgot password</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Enter the Phone Number to Set a New Password
        </Text>
        <Image
          source={require("../assets/forgot.png")}
          style={styles.centerImage}
        />
        <TextInput
          style={styles.input}
          placeholder=" Enter your phone number"
          value={contactDetail}
          onChangeText={setContactDetail}
          keyboardType="phone-pad"
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={getPassword}
        disabled={loading}
      >
        {loading ? (
          <Text style={styles.continueButtonText}>Loading...</Text>
        ) : (
          <Text style={styles.continueButtonText}>Continue</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: hp("100%"),
  },
  back: {
    paddingTop: wp("10%"),
    paddingVertical: wp("5%"),
  },
  btn: {
    padding: wp("2%"),
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    padding: wp("5%"),
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    alignItems: "center",
    marginHorizontal: wp("10%"),
  },
  paragraph: {
    fontSize: 18,
    color: "#444",
    textAlign: "center",
    marginBottom: wp("5%"),
  },
  input: {
    width: wp("90%"),
    padding: wp("3%"),
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: wp("3%"),
    backgroundColor: "white",
  },
  continueButton: {
    alignItems: "center",
    backgroundColor: "#13C39C",
    padding: wp("3%"),
    borderRadius: 8,
    margin: wp("1%"),
    width: wp("90%"),
    alignSelf: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  centerImage: {
    alignSelf: "center",
    width: wp("65%"),
    height: hp("40%"),
    resizeMode: "contain",
  },
});
