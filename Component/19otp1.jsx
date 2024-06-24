import React, { useEffect, useState, useRef } from "react";
import { url } from './config';
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "./Map";
import TopSection from "./TopSection";

export default function OTP({ navigation, route }) {
  const { bookingId } = route.params;
  const { img } = route.params;
  const { name } = route.params;
  const { phoneno } = route.params;
  const [otp, setOtp] = useState(['', '', '', '']);
  const [storedOtp, setStoredOtp] = useState('');
  const inputRefs = useRef([]);

  const fetchStoredOtp = async () => {
    try {
      const otp = await AsyncStorage.getItem('otp');
      if (otp !== null) {
        setStoredOtp(otp);
      }
      console.log(otp)
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to fetch OTP");
    }
  };

  useEffect(() => {
    fetchStoredOtp();
  }, []);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    } else if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === storedOtp) {
      Alert.alert("Success", "OTP verified successfully");
      navigation.navigate("Ridecomplete", { bookingId: bookingId, img: img, name: name, phoneno: phoneno });
    } else {
      Alert.alert("Error", "Invalid OTP");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopSection />
      <Map />

      <LinearGradient
        colors={["#13C39C", "#13C39C"]}
        style={styles.background}
      >
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              placeholder="_"
              maxLength={1}
              value={digit}
              color={"white"}
              keyboardType="numeric"
              onChangeText={(value) => handleOtpChange(index, value)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </View>
        <Text style={styles.text}>ENTER OTP</Text>

        <TouchableOpacity onPress={verifyOtp}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Start Trip</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: hp("20%"),
  },
  Images: {
    justifyContent: "flex-end",
    width: wp("100%"),
    height: hp("105%"),
  },
  text: {
    fontSize: 22,
    color: "black",
    alignSelf: 'center',
    fontWeight: "700",
  },
  button: {
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
    width: wp("60%"),
    marginTop: hp("3%"),
    backgroundColor: "green",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('60%'),
    alignItems: 'center',
    alignSelf: 'center',
  },
  otpInput: {
    borderRadius: 10,
    width: wp('15%'),
    height: hp('7%'),
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },

});
