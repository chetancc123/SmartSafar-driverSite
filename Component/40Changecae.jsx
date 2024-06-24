import React, { useState, useEffect } from "react";
import { url } from './config';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import TopSection from "./TopSection";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ChangeCar({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setReason] = useState("");
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);
  const [returnCarModalVisible, setReturnCarModalVisible] = useState(false);
  const [conditionInputVisible, setConditionInputVisible] = useState(true);
  const [conditionInputValue, setConditionInputValue] = useState("");
  const [returnMessage, setReturnMessage] = useState("");
  const [selectedColor, setSelectedColor] = useState("green");
  const [UserId, setUserId] = useState("");


  const handleReturnCar = () => {
    setReturnCarModalVisible(true);
  };

  const fetchUserIdAndData = async () => {
    try {
      const userId = await AsyncStorage.getItem("driverId");
      // console.log(userId);
      if (userId) {
        setUserId(userId);
        // fetchDriverProfile(userId);
      } else {
        console.error("No userId found in AsyncStorage");
      }
    } catch (error) {
      console.error("Error retrieving userId from AsyncStorage:", error);
    }
  };


  const handleSubmit = async () => {
    try {
      if (!message) {
        Alert.alert("Error", "Please provide a reason for changing the car.");
        return;
      }

      const url = `http://${url}:8080/driver/repairVehicle/${UserId}?message=${encodeURIComponent(message)}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response status:", response.status); // Log the response status

      if (response.ok) {
        Alert.alert(
          "Success",
          "Your car change request has been submitted successfully.",
          [
            {
              text: "OK",
              onPress: () => {
                setConfirmationModalVisible(true);
                setModalVisible(false); // Close the modal after successful submission
              },
            },
          ]
        );
      } else {
        console.log("Response data:", await response.text()); // Log the response data
        Alert.alert("Error", "Failed to submit the car change request.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      Alert.alert("Error", "Failed to send message. Please try again.");
    }
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    let conditionValue;
    switch (color) {
      case "red":
        conditionValue = "WORST";
        break;
      case "yellow":
        conditionValue = "NORMAL";
        break;
      case "green":
        conditionValue = "GOOD";
        break;
      default:
        conditionValue = "";
    }
    setConditionInputValue(conditionValue);
    setConditionInputVisible(color === "red" || color === "yellow" || color === "green");
  };

  const handleSubmitReturnCar = async () => {
    try {
      const formdata = new FormData();
      formdata.append("carCondition", conditionInputValue);
      formdata.append("message", returnMessage); // Include the return message

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      const response = await fetch(
        `http://${url}:8080/driver/returnCar/${UserId}`,
        requestOptions
      );
      console.log(response);
      console.log("Response status:", response.status); // Log the response status

      if (response.status == 200) {
        Alert.alert("Success", "Car returned successfully.", [
          {
            text: "OK",
            onPress: () => setConfirmationModalVisible(true),
          },
        ]);
      } else {
        // console.log("Response data:", await response.text()); // Log the response data
        Alert.alert("Error", "Failed to return car.");
      }

      setReturnCarModalVisible(false);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to return car. Please try again.");
    }
  };

  useEffect(() => {
    fetchUserIdAndData();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#A7F57A", "#BDE6D9"]}
        style={styles.container}
      >
        <TopSection navigation={navigation} />

        <View style={styles.driverContainer}>
          <View style={styles.mainhead}>
            <FontAwesome name="car" size={45} color="black" />
          </View>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginVertical: 10,
              width: "100%",
            }}
          />
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.menuText}>Change Car</Text>
            <FontAwesome name="exchange" size={30} color="black" />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View style={styles.modalOverlay} />
            </TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <FontAwesome name="close" size={30} color="black" />
              </TouchableOpacity>
              <Text style={styles.modalHeader}>Reason for Changing Car</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setReason(text)}
                value={message}
                multiline
              />
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={confirmationModalVisible}
            onRequestClose={() => setConfirmationModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setConfirmationModalVisible(false)}
              >
                <FontAwesome name="close" size={30} color="black" />
              </TouchableOpacity>
              {/* <Image
                source={require("../assets/well.gif")} // Replace with the path to your image
                style={styles.image1}
              /> */}
              <Text style={styles.confirmationText}>
                Your car change request has been noted. The hub will notify
                you.
              </Text>
            </View>
          </Modal>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginVertical: 10,
              width: "100%",
            }}
          />
          <TouchableOpacity style={styles.menuItem} onPress={handleReturnCar}>
            <Text style={styles.menuText}>Return Car</Text>
            <Fontisto name="arrow-return-left" size={30} color="black" />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={returnCarModalVisible}
            onRequestClose={() => setReturnCarModalVisible(false)}
          >
            <View style={styles.returnCarModalContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setReturnCarModalVisible(false)}
              >
                <FontAwesome name="close" size={30} color="black" />
              </TouchableOpacity>
              <Text>Car condition</Text>
              <View style={styles.conditionBorder}>
                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    selectedColor === "red" && styles.selected,
                  ]}
                  onPress={() => handleColorChange("red")}
                >
                  <FontAwesome name="circle" size={24} color="red" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    selectedColor === "yellow" && styles.selected,
                  ]}
                  onPress={() => handleColorChange("yellow")}
                >
                  <FontAwesome name="circle" size={24} color="yellow" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    selectedColor === "green" && styles.selected,
                  ]}
                  onPress={() => handleColorChange("green")}
                >
                  <FontAwesome name="circle" size={24} color="green" />
                </TouchableOpacity>
                {conditionInputVisible && (
                  <TextInput
                    style={styles.input1}
                    placeholder="Enter condition"
                    value={conditionInputValue}
                    onChangeText={setConditionInputValue}
                  />
                )}
              </View>
              <TextInput
                style={styles.input1}
                placeholder="Enter message"
                value={returnMessage}
                onChangeText={setReturnMessage}
                multiline
              />
              <TouchableOpacity
                onPress={handleSubmitReturnCar} // Call API on submit
                style={styles.submitbutton1}
              >
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={confirmationModalVisible}
            onRequestClose={() => setConfirmationModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setConfirmationModalVisible(false)}
              >
                <FontAwesome name="close" size={30} color="black" />
              </TouchableOpacity>
              <Image source={require("../assets/well.gif")} style={styles.newImage} />
              <Text style={styles.newModalText}>
                Your car change request has been noted. The hub will notify
                you.
              </Text>
            </View>
          </Modal>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginVertical: 10,
              width: "100%",
            }}
          />
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
    padding: wp('2.5%'),
    alignContent: 'center',
    alignSelf: 'center',
  },
  greeting: {
    flex: 1,
    marginLeft: wp('5%'),
  },
  greetingText: {
    fontSize: hp('2.5%'),
    color: "white",
  },
  driverContainer: {
    width: wp('85%'),
    backgroundColor: 'white',
    padding: wp('6%'),
    borderRadius: hp('2%'),
    height: hp('60%'),
    alignSelf: 'center',
    marginVertical: hp('10%')
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  menuText: {
    flex: 1,
    fontSize: hp('2.5%'),
    color: 'black',
  },
  mainhead: {
    alignItems: 'center',
    fontSize: hp('5%'),
    fontWeight: '500',
    color: 'black',
  },
  modalContainer: {
    backgroundColor: 'white',
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('2%'),
    borderRadius: hp('3%'),
    width: wp('90%'),
    marginLeft: wp('5%'),
    position: 'absolute',
    top: hp('20%'),
  },
  closeButton: {
    position: 'absolute',
    top: hp('1%'),
    right: wp('5%'),
  },
  modalHeader: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: hp('1%'),
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('1%'),
    height: hp('30%'),
  },
  submitButton: {
    backgroundColor: 'teal',
    paddingVertical: hp('1%'),
    borderRadius: 5,
    alignItems: 'center',
    width: wp('20%'),
    alignSelf: 'center',
    marginTop: hp('2%'),
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  confirmationText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: hp('2%'),
  },
  image1: {
    width: wp('30%'),
    height: hp('10%'), // Adjusted height for better visibility
    marginVertical: hp('2%'),
    alignSelf: 'center',
  },
  newImage: {
    width: wp('30%'),
    height: hp('10%'), // Adjusted height for better visibility
    marginVertical: hp('2%'),
    alignSelf: 'center',
  },
  returnCarModalContainer: {
    backgroundColor: 'white',
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('2%'),
    borderRadius: hp('3%'),
    width: wp('90%'),
    marginLeft: wp('5%'),
    height: hp('30%'),
    position: 'absolute',
    top: hp('20%'),
  },
  conditionBorder: {
    flexDirection: 'row',
    marginVertical: hp('2%'),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: wp('2%'),
  },
  radioButton: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 12,
    padding: 5,
  },
  selected: {
    borderColor: 'blue',
  },
  input1: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    marginLeft: wp('2%'),
    padding: 5,
    height: hp('5%'),
  },
  submitbutton1: {
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    width: wp('20%'),
    alignSelf: 'center',
    marginTop: hp('1%'),
  },
});
