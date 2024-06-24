import React, { useEffect } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Welcome1'); // Navigate to Welcome1 after 1 second
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts before the timer expires
  }, []); // Run this effect only once after the component mounts

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={["#A7F57A", "#BDE6D9"]}
          style={styles.background}
        >
          <View style={{ flex: 1 }}>
            <Image
              source={require("../assets/Ellipse.png")}
              style={{ alignSelf: "flex-end" }}
            />
            <View style={{ margin: wp("25%"), bottom: hp('8%'), }}>
              <Text
                style={{
                  fontSize: 48,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "white",
                }}
              >
                Smart Safar
              </Text>
              <Text
                style={{ textAlign: "center", fontSize: 16, color: "white" }}
              >
                Safety || Sharing || Ride
              </Text>
            </View>
            <Image
              source={require("../assets/Group 1 (1).png")}
              style={{ top: wp('8%') }}
            />
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
  background: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    height: hp('100%')
    // bottom: 0,
  },
});
