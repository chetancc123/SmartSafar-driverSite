import React, { useEffect, useState } from "react";
import { url } from './config';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  Linking,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Map from "./Map";
import TopSection from "./TopSection";
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DriverAccept({ navigation }) {
  const [image, setImage] = useState(null);
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState({});
  let ws;

  // Function to accept a ride
  const acceptRide = () => {
    const requestOptions = {
      method: "POST",
      redirect: "follow"
    };

    fetch(`http://${url}:8080/driver/accept-ride/${userId}/${message.bookingId}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        // Alert.alert("Success", "Ride Accepted Successfully");
        navigation.navigate("Arrivedlocation", { bookingId: message.bookingId, img: message.profileImg, name: message.name, phoneno: message.phoneNumber, });
      })
      .catch(error => {
        console.error(error);
        // Alert.alert("Error", "Failed to accept ride");
      });
  };

  // Function to fetch user ID from AsyncStorage
  const fetchUserIdAndData = async () => {
    try {
      const userId = await AsyncStorage.getItem('driverId');
      if (userId) {
        setUserId(userId);
      } else {
        console.error('No userId found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error retrieving userId from AsyncStorage:', error);
    }
  };

  // Function to initialize WebSocket connection
  const initializeWebSocket = () => {
    ws = new WebSocket('ws://${url}:8080/myhandler');

    ws.onopen = () => {
      console.log('WebSocket connection opened');
      // You can send driver details to the server here if needed
    };

    ws.onmessage = (event) => {
      console.log('WebSocket message received:', event.data);
      handleMessage(event.data);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error.message);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };
  };

  // Function to handle incoming WebSocket messages
  const handleMessage = (data) => {
    try {
      const parsedData = JSON.parse(data);
      setMessage(parsedData);
    } catch (error) {
      console.error('Error parsing WebSocket message:', error);
    }
  };

  useEffect(() => {
    initializeWebSocket();
    fetchUserIdAndData();

    // Cleanup WebSocket connection on unmount
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const handlePressPhoneNumber = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`).catch(() =>
      Alert.alert("Error", "Unable to open the call log.")
    );
  };

  const handlePressMessage = (phoneNumber) => {
    Linking.openURL(`sms:${phoneNumber}`).catch(() =>
      Alert.alert("Error", "Unable to open the messaging app.")
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={StyleSheet.absoluteFill}>
          <Map />
        </View>
        <TopSection navigation={navigation} />
        {/* <View style={styles.background}>
          <View style={styles.infoContainer}>
            {message ? (
              <>
                <Text style={styles.distanceText}>Phone: {message.phoneNumber}</Text>
              </>
            ) : (
              <Text style={styles.distanceText}>Waiting for ride details...</Text>
            )}
            <TouchableOpacity
              style={styles.acceptButton}
              onPress={acceptRide}
            >
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View> */}
        <View style={styles.bottomSection}>
          {message ? (
            <View style={styles.row}>
              <View style={styles.senderInfo}>
                <Image
                  source={{ uri: image || message.profileImg }}
                  style={{
                    width: "80%",
                    height: "55%",
                    borderRadius: wp("50%"),
                  }}
                />
                <Text style={styles.senderName}>{message.name}</Text>
                <View style={styles.iconRow}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => handlePressPhoneNumber(message.phoneNumber)}
                  >
                    <Feather name="phone-call" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => handlePressMessage(message.phoneNumber)}
                  >
                    <Feather name="message-circle" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.addressInfo}>
                {/* <Text style={styles.addressText}>{message.senderLocation}</Text> */}
                <Text style={styles.addressText}>Samata Colony Raipur</Text>

                <TouchableOpacity style={styles.arrivedButton} onPress={acceptRide}>
                  <Text style={styles.arrivedButtonText}>Accept</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <Text style={styles.distanceText}>Waiting for ride details...</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  distanceText: {
    fontSize: 16,
    marginBottom: 10,
  },
  acceptButton: {
    backgroundColor: "#13C39C",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
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
