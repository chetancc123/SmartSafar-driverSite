import React from 'react';
// import { LinearGradient } from 'expo-linear-gradient';
// import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, ImageBackground, TouchableOpacity,Text,Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome,Entypo,Ionicons } from '@expo/vector-icons';

export default function Document({ navigation })  {
  return (
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
        <View style={styles.iconrow}>
          {/* Back Button */}
          
          <TouchableOpacity style={styles.iconContainer1}>
            <FontAwesome name="arrow-left" size={wp('5%')} color="white" />
          </TouchableOpacity>

          {/* Notification and Setting Icons */}
          <View style={styles.iconContainer2}>
          <TouchableOpacity>
            <FontAwesome name="bell" size={wp('7%')} color="white" style={styles.bellicon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="cog" size={wp('7%')} color="white" style={styles.cogicon} />
          </TouchableOpacity>
          </View>
         </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
            {/* Profile Pic */}
            <Image source={require('../assets/Ellipse 8.png')} style={styles.profilePic}>
              {/* ID Card Icon */}
              
            </Image>
            {/* Profile Text */}
            <View style={styles.textgroup}>
            <Text style={styles.profileText1}>Hey There,</Text>
            <Text style={styles.profileText2}>Chetan 👋</Text>
            </View>
            <TouchableOpacity style={styles.idCardIcon}>
                <FontAwesome name="id-card" size={wp('7%')} color="white" />
              </TouchableOpacity>
          </View>

        <View style={styles.topview}>
          <Text style={styles.toptext}>
            Document Deatils Uploaded
          </Text>
        </View>

          </LinearGradient>
        </View>

        {/* Middle Section*/}
        <View style={styles.middlesection}>
        <LinearGradient colors={['#DC52FF', '#430970', '#390D5C']} style={styles.bg}>
          <View>
              <Ionicons name="document" size={40} color="white" />
          </View>
          <View style={styles.bar}>
              <Text style={{ color: 'white', fontSize: 20 }}>Driver DL</Text>
              <Text style={{ color: 'white' }}>92.6 KB</Text>
          </View>
          <TouchableOpacity>
              <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient colors={['#DC52FF', '#430970', '#390D5C']} style={styles.bg}>
          <View>
              <Ionicons name="document" size={40} color="white" />
          </View>
          <View style={styles.bar}>
              <Text style={{ color: 'white', fontSize: 20 }}>Vehical Pic</Text>
              <Text style={{ color: 'white' }}>92.6 KB</Text>
          </View>
          <TouchableOpacity>
              <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient colors={['#DC52FF', '#430970', '#390D5C']} style={styles.bg}>
          <View>
              <Ionicons name="document" size={40} color="white" />
          </View>
          <View style={styles.bar}>
              <Text style={{ color: 'white', fontSize: 20 }}>Vehical RC</Text>
              <Text style={{ color: 'white' }}>92.6 KB</Text>
          </View>
          <TouchableOpacity>
              <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient colors={['#DC52FF', '#430970', '#390D5C']} style={styles.bg}>
          <View>
              <Ionicons name="document" size={40} color="white" />
          </View>
          <View style={styles.bar}>
              <Text style={{ color: 'white', fontSize: 20, }}>Driver Signature</Text>
              <Text style={{ color: 'white' }}>92.6 KB</Text>
          </View>
          <TouchableOpacity>
              <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient colors={['#DC52FF', '#430970', '#390D5C']} style={styles.bg}>
          <View>
              <Ionicons name="document" size={40} color="white" />
          </View>
          <View style={styles.bar}>
              <Text style={{ color: 'white', fontSize: 20 }}>Driver Address Proof</Text>
              <Text style={{ color: 'white' }}>92.6 KB</Text>
          </View>
          <TouchableOpacity>
              <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </LinearGradient>
        </View>

        {/* Bottom section */}
        <View style={styles.bottomsection}>
          <Text style={styles.bottomtext1}>Successfully Uploaded Documents</Text>
          <Text style={styles.bottomtext1}>Wait for Admin Verification</Text>
        </View>

        {/* Bottom Button */}
        <View style={styles.bottombutton}>
        <TouchableOpacity style={styles.button}  
onPress={() => navigation.navigate("VerificationPending")}
>
           <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        </View>
        
      </LinearGradient>
    </View>
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
    borderBottomLeftRadius:wp('10%') , 
    borderBottomRightRadius: wp('10%'),
  },
  gradient:{
    borderBottomLeftRadius: wp('10%'), 
    borderBottomRightRadius: wp('10%'),
    height:hp('30%'),
  },
  iconrow:{
    flexDirection: 'row',
    marginTop:hp('5%'),
  },
  iconContainer1: {
    padding: wp('2%'),
    marginLeft:wp('5%'),
  },
  iconContainer2: {
    padding: wp('2%'),
    marginLeft:wp('60%'),
    flexDirection: 'row',
    right:wp('5%'),
  },
  bellicon:{
    padding:wp('3%'),
  },
  cogicon:{
    padding: wp('3%'),
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:hp('7%'),
    marginHorizontal:hp('3%'),
    bottom:hp('3%'),
  },
  profilePic: {
    width: wp('22%'),
    height: wp('22%'),
    borderRadius: wp('7%'),
    overflow: 'hidden',
    marginLeft: wp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  idCardIcon: {
    position: 'absolute',
    bottom:hp('5%'),
    right:wp('3%'),
  },
  textgroup:{
    flexDirection: 'column',
    marginLeft:wp('10%'),
  },
  
  profileText1: {
    color: 'white',
    fontSize: wp('5%'),
    
  },
  profileText2: {
    color: 'white',
    fontSize: wp('6%'),
  },
  topview:{
    alignItems:'center',
    fontWeight:'bold',
    bottom:hp('8%'),
  },
  toptext:{
    fontSize:26,
    color:'white',
  },
  middlesection:{
    alignItems:'center',
    marginTop:hp('2%'),
  },
  bg: {
    flexDirection: 'row',
    marginTop: hp('1%'),
    alignItems: 'center',
    justifyContent:'space-evenly',
    height: hp('9%'),
    width: wp('90%'),
    borderRadius: 20,
},
bottomsection:{
  alignItems:'center',
  marginTop:hp('2%'),
},
bottomtext1:{
  fontSize:20,
  fontWeight:'bold',
  color:'gold',
  textDecorationLine:'underline',
},
bottombutton: {
  alignItems: 'center', 
  top:hp('3%'),

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
