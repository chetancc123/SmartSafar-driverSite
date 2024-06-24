import React, { useEffect, useState } from "react";
import { url } from './config';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function TopSection({ navigation }) {
  const [name, setName] = useState("");
  const [profileImgLink, setProfilePic] = useState("");

  const getData = (userId) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(`http://${url}:8080/driver/get-driver-profile/${userId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);  // Log the API response for debugging
        setName(result.name);
        setProfilePic(result.profileImgLink);
      })
      .catch((error) => console.error('Error fetching profile data:', error));
  };

  const fetchUserIdAndData = async () => {
    try {
      const userId = await AsyncStorage.getItem('driverId');
      if (userId) {
        getData(userId);
      } else {
        console.error('No userId found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error retrieving userId from AsyncStorage:', error);
    }
  };
  useEffect(() => {

    fetchUserIdAndData();
  }, []);
  return (
    <SafeAreaView style={{}}>
      <LinearGradient
        colors={["#A7F57A", "#BDE6D9"]}
        style={styles.navContainer2}
      >
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              resizeMode="cover"
              source={{
                uri: profileImgLink || "https://via.placeholder.com/150",
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>
              Hey there, {"\n"}{name} 👋
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
              <Icon
                name="bell"
                style={styles.icon}
                size={hp("4%")}
                color="black"
                bottom={hp("5%")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <Icon
                name="cog"
                size={hp("4%")}
                color="black"
                style={styles.icon}
                bottom={hp("5%")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navContainer2: {
    width: wp("100%"),
    height: hp("15%"),
    paddingHorizontal: wp("5%"),
    paddingTop: hp("2%"),
    justifyContent: "space-between",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  greeting: {
    marginLeft: wp("5%"),
  },
  greetingText: {
    fontSize: hp("2.5%"),
    color: "black",
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
    marginTop: hp("-5%"),
  },
});
