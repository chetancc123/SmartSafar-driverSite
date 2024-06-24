import React from "react";
import { url } from './config';
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Text, TouchableOpacity, Alert, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Map from "./Map";
import TopSection from "./TopSection";
// import AsyncStorage from '@react-native-async-storage/async-storage';


export default function DriverAccept111({ navigation, route }) {
  const { bookingId } = route.params;
  const { img } = route.params;
  const { name } = route.params;
  const { phoneno } = route.params;

  const sendOtp = async () => {
    const requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `http://${url}:8080/driver/send-otp-for-user-by-driver/${bookingId}`, //bookingID
        requestOptions
      );
      const result = await response.json(); // Parse the response as JSON
      console.log("result:", result);

      // Extract OTP from the JSON result
      const { otp } = result;
      console.log("OTP", otp); // Assuming the OTP is a simple string
      await AsyncStorage.setItem("otp", otp);

      // Alert.alert("Success", "OTP sent successfully");
      navigation.navigate("DriverOTP", { bookingId: bookingId, img: img, name: name, phoneno: phoneno });
    } catch (error) {
      console.error(error);
      // Alert.alert("Error", "Failed to send OTP");
    }
  };

  const handlePressPhoneNumber = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`).catch(() =>
      Alert.alert("Error", "Unable to open the call log.")
    );
  };

  const handlePressMessage = (phoneNumber) => {
    Linking.openURL(`sms:${phoneNumber}`).catch(() =>
      Alert.alert("Error", "Unable to open the messaging app.")
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={StyleSheet.absoluteFill}>
          <Map />
        </View>
        <TopSection />


        <View style={styles.bottomSection}>
          {/* {message ? ( */}
          <View style={styles.row}>
            <View style={styles.senderInfo}>
              <Image
                source={{ uri: img }}
                style={{
                  width: "80%",
                  height: "55%",
                  borderRadius: wp("50%"),
                }}
              />
              <Text style={styles.senderName}>{name}</Text>
              <View style={styles.iconRow}>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => handlePressPhoneNumber(phoneno)}
                >
                  <Feather name="phone-call" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => handlePressMessage(phoneno)}
                >
                  <Feather name="message-circle" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.addressInfo}>
              {/* <Text style={styles.addressText}>{message.senderLocation}</Text> */}
              <Text style={styles.addressText}>Samata Colony Raipur</Text>

              <TouchableOpacity style={styles.arrivedButton} onPress={sendOtp}>
                <Text style={styles.arrivedButtonText}>Arrived</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* ) : (
              <Text style={styles.distanceText}>Waiting for ride details...</Text>
            )} */}
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    borderTopLeftRadius: wp("2%"),
    borderTopRightRadius: wp("2%"),
    height: hp("25%"),
    marginTop: hp('60%'),
    justifyContent: "flex-end",
  },
  bottomSection: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#BDE6D9",
    width: wp("100%"),
    height: hp("20%"),
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 20,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  senderInfo: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  senderName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconRow: {
    flexDirection: "row",
    marginTop: hp("1%"),
  },
  iconButton: {
    backgroundColor: "#13C39C",
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: wp("1%"),
  },
  addressInfo: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
  },
  addressText: {
    fontSize: 16,
    textAlign: "right",
  },
  arrivedButton: {
    marginTop: hp("1%"),
    backgroundColor: "#13C39C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  arrivedButtonText: {
    color: "white",
    fontSize: 16,
  },
});
