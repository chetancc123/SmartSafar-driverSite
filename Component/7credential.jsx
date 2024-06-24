import React, { useEffect, useState } from "react";
import { url } from './config';
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [hubName, setHubName] = useState("");
  const [emailOtp, setEmailOTP] = useState("");
  const [noOtp, setNoOTP] = useState("");
  const [data, setData] = useState([]);
  const [isEmailOTPSent, setIsEmailOTPSent] = useState(false);
  const [isSMSOTPVerified, setIsSMSOTPVerified] = useState(false);
  const [vehicleType, setVehicleType] = useState("");
  const [passwordError, setPasswordError] = useState(""); // State for password error message
  const countryCode = "+91";
  const MobileNo = countryCode + phoneNo;

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  const VerifyEmail = async () => {
    if (!isValidEmail(email)) {
      Alert.alert("Invalid email address");
      return;
    }

    const response = await fetch(`http://${url}:8080/api/emailSendOtp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    });
    if (response.ok) {
      Alert.alert("OTP sent");
      setIsEmailOTPSent(true);
    } else {
      Alert.alert("Error");
    }
  };

  const EmailVerifyOtp = async () => {
    const response = await fetch(
      `http://${url}:8080/api/verify-email-otp`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, emailOtp: emailOtp }),
      }
    );
    if (response.ok) {
      Alert.alert("Email OTP verified successfully");
      setIsEmailOTPSent(true);
    } else {
      Alert.alert("Invalid Email OTP");
    }
  };

  const PhoneSendOtp = async () => {
    const response = await fetch(
      `http://${url}:8080/api/signUpWithPhone`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNo: MobileNo }),
      }
    );
    console.log(response)
    if (response.ok) {
      Alert.alert("OTP sent");
      setIsSMSOTPVerified(true);
    } else {
      Alert.alert("Error");
      console.log(response)
    }
  };

  const PhoneVerifyOtp = async () => {
    const response = await fetch(
      `http://${url}:8080/api/verify-phoneno`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNo: MobileNo, smsOtp: noOtp }),
      }
    );
    // console.log(response);
    if (response.ok) {
      Alert.alert("SMS OTP verified successfully");
      setIsSMSOTPVerified(true);
    } else {
      Alert.alert("Invalid SMS OTP");
    }
  };

  useEffect(() => {
    // console.log(MobileNo);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // console.log("Fetching hub locations...");
      const response = await fetch(
        `http://${url}:8080/hub/getHubLocation`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error(` HUb location HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("API result:", result);

      // Log individual items to check their structure
      result.forEach((item, index) => {
        console.log(`Item ${index + 1}:`, item);
      });

      // Assuming result is an array of hub locations with a property `hubName`
      const dataWithSerialNumbers = result.map((item, index) => ({
        key: (index + 1).toString(),
        value: item.hubName, // Check if item has a hubName property
      }));

      console.log("Mapped data:", dataWithSerialNumbers);
      setData(dataWithSerialNumbers);
    } catch (error) {
      console.error("Error fetching data:", error);
      Alert.alert("Error", "Failed to fetch hub locations. Please try again.");
    }
  };

  const signup = async () => {
    if (!isValidPassword(password)) {
      setPasswordError("Password must be at least 8 characters long and include a special character, an uppercase letter, a lowercase letter, and a number.");
      return;
    } else {
      setPasswordError("");
    }

    if (isEmailOTPSent && isSMSOTPVerified) {
      try {
        const response = await fetch(
          `http://${url}:8080/api/driver/signup`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: username,
              email: email,
              phoneNumber: MobileNo,
              password: password,
              hubName: hubName,
              driverAndVehicleType: vehicleType, // Include vehicle type here
            }),
          }
        );

        console.log(response.json(), "response")

        if (response.ok) {
          Alert.alert("Driver signed up successfully");
          const userIdResponse = await fetch(
            `http://${url}:8080/driver/get-by-driver-phoneno/${MobileNo}`
          );
          console.log(userIdResponse, "userIdresponse")
          const userIdData = await userIdResponse.json();
          // console.log(userIdData, "userIddata")
          if (userIdData) {
            // console.log(userIdData.userId, "userId")
            // setUserId(userIdData.userId);
            navigation.navigate("driverinfo", { userId: userIdData.userId });
          }
        } else {
          // If response is not okay, handle the error
          const errorMessage = await response.text();
          Alert.alert("Error", errorMessage);
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <LinearGradient
          colors={["#A7F57A", "#BDE6D9"]}
          style={styles.background}
        >
          <View style={{ bottom: 350 }}>
            <View style={styles.topSection}>
              <Text style={styles.credentialsText}>Smart Safar</Text>
              <Text style={styles.credentialsText}>SIGN UP</Text>
            </View>
            <View style={styles.bottomSection}>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  value={username}
                  onChangeText={(text) => setUsername(text)}
                />
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    style={styles.input2}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                  <TouchableOpacity style={styles.button} onPress={VerifyEmail}>
                    <Text style={styles.buttonText}>Send</Text>
                  </TouchableOpacity>
                </View>

                {isEmailOTPSent && (
                  <View style={{ flexDirection: "row" }}>
                    <TextInput
                      style={styles.inputitetext2}
                      placeholder="Enter OTP"
                      placeholderTextColor="#00000080"
                      value={emailOtp}
                      onChangeText={(text) => setEmailOTP(text)}
                    />
                    <TouchableOpacity
                      style={styles.otpButton2}
                      onPress={EmailVerifyOtp}
                    >
                      <Text style={{ color: "#FFF" }}>Verify OTP</Text>
                    </TouchableOpacity>
                  </View>
                )}

                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    style={styles.input2}
                    placeholder="Phone Number"
                    value={phoneNo}
                    onChangeText={(text) => setPhoneNo(text)}
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={PhoneSendOtp}
                  >
                    <Text style={styles.buttonText}>Send</Text>
                  </TouchableOpacity>
                </View>
                {isSMSOTPVerified && (
                  <View style={{ flexDirection: "row" }}>
                    <TextInput
                      style={styles.inputitetext2}
                      placeholder="Enter OTP"
                      placeholderTextColor="#00000080"
                      value={noOtp}
                      onChangeText={(text) => setNoOTP(text)}
                    />
                    <TouchableOpacity
                      style={styles.otpButton2}
                      onPress={PhoneVerifyOtp}
                    >
                      <Text style={{ color: "#FFF" }}>Verify OTP</Text>
                    </TouchableOpacity>
                  </View>
                )}

                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true} // To hide the password input
                />
                {passwordError ? (
                  <Text style={styles.errorText}>{passwordError}</Text>
                ) : null}

                <SelectList
                  boxStyles={styles.input}
                  dropdownStyles={{
                    backgroundColor: "white",
                    marginBottom: hp("1%"),
                    paddingLeft: hp("3%"),
                    color: "black",
                  }}
                  setSelected={(val) => setHubName(val)}
                  data={data.map((item) => ({ value: item.value }))}
                  value={hubName}
                  save="value"
                />
                <SelectList
                  boxStyles={styles.input}
                  dropdownStyles={{
                    backgroundColor: "white",
                    marginBottom: hp("1%"),
                    paddingLeft: hp("3%"),
                    color: "black",
                  }}
                  setSelected={(val) => setVehicleType(val)}
                  data={[{ value: "TWO_WHEELER" }, { value: "FOUR_WHEELER" }]}
                  value={vehicleType}
                  save="value"
                />

                <TouchableOpacity style={styles.button1} onPress={signup}>
                  <Text style={styles.buttonText1}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("LoginPage")}
                  style={{ margin: wp("5%") }}
                >
                  <Text style={styles.enterText}>Already have an account?</Text>
                  <Text style={styles.loginButtonText}>Go back to Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
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
  topSection: {
    alignItems: "left",
    margin: wp(15),
    marginTop: hp("45%"),
  },
  enterText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    // bottom: hp("12%"),
  },
  credentialsText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
  },
  bottomSection: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    borderRadius: 10,
    width: wp("80%"),
    height: hp("6%"),
    marginBottom: hp("1%"),
    paddingLeft: hp("3%"),
    color: "black",
  },
  input2: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    borderRadius: 10,
    width: wp("58%"),
    height: hp("6%"),
    marginBottom: hp("1%"),
    paddingLeft: hp("3%"),
    color: "black",
  },
  button1: {
    backgroundColor: "#13C39C",
    borderRadius: 10,
    width: wp("80%"),
    height: hp("6%"),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#13C39C",
    alignSelf: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "#13C39C",
    paddingVertical: 4,
    paddingHorizontal: 2,
    borderRadius: 10,
    width: wp("20%"),
    marginBottom: 8,
    justifyContent: "center",
    marginLeft: 9,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  otpButton2: {
    backgroundColor: "blue",
    paddingVertical: 4,
    paddingHorizontal: 2,
    borderRadius: 10,
    width: wp("22%"),
    marginBottom: 8,
    marginTop: 7,
    height: hp("5"),
    marginLeft: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  inputitetext2: {
    width: wp("50%"),
    height: hp("6%"),
    marginTop: hp("0.5%"),
    marginRight: wp("10%"),
    backgroundColor: "white",
    paddingLeft: wp("5%"),
    paddingBottom: hp("1.7%"),
    paddingTop: hp("1.7%"),
    color: "#000",
    borderRadius: wp("2%"),
    fontSize: wp("4.5%"),
    marginRight: wp("5%"),
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    marginBottom: hp("1%"),
    paddingLeft: hp("3%"),
    width: wp("50%")
  },

});
