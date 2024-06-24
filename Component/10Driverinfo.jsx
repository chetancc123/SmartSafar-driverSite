import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  // SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { url } from './config';
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Driverinfo({ navigation, route }) {
  const { userId } = route.params;
  const [name, setName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [dlNo, setDlNo] = useState("");
  const [panNo, setPanNo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [altPhoneNumber, setAltPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [profileImg, setProfileImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      console.log("Selected Image Result:", result);
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    const formData = new FormData();

    if (profileImg) {
      const uriParts = profileImg.split('/');
      const fileName = uriParts.pop();

      // Append the image to FormData with the extracted filename
      formData.append("profileImg", { uri: profileImg, name: fileName, type: "image/jpeg" });
    } else {
      formData.append("profileImg", ""); // Ensure profileImg part is always present
    }

    // Append other fields as JSON string
    formData.append(
      "DriverDataDto",
      JSON.stringify({
        name: name,
        phoneNo: phoneNumber,
        address: address,
        altPhoneNumber: altPhoneNumber,
        panNo: panNo,
        dlNumber: dlNo,
        adharNo: aadhar,
        accountHolderName: accountHolderName,
        accountNo: accountNumber,
        ifsc: ifscCode,
        branchName: branchName,
      })
    );
    console.log(formData);
    const requestOptions = {
      method: "POST",
      body: formData,
      // Remove the Content-Type header to let the browser set it automatically
    };

    console.log("userId", route.params);

    try {
      const response = await fetch(
        `http://${url}:8080/driver/add-driver-information/${userId}`,
        requestOptions
      );
      const result = await response.text();
      console.log(result);
      Alert.alert("Success", "Driver information saved successfully");
      navigation.navigate('documentupload', { userId: userId });
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to save driver information");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#A7F57A", "#BDE6D9"]} style={styles.background}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.headBox}>
            <View style={styles.profileImageContainer}>
              {profileImg ? (
                <Image source={{ uri: profileImg }} style={styles.profileImage} />
              ) : (
                <Image
                  source={require("../assets/Ellipse 8.png")}
                  style={styles.profileImage}
                />
              )}
              <TouchableOpacity
                onPress={pickImage}
                style={styles.editIconContainer}
              >
                <AntDesign
                  name="edit"
                  size={24}
                  color="black"
                  style={styles.editIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.textContainer}>
              <View style={styles.inputRow}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  placeholder="Name"
                />
              </View>

              <View style={styles.inputRow}>
                <Text style={styles.label}>Aadhar Number</Text>
                <TextInput
                  style={styles.input}
                  value={aadhar}
                  onChangeText={setAadhar}
                  placeholder="Aadhar"
                />
              </View>

              <View style={styles.inputRow}>
                <Text style={styles.label}>DL No.</Text>
                <TextInput
                  style={styles.input}
                  value={dlNo}
                  onChangeText={setDlNo}
                  placeholder="DL No."
                />
              </View>

              <View style={styles.inputRow}>
                <Text style={styles.label}>PAN No.</Text>
                <TextInput
                  style={styles.input}
                  value={panNo}
                  onChangeText={setPanNo}
                  placeholder="PAN No."
                />
              </View>

              <View style={styles.inputRow}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  placeholder="Phone Number"
                />
              </View>

              <View style={styles.inputRow}>
                <Text style={styles.label}>Alt Phone Number</Text>
                <TextInput
                  style={styles.input}
                  value={altPhoneNumber}
                  onChangeText={setAltPhoneNumber}
                  placeholder="Alt Phone Number"
                />
              </View>

              <View style={styles.inputRow}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                  style={styles.input}
                  value={address}
                  onChangeText={setAddress}
                  placeholder="Address"
                />
              </View>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.bankHeader}>Bank Account</Text>

              <View style={styles.inputRow}>
                <Text style={styles.label}>Account Number</Text>
                <TextInput
                  style={styles.input}
                  value={accountNumber}
                  onChangeText={setAccountNumber}
                  placeholder="Account Number"
                />
              </View>

              <View style={styles.inputRow}>
                <Text style={styles.label}>IFSC Code</Text>
                <TextInput
                  style={styles.input}
                  value={ifscCode}
                  onChangeText={setIfscCode}
                  placeholder="IFSC Code"
                />
              </View>

              <View style={styles.inputRow}>
                <Text style={styles.label}>Account Holder Name</Text>
                <TextInput
                  style={styles.input}
                  value={accountHolderName}
                  onChangeText={setAccountHolderName}
                  placeholder="Account Holder Name"
                />
              </View>

              <View style={styles.inputRow}>
                <Text style={styles.label}>Branch Name</Text>
                <TextInput
                  style={styles.input}
                  value={branchName}
                  onChangeText={setBranchName}
                  placeholder="Branch Name"
                />
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1
  },
  scrollViewContent: {
    alignItems: "center",
  },
  headBox: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    backgroundColor: "blue",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  editIcon: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 5,
  },
  formContainer: {
    width: "90%",
  },
  textContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
    width: "30%",
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    fontSize: 15,
  },
  bankHeader: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 15,
    marginTop: 20,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    width: wp("80%"),
    height: hp("6%"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("2%"),
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
