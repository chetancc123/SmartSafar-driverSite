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
import { Entypo } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

  export default function Ridecmplescanner({ navigation }){
  
  const [cashModalVisible, setCashModalVisible] = useState(false);
  const [arrivedModalVisible, setArrivedModalVisible] = useState(false);
  const [receivedAmount, setReceivedAmount] = useState(0);

  // Function to toggle cash modal visibility and set received amount
  const toggleCashModal = (amount) => {
    setReceivedAmount(amount);
    setCashModalVisible(!cashModalVisible);
  };

  // Function to toggle arrived modal visibility
  const toggleArrivedModal = () => {
    setArrivedModalVisible(!arrivedModalVisible);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/maps.webp")}
          style={styles.Images}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["#DC52FF", "#DC52FF", "#430970"]}
            style={styles.background}
          >
            <View style={styles.text}>
              <Text style={styles.text1}>₦ 500 </Text>
              <Text style={styles.text2}> 4.5km</Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.address}>20 ABC street, Pune MH</Text>
              <Entypo
                name="location-pin"
                size={24}
                color="#fff"
                style={styles.pin}
              />
              <Text style={styles.address}>20 abc street, Pune MH</Text>
              <Entypo
                name="location-pin"
                size={24}
                color="#800080"
                style={styles.pin}
              />
            </View>

            <View style={styles.IContainer}>
              <View style={styles.mContainer}>
                <MaterialIcons name="local-phone" size={30} color="white" />
              </View>
              <View>
                <AntDesign
                  name="message1"
                  size={30}
                  color="white"
                  style={styles.mesConatiner}
                />
              </View>
            </View>

            <TouchableOpacity
              style={styles.contact}
              onPress={() => toggleCashModal(2520)}
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>CASH</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.arrived}
              onPress={toggleArrivedModal}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>ONLINE</Text>
            </TouchableOpacity>

            {/* Modal for payment with barcode */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={cashModalVisible}
              onRequestClose={() => {
                setCashModalVisible(!cashModalVisible);
              }}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    {receivedAmount} Rs Successfully Received
                  </Text>
                  <TouchableOpacity
                    style={styles.closeButton}
                    
                    onPress={() => navigation.navigate("Bannerandamount")}
                  >
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            {/* Modal for arrived */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={arrivedModalVisible}
              onRequestClose={() => {
                setArrivedModalVisible(!arrivedModalVisible);
              }}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  {/* Add your content for arrived modal here */}
                  <Image
                    source={require("../assets/barcode.png")} // Provide the correct path to your image
                    style={styles.modalImage}
                  />
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => navigation.navigate("Bannerandamount")}
                  >
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </LinearGradient>
        </ImageBackground>
      </View>
    </SafeAreaView>
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
  Images: {
    justifyContent: "flex-end",
    width: wp("100%"),
    height: hp("105%"),
  },
  IContainer: {
    width: wp("30%"),
    marginLeft: wp("5%"),
  },
  text: {
    top: hp("4%"),
    marginLeft: wp("50%"),
    flexDirection: "row",
  },
  text1: {
    color: "#fff",
    fontSize: 20,
  },
  text2: {
    color: "#fff",
    fontSize: 20,
  },
  box: {
    marginLeft: wp("58%"),
    marginTop: hp("4%"),
  },
  address: {
    color: "#fff",
    top: hp("2%"),
    fontSize: 12,
  },
  pin: {
    marginLeft: wp("-8%"),
  },
  contact: {
    backgroundColor: "#7FE88A",
    padding: hp("1%"),
    borderRadius: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: wp("8%"),
    marginTop: hp("-3%"),
    alignItems: "center",
  },
  arrived: {
    position: "absolute",
    backgroundColor: "#800080",
    padding: hp("1%"),
    borderRadius: 1,
    width: wp("30%"),
    height: hp("5%"),
    margin: wp("60%"),
    marginTop: hp("21.5%"),
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
    padding: hp("2%"),
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#800080",
    alignItems: "center",
    width: wp("25%"),
    padding: hp("1%"),
    borderRadius: 5,
    marginTop: hp("2%"),
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  mesConatiner: {
    top: hp("-4%"),
    marginLeft: wp("18%"),
  },
  mContainer: {
    marginLeft: wp("1%"),
  },
  modalImage: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    marginBottom: 10,
  },
});


