import React, { useState, useEffect } from "react";
import { url } from './config';
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TopSection from "./TopSection";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddbankAccount({ navigation }) {
  const [UserId, setUserId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleInputChange1 = (text) => {
    setInputValue1(text);
  };

  const handleInputChange2 = (text) => {
    setInputValue2(text);
  };

  const handleInputChange3 = (text) => {
    setInputValue3(text);
  };

  const saveBankAccount = async () => {
    const formdata = new FormData();
    formdata.append("accountNo", inputValue);
    formdata.append("IFSCcode", inputValue1);
    formdata.append("accountHolderName", inputValue2);
    formdata.append("branchName", inputValue3);

    const requestOptions = {
      method: "PUT",
      body: formdata,
    };

    try {
      const response = await fetch(
        `http://${url}:8080/driver/update-bank-details/${UserId}`,
        requestOptions
      );
      const result = await response.text();
      console.log(result);
      Alert.alert("Bank Details Added");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserIdAndData = async () => {
    try {
      const userId = await AsyncStorage.getItem("driverId");
      // console.log(userId);
      if (userId) {
        setUserId(userId);
        // fetchDriverProfile(userId);
      } else {
        console.error("No userId found in AsyncStorage");
      }
    } catch (error) {
      console.error("Error retrieving userId from AsyncStorage:", error);
    }
  };

  useEffect(() => {
    fetchUserIdAndData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#A7F57A", "#BDE6D9"]}
        style={styles.background}
      >

        <TopSection navigation={navigation} />

        <View style={styles.textContainer}>
          <Text style={styles.bank4}>Add New Bank Account</Text>

          <View style={styles.input}>
            <View style={styles.Inputset}>
              <Text style={styles.Holdertext}>Account Number</Text>
              <TextInput
                style={styles.Inputfield}
                placeholder="------------------------ "
                value={inputValue}
                onChangeText={handleInputChange}
              />
            </View>

            <View style={styles.Inputset}>
              <Text style={styles.Holdertext}>IFSC Code</Text>

              <TextInput
                style={styles.Inputfield}
                placeholder="------------------------"
                value={inputValue1}
                onChangeText={handleInputChange1}
              />
            </View>

            <View style={styles.Inputset}>
              <Text style={styles.Holdertext}>Account Holder Name</Text>
              <TextInput
                style={styles.Inputfield}
                placeholder="-----------------------"
                value={inputValue2}
                onChangeText={handleInputChange2}
              />
            </View>

            <View style={styles.Inputset}>
              <Text style={styles.Holdertext}>Branch Name</Text>
              <TextInput
                style={styles.Inputfield}
                placeholder="------------------------"
                value={inputValue3}
                onChangeText={handleInputChange3}
              />
            </View>
          </View>

          <TouchableOpacity onPress={saveBankAccount} style={styles.Save}>
            <Text style={styles.saveButtonText}>SAVE BANK ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
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
  textContainer: {
    marginTop: hp("10%"),
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    width: wp("90%"),
    height: hp("35%"),
    backgroundColor: "white",
    padding: hp("2%"),
    borderRadius: 10,
    alignSelf: "center",
  },
  saveButton: {
    marginTop: hp("2%"),
    backgroundColor: "#fff",
    borderRadius: 5,
    width: wp("70%"),
    marginLeft: wp("6%"),
    padding: hp("2%"),
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
  },

  bank4: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
  },
  Save: {
    justifyContent: "center",
    marginTop: hp("5%"),
    backgroundColor: "#13C39C",
    height: hp("5%"),
    width: wp("55%"),
    borderRadius: 5,
    alignSelf: "center",
  },
  Holdertext: {
    // justifyContent: "space-around",
    fontSize: 20,
    fontWeight: "500",
  },
  input: {
    marginTop: wp('5%'),
    alignSelf: 'center',
  },
  Inputset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  Holdertext:{
    fontSize:18,
    fontWeight:"bold",
    marginLeft:wp("18%")
  },
  Inputfield:{
    width:wp("40%"),
    marginRight:wp("18%"),
  }
});
