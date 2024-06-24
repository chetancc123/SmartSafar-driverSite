import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";

const Sucess = () => {
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient colors={['#DC52FF', '#DC52FF', '#430970', '#390D5C']} style={styles.background}>
        
        {/* Top Right Background Image */}
        <ImageBackground source={require('../assets/tright.png')} style={styles.topRightImage} />

        {/* Bottom Left Background Image */}
        <ImageBackground source={require('../assets/bleft.png')} style={styles.bottomLeftImage} />

        {/* Centered Text */}
        <View style={styles.centeredTextContainer}>
          <Text style={styles.centeredText}>
            You have successfully changed your 
            <Text style={styles.differentColorText}> Password</Text>
          </Text>
          
          {/* Linked Text at the Bottom */}
          <TouchableOpacity style={styles.linkTextContainer} onPress={() => console.log('Navigate to other page')}>
            <Text style={styles.linkText}>Redirect to login page</Text>
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
  centeredTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:hp('2%'),
  },
  centeredText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
  },
  differentColorText: {
    color: 'white',
  },
  linkTextContainer: {
    position: 'absolute',
    bottom: 35,
  },
  linkText: {
    fontSize: 16,
    color: 'gold',
  },
});

export default Sucess;
