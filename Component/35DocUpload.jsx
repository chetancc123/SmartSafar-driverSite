import { LinearGradient } from "expo-linear-gradient";
import { url } from './config';
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  // SafeAreaView,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import TopSection from "./TopSection";

export default function DriverVerification({ navigation, route }) {
  const {userId} = route.params;
  const [DriverPhoto, setDriverPhoto] = useState({
    uri: '',
    name: '',
    type: ''
  });
  const [DriverDL, setDriverDL] = useState({
    uri: '',
    name: '',
    type: ''
  });
  const [DriverSign, setDriverSign] = useState({
    uri: '',
    name: '',
    type: ''
  });
  const [AadharCard, setAadharCard] = useState({
    uri: '',
    name: '',
    type: ''
  });
  const [Passbook, setPassbook] = useState({
    uri: '',
    name: '',
    type: ''
  });

  const handleUploadImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        console.log(result.assets[0].uri);
        let fileUri = result.assets[0].uri;
        let fileName = fileUri.split('/').pop();
        let fileType = result.assets[0].mimeType;

        setDriverPhoto({
          uri: fileUri,
          name: fileName,
          type: fileType,
        });
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleUploadImage1 = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        console.log(result.assets[0].uri);
        let fileUri = result.assets[0].uri;
        let fileName = fileUri.split('/').pop();
        let fileType = result.assets[0].mimeType;

        setDriverDL({
          uri: fileUri,
          name: fileName,
          type: fileType,
        });
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleUploadImage2 = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        console.log(result.assets[0].uri);
        let fileUri = result.assets[0].uri;
        let fileName = fileUri.split('/').pop();
        let fileType = result.assets[0].mimeType;

        setDriverSign({
          uri: fileUri,
          name: fileName,
          type: fileType,
        });
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleUploadImage3 = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        console.log(result.assets[0].uri);
        let fileUri = result.assets[0].uri;
        let fileName = fileUri.split('/').pop();
        let fileType = result.assets[0].mimeType;

        setAadharCard({
          uri: fileUri,
          name: fileName,
          type: fileType,
        });
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleUploadImage4 = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        console.log(result.assets[0].uri);
        let fileUri = result.assets[0].uri;
        let fileName = fileUri.split('/').pop();
        let fileType = result.assets[0].mimeType;

        setPassbook({
          uri: fileUri,
          name: fileName,
          type: fileType,
        });
      }
    } catch (error) {
      console.log(error)
    }
  }


  const UploadDoc = async () => {
    try {
      const formData = new FormData();
      formData.append('driverImage', DriverPhoto);
      formData.append('DL', DriverDL);
      formData.append('driverSignature', DriverSign);
      formData.append('adharCard', AadharCard);
      formData.append('dpassbook', Passbook);

      console.log(formData);

      const response = await fetch(`http://${url}:8080/driver/${userId}/upload-documents`, {
        method: 'POST',
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();
      console.log(data);
      Alert.alert("Success", "Files uploaded successfully!");
      navigation.navigate('Verification');
    } catch (error) {
      console.error('There was an error!', error);
      Alert.alert("Error", "Failed to upload files. Please try again later.");
    }
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#A7F57A", "#BDE6D9"]}
        style={styles.container}
      >
        <TopSection/>

        <View style={styles.teContainer}>
          <MaterialCommunityIcons
            name="message-question-outline"
            size={hp("5%")}
            color="black"
          />
          <Text> Files need to be upload</Text>
        </View>

        <View style={styles.btContainer}>
          <View style={styles.mContainer}>
            <View style={styles.divCon}>
              <TouchableOpacity onPress={() => console.log("Button pressed")}>
                <Text style={styles.diContainer}>Driver Photo </Text>
                <Text style={styles.driverIcon} onPress={handleUploadImage}>
                  Select
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mContainer}>
            <View style={styles.divCon}>
              <TouchableOpacity onPress={() => console.log("Button pressed")}>
                <Text style={styles.diContainer}>Driver DL* </Text>
                <Text style={styles.driverIcon} onPress={handleUploadImage1}>
                  Select
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mContainer}>
            <View style={styles.divCon}>
              <TouchableOpacity onPress={() => console.log("Button pressed")}>
                <Text style={styles.diContainer}>Driver Signture</Text>
                <Text style={styles.driverIcon} onPress={handleUploadImage2}>
                  Select
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mContainer}>
            <View style={styles.divCon}>
              <TouchableOpacity onPress={() => console.log("Button pressed")}>
                <Text style={styles.diContainer}>
                  Aadhar Card
                </Text>
                <Text style={styles.driverIcon} onPress={handleUploadImage3}>
                  Select
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mContainer}>
            <View style={styles.divCon}>
              <TouchableOpacity onPress={() => console.log("Button pressed")}>
                <Text style={styles.diContainer}>Add Passbook </Text>
                <Text style={styles.driverIcon} onPress={handleUploadImage4}>
                  Select
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.updateContainer}>
          <TouchableOpacity
            onPress={UploadDoc}
            style={styles.bContainer}
          >
            <Text style={styles.buttonupdate}> Upload </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    width: wp('100%'),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
    alignContent: 'center',
    alignSelf: 'center'
  },
  greeting: {
    marginLeft: wp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingText: {
    justifyContent: 'flex-end',
    fontSize: 20,
    color: 'white',
  },
  notificationIcon: {
    marginRight: 20,
  },
  settingsIcon: {
    marginRight: 20,
  },
  teContainer: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:hp("5%")
  },
  btContainer: {
    margin: 20,
    marginBottom:hp("10%"),
  },
  mContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: 10,
    marginBottom: hp("1%"),
  },
  diContainer: {
    fontSize: 26,
    color: 'black',
  },
  // driverIcon: {
  //   backgroundColor: '#8F2EB7',
  //   color: 'white',
  //   borderRadius: 5,
  //   paddingVertical: 5,
  //   paddingHorizontal: 10,
  // },
  updateContainer: {
    marginTop: hp("1%"),
    alignItems: 'center',
  },
  bContainer: {
    alignSelf: 'center',
    width: wp('50%'),
    backgroundColor: '#13C39C',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom:hp("3%")
  },
  buttonupdate: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
     
  },
});
