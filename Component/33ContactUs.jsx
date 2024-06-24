
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Foundation } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
// import { LearnMoreLinks } from "react-native/Libraries/NewAppScreen";

export default function ContactUs({ navigation }) {
  const phoneNumber = "+916260400036";
  const emailAddress = "hello@ridomail.com";
  const websiteUrl = "https://www.rido.com";

  const handlePhonePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  const handleEmailPress = () => {
    Linking.openURL(`mailto:${emailAddress}`);
  };
  const handleWebsitePress = () => {
    Linking.openURL(websiteUrl);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#A7F57A", "#BDE6D9"]}
        style={styles.container}
      >
        <View style={styles.centeredTextContainer}>
          <Text style={styles.text}>Smart Safar Ride Anywhere</Text>
        </View>
        <Image
          source={require("../assets/epx.gif")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.contactUsText}>Contact Us</Text>
        <TouchableOpacity
          style={styles.phoneContainer}
          onPress={handlePhonePress}
        >
          <FontAwesome name="phone" size={34} color="white" />
          <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        </TouchableOpacity>
        <Text style={styles.writeUsText}>Write us at</Text>
        <TouchableOpacity
          style={styles.messageContainer}
          onPress={handleEmailPress}
        >
          <FontAwesome name="envelope" size={34} color="white" />
          <Text style={styles.emailAddress}>{emailAddress}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.messageContainer}
          onPress={handleWebsitePress}
        >
          <Foundation name="web" size={34} color="white" />
          <Text style={styles.emailAddress}>{websiteUrl}</Text>
        </TouchableOpacity>



        {/* <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("ComplaintRises")}>
          <LinearGradient
            colors={["#13C39C", "#13C39C"]}
            style={styles.buttonBackground}
          >
            <Text style={styles.buttonText}>Rise Complaint</Text>
          </LinearGradient>
        </TouchableOpacity> */}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  centeredTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("5%"),
  },
  text: {
    color: "black",
    fontSize: 35,
  },
  image: {
    width: wp("80%"),
    height: hp("50%"),
    // marginTop: hp("4%"),
  },
  contactUsText: {
    color: "white",
    fontSize: wp("5%"),
    textDecorationLine: "underline",
    marginTop: hp("2%"),
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("2%"),
  },
  phoneNumber: {
    color: "white",
    fontSize: wp("5%"),
    marginLeft: wp("2%"),
  },
  writeUsText: {
    color: "white",
    fontSize: wp("5%"),
    textDecorationLine: "underline",
    marginTop: hp("2%"),
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("2%"),
  },
  emailAddress: {
    color: "white",
    fontSize: wp("5%"),
    marginLeft: wp("2%"),
  },
  // buttonContainer: {
  //   marginTop: hp("1%"),
  //   width: wp("80%"),
  //   borderRadius: wp("5%"),
  // },
  // buttonBackground: {
  //   padding: wp("3%"),
  //   borderRadius: wp("2%"),
  // },
  // buttonText: {
  //   color: "white",
  //   fontSize: wp("4%"),
  //   textAlign: "center",
  // },
  website: {
    color: "white",
    fontSize: wp("4%"),
    marginLeft: wp("2%"),
  },
});

