import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";


export default function Registration() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* Background Gradient */}
        <LinearGradient colors={['#DC52FF', '#DC52FF', '#430970', '#390D5C']} style={styles.background}>
          {/* Top Right Background Image */}
          <ImageBackground source={require('../assets/tleft.png')} style={styles.topRightImage} />

          {/* Bottom Left Background Image */}
          <ImageBackground source={require('../assets/bright.png')} style={styles.bottomLeftImage} />

          {/* Top Section */}
          <View style={styles.topSection}>
            <LinearGradient colors={['#DC52FF', '#430970']} style={styles.gradient}>
              {/* Profile Text */}
              <View style={styles.textgroup}>
                <Text style={styles.profileText}>RIDO</Text>
              </View>

              {/* Profile Section */}
              <View style={styles.profileSection}>
                {/* Profile Pic */}
                <Image source={require('../assets/Ellipse 8.png')} style={styles.profilePic} />
                <TouchableOpacity>
                  <Feather name="edit" size={20} color="white" style={styles.editicon} />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>

          {/* Middle Section */}
          <View style={styles.middleSection}>
            {/* Form */}
            <View style={styles.formRow}>
              <Text style={styles.label}>Full Name:</Text>
              <TextInput style={styles.input} placeholder="Enter your full name" />
            </View>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                width: "100%",
                marginBottom: hp('1%'),
              }}
            />

            <View style={styles.formRow}>
              <Text style={styles.label}>User Name:</Text>
              <TextInput style={styles.input} placeholder="Enter your User Name" />
            </View>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                width: "100%",
                marginBottom: hp('1%'),
              }}
            />
            <View style={styles.formRow}>
              <Text style={styles.label}>Email:</Text>
              <TextInput style={styles.input} placeholder="Enter your email address" />
            </View>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                width: "100%",
                marginBottom: hp('1%'),
              }}
            />
            <View style={styles.formRow}>
              <Text style={styles.label}>Phone:</Text>
              <TextInput style={styles.input} placeholder="Enter your phone number" keyboardType="phone-pad" />
            </View>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                width: "100%",
                marginBottom: hp('1%'),
              }}
            />
            <View style={styles.formRow}>
              <Text style={styles.label}>City:</Text>
              {/* Implement dropdown menu for selecting city */}
              <View style={styles.dropdownContainer}>
                <TextInput style={styles.dropdownInput} placeholder="Select city" keyboardType="phone-pad" />
              </View>
            </View>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                width: "100%",
                marginBottom: hp('1%'),
              }}
            />
            <View style={styles.formRow}>
              <Text style={styles.label}> Set Password:</Text>
              <TextInput style={styles.input} placeholder="-----------" secureTextEntry={true} />
            </View>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                width: "100%",
                marginBottom: hp('1%'),
              }}
            />
            <View style={styles.formRow}>
              <Text style={styles.label}>Confirm Password:</Text>
              <TextInput style={styles.input} placeholder="-----------" secureTextEntry={true} />
            </View>
          </View>

          {/* Bottom Button */}
          <View style={styles.bottombutton}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Go for Document Uploading</Text>
            </TouchableOpacity>
          </View>

        </LinearGradient>
      </View>
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
    left: 0,
    width: wp('75%'),
    height: hp('40%'),
  },
  bottomLeftImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: wp('75%'),
    height: hp('40%'),
  },
  topSection: {
    borderBottomLeftRadius: wp('10%'),
    borderBottomRightRadius: wp('10%'),
  },
  gradient: {
    borderBottomLeftRadius: wp('10%'),
    borderBottomRightRadius: wp('10%'),
    height: hp('22%'),
  },
  profileSection: {
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  profilePic: {
    width: wp('24%'),
    height: wp('24%'),
    borderRadius: wp('7%'),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editicon: {
    bottom: hp('4%'),
    left: wp('10%'),
  },
  textgroup: {
    alignItems: 'center',
    marginTop: hp('8%'),
  },
  profileText: {
    color: 'white',
    fontSize: wp('8%'),
  },
  middleSection: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: hp('6%'),
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    width: wp("90%"),
    height: hp("59%"),
    backgroundColor: "white",
    paddingTop: hp('2%'),
    borderRadius: 10,
    marginHorizontal: hp('3%'),
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
    width: wp('80%'),
  },
  label: {
    color: 'black',
    fontSize: wp('3%'),
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'lightgrey',
    width: wp('53%'),
    height: hp('6%'),
    borderRadius: 5,
    paddingHorizontal: wp('2%'),
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    width: wp('55%'),
    height: hp('6%'),
    borderRadius: 5,
    paddingHorizontal: wp('3%'),
  },
  dropdownInput: {
    flex: 1,
  },
  dropdownIconContainer: {
    padding: wp('2%'),
  },
  bottombutton: {
    alignItems: 'center',
    top: hp('3%'),
  },
  button: {
    width: '95%', // Sets the width to 95% of the parent container
    backgroundColor: '#DC52FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center', // Centers the text horizontally
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },


});
