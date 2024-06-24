import React, { useState, useEffect } from "react";
import { url } from './config';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TopSection from "./TopSection";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileEdit({ navigation }) {
  const [image, setImage] = useState(null);
  const [UserId, setUserId] = useState("");

  const [data, setData] = useState({
    name: "",
    adharNo: "",
    dlNumber: "",
    panNo: "",
    phoneNo: "",
    altPhoneNumber: "",
    address: "",
  });

  const fetchUserIdAndData = async () => {
    try {
      const userId = await AsyncStorage.getItem("driverId");
      if (userId) {
        setUserId(userId);
        fetchDriverProfile(userId);
      } else {
        console.error("No userId found in AsyncStorage");
      }
    } catch (error) {
      console.error("Error retrieving userId from AsyncStorage:", error);
    }
  };

  useEffect(() => {
    fetchUserIdAndData();
  }, []);

  const fetchDriverProfile = async (userId) => {
    try {
      const response = await fetch(
        `http://${url}:8080/driver/get-driver-profile/${userId}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
        setImage(jsonData.profileImgLink);
      } else {
        throw new Error("Failed to fetch profile");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const handleChange = (key, value) => {
    setData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleInputSubmit = async () => {
    try {
      const formData = new FormData();

      const driverDataJson = {
        name: data.name,
        address: data.address,
        panNo: data.panNo,
        dlNumber: data.dlNumber,
        adharNo: data.adharNo,
      };

      formData.append("DriverDataJson", JSON.stringify(driverDataJson));

      if (image) {
        formData.append("profileImg", {
          uri: image,
          name: image.split("/").pop(),
          type: "image/jpeg",
        });
      }

      const response = await fetch(
        `http://${url}:8080/driver/edit-driver-profile/${UserId}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      alert("Profile updated successfully!");
      fetchDriverProfile(UserId);
    } catch (error) {
      console.error("There was an error:", error);
      alert("Failed to update profile. Please try again later.");
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <LinearGradient
            colors={["#A7F57A", "#BDE6D9"]}
            style={styles.background}>
            <TopSection navigation={navigation}/>
            <View style={{ alignItems: "center", marginTop: hp('5%') }}>
              <View
                style={{
                  width: wp("32%"),
                  height: wp("32%"),
                  borderRadius: wp("50%"),
                }}
              >
                <Image
                  source={{ uri: image || data.profileImgLink }}
                  style={{
                    width: "80%",
                    height: "80%",
                    borderRadius: wp("50%"),
                    bottom: hp("4%"),
                  }}
                />
                <AntDesign
                  name="edit"
                  onPress={pickImage}
                  size={wp("5%")}
                  color="#fff"
                  bottom={hp("6%")}
                  left={hp("8%")}
                />
              </View>
            </View>
            <View style={styles.textContainer}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.bank1}>Name</Text>
                <View style={styles.bankContainer}>
                  <TextInput
                    style={styles.input}
                    value={data.name}
                    onChangeText={(text) => handleChange("name", text)}
                    placeholder="Enter Name"
                  />
                </View>
              </View>
              <View style={styles.horizontalLine2} />
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.bank1}>Aadhar/UID</Text>
                <View style={styles.bankContainer}>
                  <TextInput
                    inputMode="numeric"
                    style={styles.input}
                    value={data.adharNo?.toString()}
                    onChangeText={(text) => handleChange("adharNo", text)}
                    placeholder="Enter Aadhar/UId"
                  />
                </View>
              </View>
              <View style={styles.horizontalLine2} />
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.bank1}>Dl Number</Text>
                <View style={styles.bankContainer}>
                  <TextInput
                    style={styles.input}
                    value={data.dlNumber}
                    onChangeText={(text) => handleChange("dlNumber", text)}
                    placeholder="Enter Dl Number"
                  />
                </View>
              </View>
              <View style={styles.horizontalLine2} />
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.bank1}>Address : </Text>
                <View style={styles.bankContainer}>
                  <TextInput
                    multiline
                    style={styles.input}
                    value={data.address}
                    onChangeText={(text) => handleChange("address", text)}
                    placeholder="Enter Address"
                  />
                </View>
              </View>
              <View style={styles.horizontalLine2} />
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.bank1}>Phone Number</Text>
                <View style={styles.bankContainer}>
                  <TextInput
                    style={styles.input}
                    value={data.phoneNo}
                    onChangeText={(text) => handleChange("phoneNo", text)}
                    placeholder="Enter Phone Number"
                  />
                </View>
                <TouchableOpacity style={styles.icon}>
                  <AntDesign name="edit" size={wp("5%")} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.horizontalLine2} />
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.bank1}>Email :</Text>
                <View style={styles.bankContainer}>
                  <TextInput
                    style={styles.input}
                    value={data.email}
                    onChangeText={(text) => handleChange("email", text)}
                    placeholder="Your Email"
                  />
                </View>
                <TouchableOpacity style={styles.icon}>
                  <AntDesign name="edit" size={wp("5%")} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            
            <TouchableOpacity onPress={handleInputSubmit} style={styles.Save}>
            <Text style={styles.saveButtonText}>SAVE</Text>
            </TouchableOpacity>
            
          </LinearGradient>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  background: {
    flex: 1,
  },
  topBox: {
    borderRadius: wp("4%"),
    height: hp("20%"),
    width: wp("90%"),
    marginTop: hp("5%"),
  },
  textContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    width: wp("90%"),
    backgroundColor: "white",
    padding: wp("3%"),
    borderRadius: wp("3%"),
    alignSelf: 'center',
  },
  horizontalLine2: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: hp("1%"),
    width: wp("80%"),
    alignSelf: "center",
  },
  input: {
    width: wp("100%"),
    height: hp("5%"),
    borderColor: "grey",
  },
  bank1: {
    fontWeight: "bold",
    fontSize: 20,
    margin: wp("2%"),
    alignSelf: 'center',
    width: wp("20%"),
  },
  bankContainer: {
    justifyContent: 'space-between',
    marginLeft: wp("8%"),
    width: wp("43%"),
    marginTop: wp("2%"),
  },
  icon: {
    marginTop: wp("5%"),
    width: wp("10%"),
  },
  saveButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
  },
  Save: {
    justifyContent: "center",
    marginTop: hp("5%"),
    backgroundColor: "#13C39C",
    height: hp("5%"),
    width: wp("55%"),
    borderRadius: 5,
    alignSelf: "center",
  },
});
