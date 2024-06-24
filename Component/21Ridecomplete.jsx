import React, { useState, useEffect } from "react";
import { url } from './config';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Image
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
import TopSection from "./TopSection";
import Map from "./Map";

export default function Ridecomplete({ navigation, route }) {
  const { bookingId } = route.params;
  const { img } = route.params;
  const { name } = route.params;
  const { phoneno } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [apiSuccess, setApiSuccess] = useState(false);
  const [userId, setUserId] = useState("");

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // Function to call API and show modal on success
  const handleArrived = () => {
    const requestOptions = {
      method: "POST",
      redirect: "follow"
    };

    fetch(`http://${url}:8080/driver/go-for-next-ride/${userId}/${bookingId}`, requestOptions) ///driverId/bookingId
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        // setApiSuccess(true);
        // toggleModal();
        if (result) {
          navigation.navigate("HomePage");
        }
      })
      .catch((error) => {
        console.error(error);
        setApiSuccess(false);
      });
  };

  const fetchUserIdAndData = async () => {
    try {
      const userId = await AsyncStorage.getItem('driverId');
      if (userId) {
        // getData();
        setUserId(userId);
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

  // Function to navigate to the home page
  const goToHome = () => {
    toggleModal();
    navigation.navigate("HomePage");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.mapContainer}> */}
      <TopSection />
      <Map />


      <View style={styles.bottomSection}>
        {/* {message ? ( */}
        <View style={styles.row}>
          <View style={styles.senderInfo}>
            <Image
              source={{ uri: img }}
              style={{
                width: "80%",
                height: "55%",
                borderRadius: wp("50%"),
              }}
            />
            <Text style={styles.senderName}>{name}</Text>
            <View style={styles.iconRow}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => handlePressPhoneNumber(phoneno)}
              >
                <Feather name="phone-call" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => handlePressMessage(phoneno)}
              >
                <Feather name="message-circle" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.addressInfo}>
            {/* <Text style={styles.addressText}>{message.senderLocation}</Text> */}
            <Text style={styles.addressText}>Samata Colony Raipur</Text>

            <TouchableOpacity style={styles.arrivedButton} onPress={handleArrived}>
              <Text style={styles.arrivedButtonText}>Go Ride</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ) : (
            <Text style={styles.distanceText}>Waiting for ride details...</Text>
          )} */}
      </View>

      {/* <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              {apiSuccess ? "Go for the next ride?" : "An error occurred"}
            </Text>
            {apiSuccess && (
              <TouchableOpacity
                style={styles.goNextButton}
                onPress={goToHome}
              >
                <Text style={styles.buttonText}>Go for Next Ride</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={toggleModal}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: hp("28%"),
    position: "absolute",
    bottom: 0,
    width: wp("100%"),
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
    backgroundColor: "green",
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
    backgroundColor: "green",
    padding: hp("1%"),
    borderRadius: 5,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: wp("60%"),
    marginTop: hp("20%"),
    alignItems: "center",
  },
  mesContainer: {
    top: hp("-6%"),
    marginLeft: wp("18%"),
  },
  mContainer: {
    top: hp("-2%"),
    marginLeft: wp("5%"),
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
    marginBottom: 20,
  },
  goNextButton: {
    backgroundColor: "#13C39C",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
    width: wp("60%"),
  },
  closeButton: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: wp("60%"),
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },


  ///backsection
  bottomSection: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#BDE6D9",
    width: wp("100%"),
    height: hp("20%"),
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 20,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  senderInfo: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  senderName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconRow: {
    flexDirection: "row",
    marginTop: hp("1%"),
  },
  iconButton: {
    backgroundColor: "#13C39C",
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: wp("1%"),
  },
  addressInfo: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
  },
  addressText: {
    fontSize: 16,
    textAlign: "right",
  },
  arrivedButton: {
    marginTop: hp("1%"),
    backgroundColor: "#13C39C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  arrivedButtonText: {
    color: "white",
    fontSize: 16,
  },
});
