import * as React from "react";
import { url } from './config';
import {
  View,
  StyleSheet,
  Text,
  Image,
  // SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Entypo from "@expo/vector-icons/Entypo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';
import TopSection from "./TopSection";
import { FontAwesome5 } from '@expo/vector-icons';
// import { FontAwesome6 } from '@expo/vector-icons';

export default function Setting({ navigation }) {
  const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
      console.log('All data cleared from AsyncStorage');
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  };

  const Loginout = async () => {
    await clearAllData();
    navigation.navigate("LoginPage");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#A7F57A", "#BDE6D9"]}
        style={styles.container}
      >
        <View>

          <TopSection />

          {/* row 1 */}
          <View style={styles.driverContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("TripHistory")}>
              <Text style={styles.menuText}>Ride History</Text>
              <Icon
                name="history"
                style={styles.menuIcon}
                size={hp("3%")}
                color="black"
              />
            </TouchableOpacity>

            {/* row 3 */}
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 5,
                width: "100%",
              }}
            />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("SetPassword")}>
              <Text style={styles.menuText}>Reset Password</Text>
              <Icon
                name="key"
                style={styles.menuIcon}
                size={hp("3%")}
                color="black"
              />
            </TouchableOpacity>

            {/* row 4 */}

            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 5,
                width: "100%",
              }}
            />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Profile")}>
              <Text style={styles.menuText}>Edit Profile</Text>
              <FontAwesome5 name="user-edit" size={24} color="black" />
            </TouchableOpacity>

            {/* row 5 */}
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 5,
                width: "100%",
              }}
            />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("AddbankAccount")}>
              <Text style={styles.menuText}>Update Bank Account</Text>
              <FontAwesome name="bank" size={24} color="black" />
            </TouchableOpacity>
            {/* row 6 */}

            {/* row 7 */}

            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 5,
                width: "100%",
              }}
            />
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Changecar")}
            >
              <Text style={styles.menuText}>Return Car/Change Car</Text>
              <FontAwesome name="car" size={24} color="black" />
            </TouchableOpacity>

            {/* row 8 */}
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 5,
                width: "100%",
              }}
            />
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("ContactUs")}>
              <Text style={styles.menuText}>Contact Us</Text>
              <Icon
                name="address-book"
                style={styles.menuIcon}
                size={hp("3%")}
                color="black"
              />
            </TouchableOpacity>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 5,
                width: "100%",
              }}
            />
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Policy")}
            >
              <Text style={styles.menuText}>Privacy Policy</Text>
              <Icon
                name="lock"
                style={styles.menuIcon}
                size={hp("3%")}
                color="black"
              />
            </TouchableOpacity>

            {/* row 9 */}
            <View
              style={{
                borderBottomColor: "black",
                // borderBottomWidth: 1,
                marginVertical: 5,
                width: "100%",
              }}
            />
            <TouchableOpacity style={styles.menuItem1} onPress={Loginout}>
              <Text style={styles.menuText}>Logout</Text>
              <Icon
                name="sign-out"
                style={styles.menuIcon}
                size={hp("3%")}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navContainer2: {
    width: wp("100%"),
    height: hp("25%"),
    borderBottomLeftRadius: wp('5%'),
    borderBottomRightRadius: wp('5%'),
  },
  header: {
    margin: ('3%'),
    flexDirection: "row",
    alignItems: "center",
  },
  greeting: {
    flex: 1,
    marginLeft: wp("5%"),
  },
  greetingText: {
    fontSize: hp("2.5%"),
    color: "white",
  },
  avatar: {
    width: hp("10%"),
    height: hp("10%"),
    borderRadius: hp("5%"),
  },
  icon: {
    marginHorizontal: wp("2%"),
  },
  icon1: {
    marginHorizontal: wp("2%"),
    // marginTop: hp("-5%"),
    marginLeft: wp("80%"),
  },
  btContainer1: {
    width: wp("70%"),
    height: hp('8%'),
    alignSelf: 'center',
    alignItems: "center",
    paddingVertical: hp("1%"),
    backgroundColor: "#13C3",
    borderRadius: hp("5%"),
  },
  walletIcon: {
    marginRight: wp("2%"),
    marginTop: hp("-4%"),
  },
  walletText: {
    color: "white",
    marginRight: wp("2%"),
    fontSize: 20,
  },
  walletAmount: {
    color: "white",
    fontSize: 20,
  },
  driverContainer: {
    height: hp("60%"),
    width: wp("85%"),
    backgroundColor: "white",
    padding: wp("6%"),
    borderRadius: hp("2%"),
    alignSelf: 'center',
    marginTop: hp('10%'),
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: wp("2%"),
  },
  menuItem1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#13C3",
    borderRadius: hp("5%"),
    padding: wp("2%"),
    margin: wp('5%')
  },
  menuText: {
    flex: 1,
    fontSize: hp("2%"),
    color: "black",
  },
  menuIcon: {
    marginRight: wp("2%"),
  },
  sconatiner: {
    color: "#cecece", // Text color
    fontSize: 12,
  },
});