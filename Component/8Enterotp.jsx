import { React, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Otp111({ navigation })  {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (index === 3 && value !== "") {
      // If the last OTP field is filled, show success message
      setSuccessMessage("You have successfully changed your password!");
    } else {
      setSuccessMessage("");
    }

    setOtp(newOtp);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* Background Gradient */}
        <LinearGradient
          colors={["#DC52FF", "#DC52FF", "#430970", "#390D5C"]}
          style={styles.background}
        >
          {/* Top Right Background Image */}
          <ImageBackground
            source={require("../assets/tright.png")}
            style={styles.topRightImage}
          />

          {/* Bottom Left Background Image */}
          <ImageBackground
            source={require("../assets/bleft.png")}
            style={styles.bottomLeftImage}
          />

          {/* Top Section */}
          <View style={styles.topSection}>
            <Text style={styles.enterText}>ENTER</Text>
            <Text style={styles.credentialsText}>OTP</Text>
          </View>

          {/* Middle Section */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                placeholder="_"
                maxLength={1}
                value={digit}
                keyboardType="numeric"
                onChangeText={(value) => handleOtpChange(index, value)}
              />
            ))}
          </View>

          {/* Bottom Section */}
          <View style={styles.bottomSection}>
            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("sucesspass")}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

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
    right: 0,
    width: wp("90%"),
    height: hp("39%"),
  },
  bottomLeftImage: {
    position: "absolute",
    justifyContent: "flex-end",
    bottom: 0,
    left: 0,
    width: wp("80%"),
    height: hp("41%"),
  },
  topSection: {
    alignItems: "left",
    marginVertical: hp("15%"),
    height: wp("33%"),
    paddingLeft: 25,
  },
  enterText: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
  },
  credentialsText: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#430970",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("85%"),
    height: wp("40%"),
    alignItems: "center",
    alignSelf: "center",
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
    width: wp("18%"),
    height: hp("7%"),
    textAlign: "center",
    fontSize: 20,
    color: "black",
  },

  bottomSection: {
    alignItems: "center",
    marginBottom: hp("5%"),
    marginTop: hp("20%"),
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    width: wp("85%"),
    height: hp("7%"),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp("2%"),
  },
  buttonText: {
    fontSize: hp("2.5%"),
    fontWeight: "bold",
    color: "grey",
  },
});
