import React, { useEffect, useState } from "react";
import { url } from './config';
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, AntDesign, Fontisto } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "./Map";
import TopSection from "./TopSection";

export default function HomePage({ navigation }) {
  const [text, setText] = useState("You're Offline Now");
  const onPressHandler = () => {
    setText("Scanning .....");
    const timer = setTimeout(() => {
      navigation.navigate('DriverAccept');
    }, 5000); // 5000 milliseconds = 5 seconds
    return () => clearTimeout(timer);
  };


  // const fetchUserData = async () => {
  //   try {
  //     // Retrieve userId from AsyncStorage
  //     const userId = await AsyncStorage.getItem('driverId');
  //     setUserId(userId);
  //     console.log("userIdsssss", userId)
  //     // Retrieve token from AsyncStorage
  //     const token = await AsyncStorage.getItem('Token');
  //     console.log('Tokens:', token);
  //   } catch (error) {
  //     console.error(error);
  //     // Handle error if any
  //   }
  // };


  // useEffect(() => {
  //   fetchUserData(); 
  // }, []); 


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>

        <View style={StyleSheet.absoluteFill}>
          <Map />
        </View>
        <TopSection navigation={navigation} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onPressHandler}>
            <Fontisto name="radio-btn-active" size={100} color="black" />
          </TouchableOpacity>
          <View
            // colors={["#DC52FF", "#DC52FF", "#430970"]}
            style={styles.bar1}
          >
            <Text
              style={{ color: "white", textAlign: "center", fontSize: 20 }}
            >
              {text}
            </Text>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Images: {
    justifyContent: "flex-start",
    height: hp("105%"),
  },
  box: {
    // flex: 1,
    flexDirection: "column",
  },
  bar: {
    backgroundColor: '#13C39C',
    flexDirection: "row",
    width: wp("100%"),
    alignItems: "center",
    borderRadius: 10,
    height: hp("10%"),
  },
  text: {
    justifyContent: "center",
    padding: wp("1%"),
    marginHorizontal: wp("5%"),
  },
  text1: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  text2: {
    color: "white",
  },
  bar1: {
    backgroundColor: '#13C39C',
    flexDirection: "row",
    width: wp("95%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: hp("8%"),
    margin: wp("2%"),
    marginTop: hp("1%")
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: hp("10%")
  },
  buttonContainer: {
    top: hp('50%'),
  }
});