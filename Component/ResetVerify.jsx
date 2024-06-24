import React, { useState } from "react";
import { url } from './config';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResetVerify({ navigation, route }) {
  const {userId} = route.params;
  const [otp, setOTP] = useState(["", "", "", ""]); // Array to hold OTP values

  // Function to handle OTP input change
  const handleOTPChange = (text, index) => {
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);

    // Automatically shift focus to the next input after entering a character
    if (text.length > 0 && index < 3) {
      // Find the next input field
      const nextInput = inputRefs[index + 1];
      nextInput.focus();
    }
  };

  // Array to hold references to OTP input fields
  const inputRefs = [];
  const handleVerify = () => {
    const otpCode = otp.join("");
    console.log(otpCode);
    // const driverId = "502"; // Replace with actual driverId from your application state or props

    fetch(`http://${url}:8080/driver/forget-password-verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers as needed
      },
      body: JSON.stringify({
        driverId: userId,
        forgetOtp: otpCode,
      }),
    })
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        return response.text(); // Read response as text
      })
      .then((result) => {
        console.log("Response:", result); // Log the response text
        if (result === "OTP verified successfully") {
          // Handle success accordingly
          console.log("OTP verified successfully");
          // You might want to navigate or perform some action upon successful verification
          navigation.navigate('passwordChange', { userId: userId }); // Example of navigation
        } else {
          // Handle failure case
          console.log("Verification failed");
          Alert.alert("Error", "Failed to verify OTP. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Network request failed:", error.message);
        Alert.alert(
          "Error",
          "Failed to verify OTP. Please check your network connection and try again."
        );
      });
  };


  

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        {/* Middle Section */}
        <View style={styles.middleSection}>
          <Text style={styles.text1}>Verification Code</Text>
          <Text style={styles.text2}>
            We have sent the verification code to your phone number
          </Text>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <View style={styles.otpcontainer}>
            {/* Render 4 OTP input fields in a row */}
            {Array.from({ length: 4 }, (_, index) => (
              <TextInput
                key={index}
                style={styles.input}
                maxLength={1}
                keyboardType="numeric"
                value={otp[index]}
                onChangeText={(text) => handleOTPChange(text, index)}
                ref={(input) => (inputRefs[index] = input)} // Assign ref to each input
                autoFocus={index === 0} // Autofocus the first input
              />
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={handleVerify}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    marginTop: hp("5%"),
    marginLeft: wp("5%"),
  },

  middleSection: {
    marginTop: hp("5%"),
    marginHorizontal: wp("7%"),
  },
  text1: {
    fontSize: 27,
    fontWeight: "bold",
    color: "black",
    marginBottom: hp("1%"),
  },
  text2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
  },

  bottomSection: {
    alignItems: "center",
    marginTop: hp("6%"),
  },

  button: {
    backgroundColor: "#13c39c",
    borderRadius: 10,
    width: wp("90%"),
    height: hp("6%"),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginTop: hp("9%"),
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  otpcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("5%"), // Responsive marginTop using heightPercentageToDP
  },
  input: {
    width: wp("14%"),
    height: hp("7%"),
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    fontSize: wp("6%"),
    textAlign: "center",
    marginHorizontal: wp("2%"), // Responsive horizontal margin using widthPercentageToDP
  },
});
