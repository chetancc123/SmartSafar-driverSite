import * as React from "react";
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
 
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export default function ChargingPoint({ navigation })  {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#A7F57A", "#BDE6D9"]}
        style={styles.container}
      >
        <View>
          <LinearGradient
            colors={["#8E288E", "#402775"]}
            style={styles.navContainer2}
          >
            <View style={styles.header}>
              <TouchableOpacity>
                <Image
                  resizeMode="cover"
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9c59ce7e5619d5786d53ef0f0515730b784afcaa6d3f9c71ebd0b0c91af210b?apiKey=6e819305aff14a71a524c5abb40332f8&",
                  }}
                  style={styles.avatar}
                />
              </TouchableOpacity>
              <View style={styles.greeting}>
                <Text style={styles.greetingText}>
                  Hey there, {"\n"} Rupesh Sahu👋
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.iconContainer}>
                <TouchableOpacity>
                  <Icon
                    name="bell"
                    style={styles.icon}
                    size={hp("4%")}
                    color="white"
                    
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="cog"
                    size={hp("4%")}
                    color="white"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.btContainer}>
              <TouchableOpacity style={styles.btContainer1}>
                <Entypo
                  name="wallet"
                  size={hp("5%")}
                  color="gold"
                  style={styles.walletIcon}
                />
                <Text style={styles.walletText}>Ride Wallet Balance</Text>
                <Text style={styles.walletAmount}>00.00</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>

          <View style={styles.driverContainer}>
            <View style={styles.mainhead}>
            <FontAwesome6 name="charging-station" size={30} color="black" />
              <Text>
                CHARGING POINT 

              </Text>
              
            </View>
            
            

            <View style={styles.menuItem} >
              <Text style={{fontSize:20,fontWeight:"500"}}>YOUR NEAREST CHARGING STATION !</Text>
               
            </View>
          
             
            <View style={styles.menuItem} >
              <Text style={styles.menuText}>Hub Name</Text>
              <Text style={{marginLeft:wp("5%"),fontSize:18}} >Distance</Text>
              
            </View>
           
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: "100%",
              }}
            />
             
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    left:0,
    right:0,
    top:0,
    position:"absolute",
    height:hp("110%"),
    width:wp("100%"),
  },
  navContainer2: {
    width: wp("100%"),
    height: hp("30%"),
    paddingHorizontal: wp("5%"),
    paddingTop: hp("5%"),
    justifyContent: "space-between",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    // marginTop:hp("1")
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
    marginTop:hp("2%"),
  },
  icon: {
    marginHorizontal: wp("2%"),
    marginTop: hp("-10%"),
  },
  icon1: {
    marginHorizontal: wp("2%"),
    marginTop: hp("-5%"),
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
    marginTop: hp("6%"),
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
    marginTop: hp("3%"),
    width: wp("85%"),
    backgroundColor: "white",
    padding: wp("6%"),
    borderRadius: hp("2%"),
    height: hp("60%"),
    marginLeft: wp("7%"),
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: hp("1%"),
  },
  menuText: {
    flex: 1,
    fontSize: 17,
    color: "black",
  },
  mainhead:{
    fontSize: hp("10%"),
    fontWeight:"500",
    color: "black",
    paddingBottom:wp("3%"),
    alignItems:"center"


  },
  menuIcon: {
    marginRight: wp("2%"),
  },
  sconatiner: {
    color: "#cecece", // Text color
    fontSize: 12,
  },
});