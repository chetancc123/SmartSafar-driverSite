import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { url } from './config';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import TopSection from "./TopSection";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SetPassword({ navigation }) {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [UserId, setUserId] = useState("");


  const handleInputChange = (text) => {
    setInputValue(text);
  };
  const handleInputChange1 = (text) => {
    setInputValue1(text);
  };
  const handleInputChange2 = (text) => {
    setInputValue2(text);
  };


  const fetchUserIdAndData = async () => {
    try {
      const userId = await AsyncStorage.getItem('driverId');
      if (userId) {
        // getData();
        setUserId(userId);
      } else {
        console.error('No userId found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error retrieving userId from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    fetchUserIdAndData();
  }, []);



  const handleForgotPassword = async () => {
    try {
      const response = await fetch(`http://${url}:8080/driver/${UserId}/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ oldPassword: inputValue, newPassword: inputValue1, confirmPassword: inputValue2 }),
      });

      const result = await response.text();
      console.log(result);
      if (response.ok) {
        Alert.alert('Password Reset Successful', 'You have successfully changed the password.');
        console.log("Saving new password:", inputValue1);
        // navigation.navigate('Otp'); // Navigate to the Otp screen
      }
      else {
        // Signup failed
        console.error('failed:', response.result);
        Alert.alert('Failed to change the Password. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred during Reseting Password. Network Error.');
    }
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#A7F57A", "#BDE6D9"]}
        style={styles.background}
      >

        <TopSection navigation={navigation} />


        <View style={styles.textContainer}>
          <Text style={styles.bank}>Set New Password</Text>
          <View style={styles.input}>
            <View style={styles.Inputset}>
              <Text style={styles.inputtext}>Enter Old Password</Text>
              <TextInput
                style={{ marginHorizontal: 20 }}
                placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _"
                value={inputValue}
                onChangeText={handleInputChange}
              />
            </View>

            <View style={styles.Inputset}>
              <Text style={styles.inputtext}>Enter New Password</Text>

              <TextInput
                style={{ marginHorizontal: 20 }}
                placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _"
                value={inputValue1}
                onChangeText={handleInputChange1}
              />
            </View>

            <View style={styles.Inputset}>
              <Text style={styles.inputtext}>Re-enter Password</Text>
              <TextInput
                style={{ marginHorizontal: 20 }}
                placeholder=" _ _ _ _ _ _ _ _ _ _ _ _ _ "
                value={inputValue2}
                onChangeText={handleInputChange2}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleForgotPassword}
          >
            <Text style={styles.saveButtonText}>DONE</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // height: hp('110%')
  },
  textContainer: {
    borderWidth: 1,
    borderColor: "black",
    width: wp("90%"),
    height: hp("40%"),
    backgroundColor: "white",
    padding: hp("2%"),
    borderRadius: 18,
    alignSelf: 'center',
    marginTop: hp('15%'),
    // top: hp('-20%'),
    // marginLeft: wp("5%"),
  },
  horizontalLine1: {
    borderBottomColor: "#898989",
    borderBottomWidth: 1,
    marginVertical: hp("2%"),
    width: wp("90%"),
    marginTop: hp("2%"),
    alignSelf: "center",
  },
  input: {
    marginTop: wp('10%')
  },
  saveButton: {
    // marginTop: hp("10%"),
    backgroundColor: "#13C39C",
    borderRadius: 10,
    width: wp("50%"),
    alignSelf: 'center',
    padding: hp("1%"),
    alignItems: "center",
    marginTop: hp("6%"),
  },
  saveButtonText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },

  bank: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: hp("2%"),
  },
  inputtext: {
    fontSize: 20,
  },
  bank4: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
  Inputset: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});