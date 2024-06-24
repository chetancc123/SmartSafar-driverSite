import React, { useState, useEffect } from "react";
import { url } from './config';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TopSection from "./TopSection";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TripHistory({ navigation }) {
  const [travellers, setTravellers] = useState([]);
  const fetchData = async (userId) => {
    try {
      const response = await fetch(
        `http://${url}:8080/driver/payments/${userId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTravellers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  const fetchUserIdAndData = async () => {
    try {
      const userId = await AsyncStorage.getItem('driverId');
      if (userId) {
        // getData();
        fetchData(userId);
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()} ${getMonthName(
      date.getMonth()
    )} ${date.getFullYear()}`;
    const formattedTime = `${padZero(date.getHours())}:${padZero(
      date.getMinutes()
    )}`;
    return `${formattedDate} ${formattedTime}`;
  };

  const getMonthName = (monthIndex) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[monthIndex];
  };

  const padZero = (number) => (number < 10 ? `0${number}` : number);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.date}>{formatDate(item.localdatetime)}</Text>
      </View>
      <View>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.location}>{item.dropOffLongitude}</Text>
        <Text style={styles.location}>{item.dropOffLatitude}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["#A7F57A", "#BDE6D9"]} style={styles.background}>
        <TopSection navigation={navigation} />
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>History Travellers</Text>
          {/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
          <FlatList
            data={travellers}
            keyExtractor={(item) =>
              item.id ? item.id.toString() : Math.random().toString()
            }
            renderItem={renderItem}
          />
          {/* </ScrollView> */}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    width: wp("90%"),
    alignSelf: "center",
    margin: hp("20%"),
  },
  scrollContainer: {
    paddingBottom: hp("2%"),
    height: hp("80%")
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginVertical: hp("1%"),
    textAlign: "center",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: wp("2%"),
    marginVertical: hp("1%"),
    borderRadius: 5,
    borderColor: "#ccc",

  },
  name: {
    fontSize: 18,
    color: "black",
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  amount: {
    fontSize: 18,
    color: "green",
    fontWeight: "700",
  },
  location: {
    fontSize: 14,
    color: "black",
  },
});
