import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Entypo from "@expo/vector-icons/Entypo";

export const Driver_Wallet = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#DC52FF", "#430970", "#DC55FF"]}
        style={styles.container}
      >
        <View>
          <LinearGradient
            colors={["#8E288E", "#402775"]}
            style={styles.navContainer2}
          >
            <View style={styles.header}>
              <Image
                resizeMode="cover"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9c59ce7e5619d5786d53ef0f0515730b784afcaa6d3f9c71ebd0b0c91af210b?apiKey=6e819305aff14a71a524c5abb40332f8&",
                }}
                style={styles.avatar}
              />
              <View style={styles.greeting}>
                <Text style={styles.greetingText}>
                  Hey there, {"\n"} Rupesh Sahu👋
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.iconContainer}>
                <Icon
                  name="bell"
                  style={styles.icon}
                  size={hp("3%")}
                  color="white"
                />
                <Icon
                  name="cog"
                  size={hp("3%")}
                  color="white"
                  style={styles.icon}
                />
              </View>
              <Entypo
                name="text-document"
                size={hp("3.5%")}
                color="white"
                style={styles.icon1}
              />
            </View>

            <View style={styles.inputContainer}>
              <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>Go For Ride</Text>
                <Entypo
                  name="arrow-right"
                  size={hp("4%")}
                  color="black"
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
          <View style={styles.btContainer}>
            <TouchableOpacity style={styles.btContainer1}>
              <Entypo
                name="wallet"
                size={hp("5%")}
                color="gold"
                style={styles.walletIcon}
              />
              <Text style={styles.walletText}>Ride Wallet Balance</Text>
              <Text style={styles.walletAmount}>240.00</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.driverContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Ride History</Text>
              <Icon
                name="history"
                style={styles.menuIcon}
                size={hp("3%")}
                color="black"
              />
            </TouchableOpacity>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: "100%",
              }}
            />
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Reset Password</Text>
              <Icon
                name="key"
                style={styles.menuIcon}
                size={hp("3%")}
                color="black"
              />
            </TouchableOpacity>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: "100%",
              }}
            />
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Vehicle Details</Text>
              <Icon
                name="car"
                style={styles.menuIcon}
                size={hp("3%")}
                color="black"
              />
            </TouchableOpacity>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: "100%",
              }}
            />
            <TouchableOpacity style={styles.menuItem}>
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
                marginVertical: 10,
                width: "100%",
              }}
            />
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Privacy Policy</Text>
              <Icon
                name="lock"
                style={styles.menuIcon}
                size={hp("3%")}
                color="black"
              />
            </TouchableOpacity>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: "100%",
              }}
            />
            <TouchableOpacity style={styles.menuItem}>
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
    alignItems: "center",
  },
  navContainer2: {
    width: wp("100%"),
    height: hp("30%"),
    paddingHorizontal: wp("5%"),
    paddingTop: hp("5%"),
    justifyContent: "space-between",
  },
  header: {
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
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  icon: {
    marginHorizontal: wp("2%"),
    marginTop: hp("-17%"),
  },
  icon1: {
    marginHorizontal: wp("2%"),
    marginTop: hp("-11%"),
    marginLeft: wp("80%"),
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnContainer: {
    width: wp("70%"),
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("2%"),
    backgroundColor: "white",
    borderRadius: hp("3%"),
    marginLeft: wp("13%"),
    marginTop: hp("-10%"),
  },
  btnText: {
    textAlign: "center",
  },
  arrowIcon: {
    marginLeft: wp("2%"),
    marginTop: hp("-3%"),
  },
  btContainer: {
    marginTop: hp("5%"),
  },
  btContainer1: {
    width: wp("70%"),
    marginTop: hp("-4%"),
    marginLeft: wp("15%"),
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp("1%"),
    backgroundColor: "rgba(220, 82, 255, 0.46)",
    borderRadius: hp("5%"),
    marginBottom: hp("5%"),
  },
  walletIcon: {
    marginRight: wp("2%"),
    marginTop: hp("-3%"),
  },
  walletText: {
    color: "white",
    marginRight: wp("2%"),
    fontSize: 16,
  },
  walletAmount: {
    color: "white",
  },
  driverContainer: {
    width: wp("85%"),
    backgroundColor: "white",
    padding: wp("6%"),
    borderRadius: hp("2%"),
    height: hp("50%"),
    marginLeft: wp("7%"),
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("2%"),
  },
  menuText: {
    flex: 1,
    fontSize: hp("2%"),
    color: "black",
  },
  menuIcon: {
    marginRight: wp("2%"),
  },
});
