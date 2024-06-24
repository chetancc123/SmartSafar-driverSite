import { React, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome3({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient colors={["#A7F57A", "#BDE6D9"]} style={styles.background}>

        {/* Top Right Background Image */}
        {/* <ImageBackground source={require('../assets/tright.png')} style={styles.topRightImage} /> */}

        {/* Bottom Left Background Image */}
        {/* <ImageBackground source={require('../assets/bleft.png')} style={styles.bottomLeftImage} /> */}

        {/* Top Section */}
        <View style={styles.topSection}>
          <Image source={require('../assets/notify.png')} />
        </View>

        {/* Middle Section */}
        <View style={styles.otpContainer}>
          <Text style={styles.text1}>Allow Notification</Text>
          <Text style={styles.text2}>You are notify whenever you get near cab booking request</Text>

        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginPage")}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  topRightImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: wp('90%'),
    height: hp('39%'),
  },
  bottomLeftImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: wp('80%'),
    height: hp('41%'),
  },
  topSection: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: "center",
    marginTop: hp('15%'),
  },

  otpContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: wp('10%'),
    marginTop: hp('7%'),

  },
  text1: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 20,
    color: 'white',
    marginTop: hp('3%'),
    textAlign: 'center',
  },


  bottomSection: {
    alignItems: 'center',
    marginTop: hp('18%'),
  },
  button: {
    backgroundColor: '#13C39C',
    borderRadius: 10,
    width: wp('85%'),
    height: hp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('2%'),
  },
  buttonText: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: 'white',
  },

});
