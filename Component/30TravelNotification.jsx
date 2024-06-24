import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign, Entypo, EvilIcons } from "@expo/vector-icons";

export default function TravelNotification({ navigation })  {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#DC52FF", "#430970", "#DC55FF"]}
        style={styles.container}
      >
        <View>
          <LinearGradient colors={["#8E288E", "#402775"]}>
            <View style={styles.navContainer2}>
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
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Settings")}>
                  <AntDesign
                    name="setting"
                    size={wp("10%")}
                    color="white"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              {/* Search input */}
              <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Search..." />
                <EvilIcons
                  name="search"
                  size={wp("10%")}
                  color="black"
                  style={styles.searchIcon}
                />
                <TouchableOpacity style={styles.rightIcon}>
                  <Entypo
                    name="arrow-with-circle-right"
                    size={wp("10%")}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.notification}>
            <Text style={styles.notificationText}>Notifications</Text>
          </View>
          <View style={styles.cardContainer}>
            {/* Cards */}
            <View style={styles.card}>
              <Text style={styles.cardText}>
                Your Ride for tomorrow has been changed.
              </Text>
              <Text style={styles.time}>04:50 p.m</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardText}>
                Booking Available for 2 Feb City To City
              </Text>
              <Entypo
                name="arrow-with-circle-right"
                size={wp("6%")}
                color="black"
                style={styles.rightIcon1}
              />
              <Text style={styles.time}>04:20 p.m</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardText}>
                Booking Available for 10 Feb City To City
              </Text>
              <Entypo
                name="arrow-with-circle-right"
                size={wp("6%")}
                color="black"
                style={styles.rightIcon1}
              />
              <Text style={styles.time}>04:20 p.m</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardText}>
                Your bank details are verified
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: wp("100%"),
  },
  navContainer2: {
    width: wp("100%"),
    height: hp("30%"),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("2%"),
    marginBottom: hp("2%"),
    marginLeft: wp("5%"),
    marginRight: wp("5%"),
  },
  greetingText: {
    color: "white",
    fontSize: wp("5%"),
    marginTop: hp("-7"),
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: wp("4%"),
    marginTop: hp("-7"),
  },
  avatar: {
    borderRadius: 50,
    width: hp("10%"),
    height: wp("20%"),
    marginBottom: hp("10%"),
    marginTop: hp("4%"),
  },
  inputContainer: {
    marginTop: hp("-8%"),
  },
  input: {
    height: hp("6%"),
    width: wp("90%"),
    marginLeft: wp("5%"),
    fontSize: wp("4%"),
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#cecece",
  },
  searchIcon: {
    position: "absolute",
    marginLeft: wp("6%"),
    marginTop: hp("1%"),
  },
  rightIcon: {
    position: "absolute",
    marginLeft: wp("80%"),
    marginTop: hp("0.5%"),
  },
  rightIcon1: {
    // position: "absolute",
    marginLeft: wp("13%"),
    marginTop: hp("-5%"),
    // backgroundColor:"red"
  },
  notification: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    marginTop: hp("4%"),
    marginLeft: wp("4%"),
    marginBottom: hp("2%"),
  },
  cardContainer: {
    alignItems: "center",
  },
  card: {
    width: wp("90%"),
    height: hp("10%"),
    backgroundColor: "white",
    padding: wp("4%"),
    borderRadius: 10,
    marginTop: hp("2%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardText: {
    width: wp("60%"),
    fontSize: wp("4%"),
  },
  time: {
    textAlign: "right",
    fontSize: wp("3%"),
    marginTop: hp("4%"),
    marginLeft: wp("-8%"),
  },
});
