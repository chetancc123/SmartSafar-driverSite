import React, { useState } from "react";
import { url } from './config';
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
  Platform
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const countryCode = "+91";
  const MobileNo = countryCode + username;

  const isValidMobileNumber = (number) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(number);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = async () => {
    if (!isValidMobileNumber(username)) {
      setMobileError("Mobile number must be 10 digits.");
      return;
    } else {
      setMobileError("");
    }

    if (!isValidPassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    } else {
      setPasswordError("");
    }

    try {
      const userData = {
        usernameOrEmailOrPhoneNumber: MobileNo,
        password: password,
      };

      const response = await fetch(`http://${url}:8080/api/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const responseText = await response.json();
      if (response.ok) {
        const token = responseText.token;
        const userIdResponse = await fetch(
          `http://${url}:8080/driver/get-by-driver-phoneno/${MobileNo}`,
          {
            method: "GET",
          }
        );
        const responsedata = await userIdResponse.json();

        if (userIdResponse.ok) {
          await AsyncStorage.setItem("driverId", responsedata.userId.toString());
          await AsyncStorage.setItem("Token", token);
          await AsyncStorage.setItem("PhoneNo", MobileNo);
          navigation.navigate("HomePage");
        } else {
          const errorData = await userIdResponse.text();
          console.error("Failed to fetch user ID:", errorData);
          Alert.alert("Error", "Failed to fetch user ID.");
        }
      } else {
        const errorData = await response.text();
        console.error("Login failed:", errorData);
        Alert.alert("Error", "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Login Error", "An error occurred while trying to log in.");
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <LinearGradient
            colors={["#A7F57A", "#BDE6D9"]}
            style={styles.background}
          >
            <ImageBackground
              // source={require("../assets/tright.png")}
              style={styles.image1}
            >
              {/* Top Section */}
              <View style={styles.topSection}>
                <Text style={styles.enterText}>Smart Safar</Text>
                <Text style={styles.credentialsText}>Welcomes You</Text>
              </View>

              <Image
                source={require("../assets/login.png")}
                style={styles.centerImage}
              />
            </ImageBackground>
            <View style={styles.bottomSection}>
              <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                value={username}
                onChangeText={setUsername}
                keyboardType="numeric"
              />
              {mobileError ? (
                <Text style={styles.errorText}>{mobileError}</Text>
              ) : null}
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
              />
              {passwordError ? (
                <Text style={styles.errorText}>{passwordError}</Text>
              ) : null}
              <TouchableOpacity
                style={styles.passwordVisibilityButton}
                onPress={togglePasswordVisibility}
              >
                <Text style={styles.passwordVisibilityText}>
                  {passwordVisible ? "Hide" : "Show"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Credential")}
              >
                <Text style={styles.loginButtonText111}>Create New Account</Text>
              </TouchableOpacity>
              <View style={styles.bottomText1}>
                <Text style={styles.goBackText}>Forgot Password?</Text>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => navigation.navigate("forgetpassword")}
                >
                  <Text style={styles.loginButtonText}>Reset Here</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    height: hp("100%"),
    flex: 1,
  },
  topSection: {
    alignItems: "left",
    marginTop: hp("8%"),
    paddingLeft: wp("5%"),
    marginBottom: hp("15%"),
  },
  enterText: {
    fontSize: 45,
    color: "black",
    fontWeight: "bold",
  },
  credentialsText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    borderRadius: 10,
    width: wp("80%"),
    height: hp("6%"),
    marginBottom: hp("2%"),
    paddingLeft: wp("3%"),
    color: "black",
  },
  button: {
    backgroundColor: "#13C39C",
    borderRadius: 10,
    width: wp("80%"),
    height: hp("6%"),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  bottomSection: {
    alignItems: "center",
    marginTop: hp("15%"),
  },
  goBackText: {
    fontSize: 18,
    color: "black",
    marginRight: wp("2%"),
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#13C39C",
  },
  loginButtonText1: {
    fontSize: 16,
    color: "lightgreen",
    marginTop: hp("2%"),
  },
  image1: {
    maxHeight: hp("50%"),
  },
  centerImage: {
    alignSelf: "center",
    marginTop: hp("2%"),
    width: wp("70%"),
    height: hp("30%"),
    resizeMode: "contain",
    bottom: hp("10%"),
  },
  bottomText1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("1%"),
  },
  loginButtonText111: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginTop: hp("3%"),
  },
  passwordVisibilityButton: {
    position: "absolute",
    right: wp("12%"),
    top: hp("9.5%"),
    padding: 10,
  },
  passwordVisibilityText: {
    color: "#13C39C",
    bottom: hp("1%"),
  },
  errorText: {
    color: "red",
    marginBottom: hp("1%"),
    width: wp("50%")
  },
});
