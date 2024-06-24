import React, { useState, useEffect } from "react";
import { url } from './config';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons';

export default function PasswordChange({ navigation, route }) {
  const {userId} = route.params;
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleSecureEntry = () => {
    setSecureTextEntry((prev) => !prev); // Toggle the secureTextEntry state
  };

  const handleResetPassword = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "newpassword": newPassword,
        "confirmPassword": confirmPassword
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      const response = await fetch(`http://${url}:8080/driver/setpassword/${userId}`, requestOptions);
      const result = await response.text();
      console.log(result);
      if(result === "Password set successfully"){
        navigation.navigate('LoginPage');
      }else{
        Alert.alert("Error", result);
      }

    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred while resetting your password.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        {/* Top Section */}
        <View style={styles.topSection}>
          <Image
            source={require("../assets/change.png")}
            style={styles.centerImage}
          />
        </View>

        {/* Middle Section */}
        <View style={styles.middleSection}>
          <Text style={styles.text1}>Enter New Password</Text>
          <Text style={styles.text2}>Your new password must be different from previous used password</Text>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter new Password"
              secureTextEntry={secureTextEntry}
              onChangeText={setNewPassword}
              value={newPassword}
            />
            <TouchableOpacity style={styles.iconContainer} onPress={toggleSecureEntry}>
              <MaterialIcons
                name={secureTextEntry ? 'visibility-off' : 'visibility'} // Toggle icon based on secureTextEntry state
                size={24}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.validate}>Must be at least 8 characters</Text>
          <Text style={styles.validate}>Combination of uppercase and lowercase letters</Text>
          <Text style={styles.validate}>Along with numbers or special characters</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={secureTextEntry}
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
            <TouchableOpacity style={styles.iconContainer} onPress={toggleSecureEntry}>
              <MaterialIcons
                name={secureTextEntry ? 'visibility-off' : 'visibility'} // Toggle icon based on secureTextEntry state
                size={24}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.validate}>Both passwords must match</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={handleResetPassword}
          >
            <Text style={styles.buttonText}>Reset Password</Text>
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
    marginTop: hp("3%"),
    },
 centerImage: {
        alignSelf: "center",
        width: wp("65%"),
        height: hp("35%"),
        resizeMode: "contain",
    },
    middleSection:{
        marginVertical:hp("3%"),
        marginHorizontal:wp("7%"),
    },
    text1:{
        fontSize: 26,
    fontWeight: "bold",
    color: "black",
    marginBottom:hp("1%"),
    },
    text2:{
        fontSize: 16,
    fontWeight: "bold",
    color: "grey",
    },

    bottomSection: {
        alignItems: "center",
        marginTop: hp("3%"),
      },
    
    input: {
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "white",
        borderRadius: 10,
        width: wp("80%"),
        height: hp("6%"),
        marginTop: hp("2%"),
        paddingLeft: wp("3%"),
        color: "black",
  },
  button: {
    backgroundColor: "#13c39c",
    borderRadius: 10,
    width: wp("90%"),
    height: hp("6%"),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginTop:hp("4%")
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  validate:{
    fontSize: 12,
    fontWeight: "bold",
    color: "red",
    // justifyContent:"flex-start",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: wp("4%"),
    marginTop: hp("2%"),
    width: wp("90%"),
  },
  input: {
    flex: 1,
    height: hp("5%"),
  },
  iconContainer: {
    padding: wp("3%"),
  },
  
  
});