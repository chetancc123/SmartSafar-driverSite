import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import CheckBox from "react-native-check-box";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Image,
  Dropdown,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Cancel({ navigation }) {
  const [reasons, setReasons] = useState([
    { id: 1, text: "Waiting long time at pickup station", isChecked: false },
    { id: 2, text: "Unable to address passenger", isChecked: false },
    { id: 3, text: "Wrong address shown", isChecked: false },
    { id: 4, text: "Vehicle Low Power", isChecked: false },
    { id: 5, text: "Vehicle Under Maintenance", isChecked: false },
  ]);

  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleCheckboxClick = (id) => {
    const updatedReasons = reasons.map((reason) => ({
      ...reason,
      isChecked: reason.id === id ? !reason.isChecked : false,
    }));

    setReasons(updatedReasons);
  };

  return (
    <View style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={["#DC52FF", "#DC52FF", "#430970", "#390D5C"]}
        style={styles.background}
      >
        {/* Top Right Background Image */}
        <ImageBackground
          source={require("../assets/tright.png")}
          style={styles.topRightImage}
        />

        {/* Bottom Left Background Image */}
        <ImageBackground
          source={require("../assets/bleft.png")}
          style={styles.bottomLeftImage}
        />

        {/* Top Section */}
        <View style={styles.topSection}>
          <Text style={styles.cancelText}>Cancel Taxi</Text>
          <Text style={styles.selectText}>
            Please select the reason for the cancellation
          </Text>
        </View>

        {/* Middle Section */}
        <View style={styles.middleSection}>
          {reasons.map((reason) => (
            <TouchableOpacity
              key={reason.id}
              style={styles.whiteView}
              onPress={() => handleCheckboxClick(reason.id)}
            >
              <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => handleCheckboxClick(reason.id)}
                isChecked={reason.isChecked}
              />

              <View style={styles.reasonContainer}>
                <Text style={styles.reasonText}>{reason.text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.button} onPress={togglePopup}>
            <Text style={styles.buttonText}>Cancel Ride</Text>
          </TouchableOpacity>
        </View>

        {/* Popup */}
        <Modal
          transparent={true}
          visible={isPopupVisible}
          animationType="slide"
        >
          <View style={styles.popupContainer}>
            <View style={styles.popupContent}>
              <LinearGradient
                colors={["#A443A4", "#9EC8F5"]}
                style={styles.background}
              >
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={togglePopup}
                >
                  <MaterialIcons name="cancel" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.popupContentInner}>
                  {/* Add your content for the popup here */}
                  <Image
                    source={require("../assets/emoji.png")}
                    style={styles.popupImage}
                  />

                  <View style={styles.textContainer}>
                    <Text style={styles.popupText1}>
                      We are sad about your cancellation
                    </Text>
                    <Text style={styles.popupText2}>
                      We will continue to improve our service and safety on the
                      next trip.
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={styles.popupButton}
                    onPress={() => navigation.navigate("HomePage")}
                  >
                    <Text style={styles.popupButtonText}>
                      Go for the Next Ride
                    </Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          </View>
        </Modal>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  topRightImage: {
    position: "absolute",
    top: 0,
    right: 0,
    width: wp("90%"),
    height: hp("39%"),
  },
  bottomLeftImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: wp("80%"),
    height: hp("41%"),
  },
  topSection: {
    alignItems: "center",
    marginVertical: hp("10%"),
    height: wp("25%"),
    paddingLeft: 25,
    marginBottom: hp("18%"),
  },
  cancelText: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
    marginBottom: hp("2%"),
  },
  selectText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  middleSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteView: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    width: wp("80%"),
    height: hp("8%"),
    alignItems: "center",
    paddingHorizontal: wp("4%"),
    marginBottom: hp("2%"),
  },
  checkboxContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  reasonContainer: {
    flex: 10,
    justifyContent: "center",
    paddingLeft: wp("2%"),
  },
  reasonText: {
    fontSize: hp("2%"),
    color: "black",
    fontWeight: "bold",
  },
  bottomSection: {
    alignItems: "center",
    marginBottom: hp("13%"),
    marginTop: hp("12%"),
  },
  button: {
    backgroundColor: "red",
    borderRadius: 10,
    width: wp("40%"),
    height: hp("7%"),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: hp("2.5%"),
    fontWeight: "bold",
    color: "white",
  },
  // Popup styles
  modalContainer: {
    flex: 1,
  },
  popupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  popupContent: {
    width: hp("35%"),
    height: hp("47%"),
    backgroundColor: "white",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  closeButtonText: {
    color: "black",
    fontSize: 16,
  },
  popupContentInner: {
    alignItems: "center",
  },
  popupImage: {
    width: 90,
    height: 100,
    resizeMode: "contain",
    marginTop: hp("4%"),
  },
  textContainer: {
    marginVertical: hp("1%"),
    alignItems: "center",
  },
  popupText1: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    marginHorizontal: hp("6%"),
  },
  popupText2: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: hp("2%"),
    marginHorizontal: hp("2%"),
  },
  popupButton: {
    backgroundColor: "#430970",
    paddingVertical: 10,
    paddingHorizontal: hp("3%"),
    borderRadius: 5,
    top: hp("1%"),
  },
  popupButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
