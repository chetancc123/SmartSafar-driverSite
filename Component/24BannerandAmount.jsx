import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EvilIcons, Entypo, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Bannerandamount({ navigation })  {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/maps.webp")}
          style={styles.Images}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["#DC52FF", "#390D5C"]}
            style={styles.background}
          >
            <View style={styles.innerView}>
              <View style={styles.imageContainer}>
               
              </View>
              <View style={styles.contentContainer}>
                {/* <Text style={styles.distanceText}>4.5 KM</Text> */}
                
                <TouchableOpacity style={styles.acceptButton} 
onPress={() => navigation.navigate("HomePage")}>
                  <Text style={styles.acceptButtonText}>
                    Go for nexet ride
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.iconContainer}>
               
                
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
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
    height: hp("45%"),
  },
  Images: {
    justifyContent: "flex-end",
    width: wp("100%"),
    height: hp("100%"),
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
    padding: wp("4%"),
  },
  imageContainer: {
    marginRight: wp("4%"),
  },
  image: {
    width: wp("15%"),
    height: wp("15%"),
    borderRadius: wp("7.5%"),
    marginBottom: hp("20"),
  },
  contentContainer: {
    flex: 1,
    marginLeft: wp("10"),
  },
  distanceText: {
    color: "white",
    fontSize: hp("3%"),
    marginBottom: hp("2%"),
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("1%"),
  },
  locationText: {
    color: "white",
    fontSize: hp("2%"),
    marginLeft: wp("3%"),
  },
  acceptButton: {
    backgroundColor: "#B652CF",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("3%"),
    borderRadius: wp("3%"),
    marginTop: hp("30%"),
    width:wp("80"),
    marginLeft:wp("-9")
  },
  acceptButtonText: {
    fontSize: hp("2%"),
    color: "white",
    paddingLeft:wp("20"),
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: hp("10%"),
    left: wp("-75%"),
    margin: wp("-3%"),
    // paddingRight:wp(5)
  },
});
