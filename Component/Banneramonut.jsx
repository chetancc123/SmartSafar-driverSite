import React, { useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from '@expo/vector-icons';

const Banneramonut = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // Function to handle "Arrived" button click
  const handleArrived = () => {
    toggleModal(); // Close the modal when "Arrived" button is clicked
    // Perform any other actions related to the ride being completed
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assests/maps.webp")}
        style={styles.images}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["#DC52FF", "#DC52FF", "#430970"]}
          style={styles.background}
        >
          <TouchableOpacity style={styles.contact} onPress={toggleModal}>
            <Text style={{ color: "black", fontWeight: "bold" }}>
              GO for Next Ride
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        

        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <MaterialIcons name="verified" size={100} color="green" />
            <Text style={styles.modalText}>
              Your ride is done successfully!
            </Text>
            <TouchableOpacity
              style={styles.arrivedButton}
              onPress={handleArrived}
            >
              <Text style={styles.arrivedButtonText}>Arrived</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: hp("35%"),
  },
  images: {
    justifyContent: "flex-end",
    width: wp("100%"),
    height: hp("105%"),
  },
  contact: {
    backgroundColor: "#800080",
    padding: 10,
    borderRadius: 20,
    width: wp("80%"),
    height: hp("5%"),
    marginLeft: wp("8%"),
    marginTop: hp("20%"),
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom:hp("2%"),
  },
  arrivedButton: {
    backgroundColor: "#800080",
    padding:hp ("1.5%"),
    borderRadius: 20,
    width: wp("50%"),
    alignItems: "center",
  },
  arrivedButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Banneramonut;
